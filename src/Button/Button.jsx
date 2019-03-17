import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../base.css'
import '@youseedk/dna/css/elements/ys-button.css'
import '@youseedk/dna/css/icons/ys-icons.css'

const Button = (props) => {
  const {
    label,
    href,
    onClick,
    disabled,
    className,
    variant,
    block,
    icon: Icon,
    iconOnly,
  } = props

  const buttonContent = (
    <Fragment>
      <span
        className={classNames(
          'ys-button__text',
          iconOnly && 'ys-u-visuallyhidden',
        )}
      >
        {label}
      </span>
      {Icon
        && (
          <span
            className="ys-button__icon"
            aria-hidden="true"
          >
            <Icon className="ys-icon" />
          </span>
        )
      }
    </Fragment>
  )

  const wrapperProps = {
    disabled,
    className: classNames(
      'ys-button',
      `ys-button--${variant}`,
      disabled && 'ys-disabled', // TODO: This feels very anti-BEM
      block && 'ys-button--block',
      Icon && !iconOnly && 'ys-button--icon',
      iconOnly && 'ys-button--icon-only',
      className,
    ),
  }

  if (href) {
    return (
      <a
        href={href}
        {...wrapperProps}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      {...wrapperProps}
    >
      {buttonContent}
    </button>
  )
}

/* eslint-disable react/require-default-props */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func, // TODO: Add custom validation, as either `onClick` or `href` is required
  href: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'light', 'cta', 'solid-dark', 'solid-light', 'stripped-dark', 'stripped-light']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  block: PropTypes.bool,
  icon: PropTypes.func,
  iconOnly: PropTypes.bool,
}
/* eslint-enable react/require-default-props */

Button.defaultProps = {
  variant: 'default',
  disabled: false,
  className: '',
  block: false,
  icon: null,
  iconOnly: false,
}

export default Button
