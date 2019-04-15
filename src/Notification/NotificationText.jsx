import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NotificationText = (props) => {
  const {
    children,
    className,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-notification__text',
      className,
    ),
  }

  return (
    <p {...wrapperProps}>
      {children}
      {/* <a href="#" class="ys-notification__inline-link"></a> */}
    </p>
  )
}

NotificationText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

NotificationText.defaultProps = {
  className: '',
}

export default NotificationText
