module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12, // phiên bản JavaScript sử dụng
    sourceType: 'module', // cho phép sử dụng module
    ecmaFeatures: {
      jsx: true, // cho phép sử dụng syntax JSX
    },
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  root: true,
  extends: '@react-native-community',
};
