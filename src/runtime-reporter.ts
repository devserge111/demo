// src/runtime-reporter.ts
// TODO: check if we need this file maybe we will need to delete it
function postControl(path: string, payload: unknown): void {
  const body = JSON.stringify(payload);
  const url = `/__control__/${path}`;

  if (typeof navigator.sendBeacon === "function") {
    try {
      const ok = navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
      if (ok) return; // success, no fetch needed
    } catch {
      // ignore and fall through to fetch
    }
  }

  // Explicitly fire fetch and ignore its promise result
  void fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
}

export function installRuntimeReporter(projectId: string) {
  window.addEventListener("error", (e: ErrorEvent) => {
    postControl("runtime-error", {
      projectId,
      kind: "error",
      message: e.message,
      stack: e.error?.stack,
      source: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      url: location.href,
      ua: navigator.userAgent,
    });
  });

  window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
    postControl("runtime-error", {
      projectId,
      kind: "unhandledrejection",
      message: String(e.reason?.message ?? e.reason),
      stack: e.reason?.stack,
      url: location.href,
      ua: navigator.userAgent,
    });
  });

  const orig = console.error;
  console.error = (...args: unknown[]) => {
    postControl("runtime-error", {
      projectId,
      kind: "console.error",
      message: args.map((a) => String(a)).slice(0, 5).join(" | "),
    });
    orig(...args);
  };
}
