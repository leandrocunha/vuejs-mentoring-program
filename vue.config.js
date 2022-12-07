const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("image-webpack")
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("file-loader")
      .loader("image-webpack-loader")
      .options({
        bypassOnDebug: true,
        disable: true,
      });
  },
});
