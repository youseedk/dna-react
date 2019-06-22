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

const navLinkPropTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  replace: PropTypes.bool,
  target: PropTypes.string,
  'aria-current': PropTypes.oneOf([
    'page',
    'step',
    'location',
    'date',
    'time',
    'true',
  ]),
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  exact: PropTypes.bool,
  isActive: PropTypes.func,
  location: PropTypes.object,
  strict: PropTypes.bool,
  style: PropTypes.object,
}

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  ...navLinkPropTypes,
}

Anchor.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  to: null,
  href: null,
  disabled: false,
}

export { navLinkPropTypes as anchorPropTypes }

export default Anchor
