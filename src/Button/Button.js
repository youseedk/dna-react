import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

class Button extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func, // TODO: Add custom validation, as either `onClick` or `href` is required
    href: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'light', 'cta', 'solid-dark', 'solid-light', 'stripped-dark', 'stripped-light']),
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    variant: 'default',
    disabled: false,
  }

  render() {
    const {
      label,
      href,
      onClick,
      disabled,
      className,
      variant,
    } = this.props

    const buttonContent = <span className="ys-button__text">{label}</span>

    const wrapperProps = {
      disabled,
      className: classNames(
        className,
        'ys-button',
        `ys-button--${variant}`,
        disabled && 'ys-disabled'
      ),
    }

    if (href) {
      return (
        <a href={href} {...wrapperProps}>
          {buttonContent}
        </a>
      )
    }

    return (
      <button onClick={onClick} {...wrapperProps}>
        {buttonContent}
      </button>
    )
  }
}

export default Button