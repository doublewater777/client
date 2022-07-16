const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'blogme';
      return args;
    })
  },
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules', './loaders/'],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('jfif')
      .test(/\.jfif$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }




})
