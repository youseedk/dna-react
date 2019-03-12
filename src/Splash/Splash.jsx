import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

const Splash = (props) => {
  const {
    price,
    description,
    color,
    className,
  } = props

  const priceSuffixed = `${price},-`
  const wrapperProps = {
    className: classNames(
      'ys-splash',
      `ys-splash--${color}`, // TODO: Only `ys-splash--blue` is being used, but more colors are to be expected
      className,
    ),
  }

  return (
    <div {...wrapperProps}>
      <strong className="ys-splash__price">{priceSuffixed}</strong>
      {description
        && <small className="ys-splash__desc">{description}</small>
      }
    </div>
  )
}

Splash.propTypes = {
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  color: PropTypes.oneOf(['yellow', 'blue']),
  className: PropTypes.string,
}

Splash.defaultProps = {
  color: 'yellow',
  description: '',
  className: '',
}

export default Splash
