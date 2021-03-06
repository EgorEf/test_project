module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import"
  ],
  rules: {
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
    ],
    "no-param-reassign": ["error", {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state"
        ]
    }]
  }
};