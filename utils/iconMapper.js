// Exports mapped objects of icons for use in stories

const icons = require.context('../node_modules/@youseedk/dna/svg', true, /.svg$/)
const mappedIcons = {}

icons.keys().forEach((icon) => {
  const sanitizedKey = icon.replace('.svg', '').replace('./', '')
  const isSprite = sanitizedKey === 'icons-sprite'

  if (!isSprite) {
    mappedIcons[sanitizedKey] = require(`../node_modules/@youseedk/dna/svg/${icon.replace('./', '')}`).default
  }
})

export default mappedIcons
