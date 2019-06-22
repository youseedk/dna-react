import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Anchor, { anchorPropTypes } from '../helpers/Anchor'

import '../base.css'
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-button.css'

const Button = ({
  label,
  to,
  href,
  onClick,
  disabled,
  className,
  variant,
  block,
  icon: Icon,
  iconOnly,
  iconAlignment,
  ...props
}) => {
  const icon = (
    Icon
      && (
        <span
          className="ys-button__icon"
          aria-hidden="true"
        >
          <Icon className="ys-icon" />
        </span>
      )
  )

  const buttonContent = (
    <Fragment>
      {iconAlignment === 'left' && icon}
      <span
        className={classNames(
          'ys-button__text',
          iconOnly && 'ys-u-visuallyhidden',
        )}
      >
        {label}
      </span>
      {iconAlignment === 'right' && icon}
    </Fragment>
  )

  const wrapperProps = {
    disabled,
    className: classNames(
      'ys-button',
      variant && `ys-button--${variant}`,
      disabled && 'ys-button--disabled',
      block && 'ys-button--block',
      Icon && !iconOnly && 'ys-button--icon',
      iconOnly && 'ys-button--icon-only',
      className,
    ),
    ...props,
  }

  if (to || href) {
    return (
      <Anchor
        to={to}
        href={href}
        {...wrapperProps}
      >
        {buttonContent}
      </Anchor>
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
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'cta', 'secondary-dark', 'secondary-light', 'tertiary-dark', 'tertiary-light']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  block: PropTypes.bool,
  icon: PropTypes.elementType,
  iconOnly: PropTypes.bool,
  iconAlignment: PropTypes.oneOf(['left', 'right']),
  ...anchorPropTypes,
}
/* eslint-enable react/require-default-props */

Button.defaultProps = {
  variant: null,
  disabled: false,
  className: '',
  block: false,
  icon: null,
  iconOnly: false,
  iconAlignment: 'right',
}

export default Button
