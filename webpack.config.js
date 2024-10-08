const { DefinePlugin } = require('webpack')

module.exports = {
  // inne ustawienia webpacka
  plugins: [
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      __VUE_OPTIONS_API__: JSON.stringify(true), // lub false, je�li nie u�ywasz Options API
      __VUE_PROD_HYDRATION__: JSON.stringify(true)
    })
  ]
}
