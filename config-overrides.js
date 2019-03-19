const { override, addBabelPlugins } = require('customize-cra')

const addWebpackRules = config => {
  const rules = config.module.rules[2].oneOf

  rules.unshift(
    Object.assign({}, rules[rules.length - 1], {
      test: /\.wasm$/,
      type: 'javascript/auto',
    })
  )

  rules.unshift({
    test: /\.worker\.js$/,
    use: { loader: 'worker-loader' },
  })

  // Workaround for WebWorkers with HMR, see: https://github.com/webpack/webpack/issues/6642
  config.output.globalObject = 'this'

  return config
}

module.exports = override(
  ...addBabelPlugins('polished', ['styled-components', { pure: true }]),
  addWebpackRules
)
