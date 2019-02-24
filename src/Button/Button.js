import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
  }

  wrapperProps = {
    className: "ys-button",
  }

  render() {
    const { label, href, onClick } = this.props
    const buttonContent = <span class="ys-button__text">{label}</span>

    if (href) {
      return (
        <a href={href} {...this.wrapperProps}>
          {buttonContent}
        </a>
      )
    }

    return (
      <button onClick={onClick} {...this.wrapperProps}>
        {buttonContent}
      </button>
    )
  }
}

export default Button