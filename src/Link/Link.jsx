import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Anchor from '../helpers/Anchor'

import '../base.css'
import '@youseedk/dna/css/elements/ys-link.css'

const Link = ({
  href,
  to,
  children,
  className,
  unstyled,
  ...props
}) => (
  <Anchor
    href={href}
    to={to}
    className={classNames(
      // Links inside notifications should not have the `ys-link` class
      !unstyled && 'ys-link',
      className,
    )}
    {...props}
  >
    {children}
  </Anchor>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
  unstyled: PropTypes.bool,
}

Link.defaultProps = {
  to: null,
  href: null,
  className: '',
  unstyled: false,
}

export default Link
