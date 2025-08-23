// eslint.config.ts
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 1) Ignore non-app stuff
  {
    ignores: [
      "dist",
      "node_modules",
      "public",
      "**/*.config.*",
      "vite.config.*",
      "tailwind.config.*",
      "postcss.config.*",
      "scripts/**",
      "temp/**",
    ],
  },

  // 2) App code only
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // If you want type-aware rules, add parserOptions.project here.
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React hooks
      ...reactHooks.configs.recommended.rules,

      // Keep HMR hints but don't fail CI
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Your asks: stop failing on these
      "@typescript-eslint/no-explicit-any": "off", // was error in your logs
"@typescript-eslint/ban-ts-comment": [
    "warn",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": "allow-with-description"
    }
  ],
      "no-unused-expressions": [
        "warn",
        { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
      ],

      // You already had this off
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // 3) (Optional) Relax Fast Refresh rule for shadcn/ui internals
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  }
);



// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   { ignores: ["dist"] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//       "@typescript-eslint/no-unused-vars": "off",
//     },
//   }
// );
