module.exports = {
  presets: [
    '@babel/preset-env',
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
  ["module-resolver", {
  "root": [
    "./"
  ],
  "alias": {
    "@": "./src"
  }
}]
]
};
