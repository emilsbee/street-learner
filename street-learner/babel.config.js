module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "extensions": [".js", ".ts", ".tsx", ".ios.js", ".android.js", ".ios.ts", ".android.ts"],
        "alias": {
          "components": "./components",
          "components/*": "./components/*",
          "types": "./types/index",
          "services": "./services",
          "services/*": "./services/*",
        },
      }],
    ]
  };
};
