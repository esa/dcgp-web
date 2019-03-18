const { override, addBabelPlugins } = require('customize-cra')

/* config-overrides.js */
module.exports = override(
  ...addBabelPlugins('polished', ['styled-components', { pure: true }]),
  config => {
    config.module.rules[2].oneOf.unshift(
      Object.assign(
        {},
        config.module.rules[2].oneOf[config.module.rules[2].oneOf.length - 1],
        {
          test: /\.wasm$/,
          type: 'javascript/auto',
        }
      )
    )
    return config
  }
)
