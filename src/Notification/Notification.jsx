import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
      info: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 12">
          <g fill="none" fillRule="evenodd">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5v6" />
            <path fill="currentColor" d="M2 1a1 1 0 11-2 0 1 1 0 012 0" />
          </g>
        </svg>
      ),
      success: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.5 5.124L5.01 8.75l5.49-7.5" />
        </svg>
      ),
      warning: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 12">
          <g fill="none" fillRule="evenodd">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v6" />
            <path fill="currentColor" d="M2 11a1 1 0 11-2 0 1 1 0 012 0" />
          </g>
        </svg>
      ),
      error: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 12">
          <g fill="none" fillRule="evenodd">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v6" />
            <path fill="currentColor" d="M2 11a1 1 0 11-2 0 1 1 0 012 0" />
          </g>
        </svg>
      ),
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
