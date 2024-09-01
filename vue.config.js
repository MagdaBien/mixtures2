const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: ['module-name'],
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_HYDRATION__: JSON.stringify(true)
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/_variables.scss')]
    }
  }
})
