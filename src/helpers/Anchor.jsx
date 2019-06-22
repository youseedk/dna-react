import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// A simple helper component that either returns a regular
// anchor element or a React Router <NavLink> element.

const Anchor = ({
  children,
  to,
  href,
  disabled,
  ...props
}) => {
  const Component = to ? NavLink : 'a'
  const allProps = props

  if (disabled) {
    allProps.tabIndex = -1
    allProps['aria-disabled'] = true
  }

  // Set role="button" if no `to` prop is passed,
  // and `href` is either undefined or '#' meaning
  // it has effectively been turned into a button
  // relying on an `onClick` prop to work.
  if (!to && (!href || href.trim() === '#')) {
    allProps.role = 'button'
  }

  return (
    <Component
      to={to}
      href={href}
      {...allProps}
    >
      {children}
    </Component>
  )
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  href: PropTypes.string,
  disabled: PropTypes.bool,
}

Anchor.defaultProps = {
  to: null,
  href: null,
  disabled: false,
}

export default Anchor
