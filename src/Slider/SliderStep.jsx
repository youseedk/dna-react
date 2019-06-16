import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SliderStep = ({
  children,
  className,
  ...props
}) => {
  const wrapperProps = {
    className: classNames(
      'ys-slider__data-item',
      className,
    ),
    ...props,
  }

  return (
    <span {...wrapperProps}>
      {children}
    </span>
  )
}

SliderStep.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

SliderStep.defaultProps = {
  className: '',
}

export default SliderStep
