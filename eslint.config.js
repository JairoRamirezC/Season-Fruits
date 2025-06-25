import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { 
      js,
      react: pluginReact 
    }, 
    extends: [
      "js/recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime"
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva la necesidad de importar React
      "react/jsx-uses-react": "off",      // Desactiva la verificación de uso de React
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
