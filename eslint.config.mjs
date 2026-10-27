import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "**/libraries/**",
      "node_modules/**",
      ".cache/**",
      "playwright-report/**",
      "test-results/**",
      "blob-report/**",
      "coverage/**",
    ],
  },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    files: ["**/*.js"],
    ignores: ["tests/**"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{mjs,cjs}", "tests/**"],
    languageOptions: { globals: globals.node },
  },
];
