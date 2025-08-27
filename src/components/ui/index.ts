// Prefer explicit re-exports for modules where we also add aliases,
// so we don't collide with `export *` re-exports.

export { Input } from "./input";
export { Label } from "./label";
export { Textarea } from "./textarea";
export { Button } from "./button";

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./card";

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select";

// Alias: let callers use <Option> like MUI-style APIs.
export { SelectItem as Option } from "./select";

// Alias shadcn Dialog as Modal with part names.
export {
  Dialog as Modal,
  DialogContent as ModalContent,
  DialogHeader as ModalHeader,
  DialogTitle as ModalTitle,
  DialogDescription as ModalBody,
  DialogFooter as ModalFooter,
} from "./dialog";

export * from "./Navbar";
// Now re-export everything else via wildcard.
// IMPORTANT: omit modules we already handled above (input, label, textarea, button, card, select, dialog)
// to avoid "duplicate export" conflicts.
export * from "./alert";
export * from "./avatar";
export * from "./badge";
export * from "./calendar";
export * from "./checkbox";
// export * from "./dialog";   // intentionally omitted (aliased above)
export * from "./dropdown-menu";
export * from "./form";
// export * from "./input";    // intentionally omitted (explicit above)
export * from "./list";
export * from "./progress";
export * from "./radio-group";
export * from "./scroll-area";
// export * from "./select";   // intentionally omitted (explicit + alias above)
export * from "./separator";
export * from "./sheet";
export * from "./sidebar";
export * from "./skeleton";
export * from "./sonner";
export * from "./switch";
export * from "./table";
export * from "./tabs";
// export * from "./textarea"; // intentionally omitted (explicit above)
export * from "./toast";
export * from "./tooltip";
export * from "./use-toast";
