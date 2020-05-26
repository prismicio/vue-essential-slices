const path = require('path');
const theme = require('./theme')

const filterRules = filters => rule => {
  return filters.some(filter => String(rule.test) === String(filter));
};


module.exports = {
  theme,
  stories: ['../stories/**/*.stories.js', '../src/slices/**/*.stories.js'],
  // addons: ['@storybook/addon-knobs', '@storybook/addon-docs/'],
  webpackFinal(config) {
    //add addon-storysource
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      loaders: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre'
    });
    // allow SCSS
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.vue$/,
      include: path.resolve(__dirname),
      loader: 'vue-loader',
    })
    // setup URL Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    };

    const rules = config.module.rules;
    const mdxRules = rules.filter(
      filterRules([/\.mdx$/, /\.(stories|story).mdx$/])
    );
    let [jsxRule] = rules.filter(filterRules([/\.(mjs|jsx?)$/]));

    mdxRules.forEach(mdxRule => {
      const [babelLoader] = mdxRule.use.filter(
        ({
          loader
        }) => loader === 'babel-loader'
      );
      babelLoader.options.presets = babelLoader.options.presets.filter(
        preset => !preset.includes('babel-preset-vue')
      );
    });

    const [babelLoader] = jsxRule.use.filter(({
      loader
    }) => loader === 'babel-loader')
    babelLoader.options = {
      cacheDirectory: path.resolve(__dirname, '..', 'node_modules', '.cache', 'storybook'),
      presets: ['@vue/app'],
      babelrc: false
    }

    // config.plugins.push(new VueLoaderPlugin())

    return config;
  }
};
