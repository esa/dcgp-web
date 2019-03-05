const { override, addBabelPlugins } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
  ...addBabelPlugins('polished', ['styled-components', { pure: true }])
);
