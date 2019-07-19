import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconUIInformation from '@youseedk/dna/svg/ui-icons/information.svg'
import IconUIExclamationMark from '@youseedk/dna/svg/ui-icons/exclamation-mark.svg'
import IconUICheckMark from '@youseedk/dna/svg/ui-icons/check-mark.svg'
import NotificationText from './NotificationText'
import NotificationTextLink from './NotificationTextLink'

import componentPropType from '../helpers/componentPropType'

const Notification = ({
  variant,
  className,
  children,
  ...props
}) => {
  const Icon = () => {
    const variantIcons = {
      info: IconUIInformation,
      success: IconUICheckMark,
      warning: IconUIExclamationMark,
      error: IconUIExclamationMark,
    }

    const VariantIcon = variantIcons[variant]

    return (
      <VariantIcon className="ys-icon" />
    )
  }

  const wrapperProps = {
    className: classNames(
      'ys-notification',
      `ys-notification--${variant}`,
      className,
    ),
    ...props,
  }

  return (
    <div {...wrapperProps}>
      <span
        className="ys-notification__icon"
        aria-hidden="true"
      >
        <Icon />
      </span>
      <div className="ys-notification__content">
        {children}
      </div>
    </div>
  )
}

Notification.propTypes = {
  children: componentPropType(NotificationText).isRequired,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  className: PropTypes.string,
}

Notification.defaultProps = {
  variant: 'info',
  className: '',
}

Notification.Text = NotificationText
Notification.TextLink = NotificationTextLink

export default Notification
