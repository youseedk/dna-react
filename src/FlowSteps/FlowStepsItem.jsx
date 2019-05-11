import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FlowStepsItem = (props) => {
  const {
    children,
    active,
    className,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-flow-steps__item',
      active && 'ys-flow-steps__item--active',
      className,
    ),
  }

  return (
    <li {...wrapperProps}>
      <span className="ys-flow-steps__label">
        {children}
      </span>
    </li>
  )
}

FlowStepsItem.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
}

FlowStepsItem.defaultProps = {
  active: false,
  className: '',
}

export default FlowStepsItem
