module.exports = {
  publicPath: '/Airco/',  // De naam van je GitHub Pages repository subdirectory
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:8080',
  },

  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};