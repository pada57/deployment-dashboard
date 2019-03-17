module.exports = {
    parser: "babel-eslint",
    env: {
      es8: true,
      node: true,
      browser: true,
      jest: true
    },
    parserOptions: {
      ecmaVersion: 8,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ["react"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ]
  };
  