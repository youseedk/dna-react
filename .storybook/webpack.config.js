module.exports = ({ config }) => {
  // Modify storybook's file-loader rule to avoid conflicts
  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'))
  fileLoaderRule.exclude = /\.svg$/

  config.module.rules.push({
    test: /stories.jsx/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  config.module.rules.push({
    test: /\.svg/,
    use: 'react-svg-loader',
  })

  return config
}
