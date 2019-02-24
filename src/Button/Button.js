import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

class Button extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    disabled: PropTypes.bool,
  }

  render() {
    const {
      label,
      href,
      onClick,
      disabled,
      className,
    } = this.props

    const buttonContent = <span class="ys-button__text">{label}</span>

    const wrapperProps = {
      disabled,
      className: classNames(
        className,
        'ys-button',
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