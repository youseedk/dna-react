import PropTypes from 'prop-types'

const componentPropType = (component, acceptArraysOnly = false) => {
  const componentShape = PropTypes.shape({
    type: PropTypes.oneOf([component]),
  })

  const propTypes = [
    PropTypes.arrayOf(PropTypes.oneOfType([
      componentShape,
      PropTypes.oneOf([false]),
    ])),
  ]

  if (acceptArraysOnly === false) {
    propTypes.push(
      componentShape,
      PropTypes.oneOf([false]),
    )
  }

  return PropTypes.oneOfType(propTypes)
}

export default componentPropType
