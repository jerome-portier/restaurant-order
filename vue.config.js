const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackAssetsManifest({
        output: "asset-manifest.json",
        customize(entry, original, manifest, asset) {
          return {
            key: entry.key === "app.js" ? "main.js" : `/${entry.key}`,
            value: `/${entry.value}`
          };
        }
      })
    ],
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: 5001
    }
    // With the configuration below we rename the filename in the 'value', not the key!?
    // output: {
    //   filename: 'main.js'
    // }
  }
};
