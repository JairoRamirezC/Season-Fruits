import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";


export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { 
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { 
      'react': pluginReact,
      'react-hooks': pluginReactHooks
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva la necesidad de importar React
      "react/jsx-uses-react": "off", // Desactiva la verificación de uso de React
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "off",
      "no-unsafe-optional-chaining": "warn"
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
]);
