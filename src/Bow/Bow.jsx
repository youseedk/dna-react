import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../base.css'
import '@youseedk/dna/css/elements/ys-bow.css'

const Bow = ({
  variant,
  className,
  ...props
}) => {
  const wrapperProps = {
    className: classNames(
      'ys-bow',
      variant && `ys-bow--${variant}`,
      className,
    ),
    ...props,
  }

  return (
    <div
      {...wrapperProps}
    />
  )
}

Bow.propTypes = {
  variant: PropTypes.oneOf(['midnight-green']),
  className: PropTypes.string,
}

Bow.defaultProps = {
  variant: null,
  className: '',
}

export default Bow
