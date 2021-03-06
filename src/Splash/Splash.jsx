import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Splash = ({
  price,
  description,
  variant,
  className,
  ...props
}) => {
  const priceSuffixed = `${price},-`
  const wrapperProps = {
    className: classNames(
      'ys-splash',
      `ys-splash--${variant}`, // TODO: Only `ys-splash--blue` is being used, but more colors are to be expected
      className,
    ),
    ...props,
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
  variant: PropTypes.oneOf(['yellow', 'blue']),
  className: PropTypes.string,
}

Splash.defaultProps = {
  variant: 'yellow',
  description: '',
  className: '',
}

export default Splash
