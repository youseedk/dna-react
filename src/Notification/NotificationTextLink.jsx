import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Link from '../Link'

const NotificationTextLink = ({
  children,
  className,
  ...props
}) => {
  const wrapperProps = {
    unstyled: true,
    className: classNames(
      'ys-notification__inline-link',
      className,
    ),
    ...props,
  }

  return (
    <Link {...wrapperProps}>
      {children}
    </Link>
  )
}

NotificationTextLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NotificationTextLink.defaultProps = {
  className: '',
}

export default NotificationTextLink
