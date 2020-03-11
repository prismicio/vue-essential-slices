const theme = require('./theme')

module.exports = {
  stories: ["../src/slices/*.stories.js"],
  // presets: ["@storybook/addon-docs/preset"],
  addons: ["@storybook/addon-knobs", "@storybook/addon-docs/"],
  theme
  // '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'
};