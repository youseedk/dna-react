import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// A simple helper component that either returns a regular
// anchor element or a React Router <NavLink> element.

const RouterLink = ({
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

RouterLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
}

RouterLink.defaultProps = {
  to: null,
  href: null,
  disabled: false,
}

export default RouterLink
