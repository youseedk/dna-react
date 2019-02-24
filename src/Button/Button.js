import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    <button {...this.props}>{this.props.children}</button>
  }
}

export default Button