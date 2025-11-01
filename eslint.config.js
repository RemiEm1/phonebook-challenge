import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx}"],
        extends: [
            js.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
            prettier,
        ],
        plugins: { prettier: prettierPlugin },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        rules: {
            "no-unused-vars": ["off"],
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    singleQuote: true,
                    trailingComma: "es5",
                    printWidth: 88,
                    tabWidth: 4,
                    bracketSpacing: true,
                    arrowParens: "always",
                    endOfLine: "lf",
                },
            ],
        },
    },
]);
