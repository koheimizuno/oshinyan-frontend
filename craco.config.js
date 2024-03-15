const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.usedExports = true;
      const terserPlugin = webpackConfig.optimization.minimizer.find(
        (minimizer) => minimizer.options.terserOptions
      );
      if (terserPlugin) {
        terserPlugin.options.terserOptions.mangle = true;
      }
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: TerserPlugin,
      options: {
        terserOptions: {
          mangle: true,
        },
      },
    },
  ],
};
