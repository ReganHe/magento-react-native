module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'react'
  ],
  rules: {
    'object-curly-spacing': [
      "error", "always", { "objectsInObjects": true }
    ],
    "react/prop-types": 0,
    "react-native/no-inline-styles":0
  }
};
