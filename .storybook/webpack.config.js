const path = require('path')

module.exports = ({ config }) => {
  // Modify Storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'))
  fileLoaderRule.exclude = path.resolve(__dirname, '../node_modules/@youseedk')

  const newRules = [
    {
      test: /stories.jsx/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    },
    {
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    },
  ]

  config.module.rules.push(...newRules)

  return config
}
