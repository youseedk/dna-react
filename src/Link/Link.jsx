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
  ...props
}) => (
  <Anchor
    href={href}
    to={to}
    className={classNames(
      'ys-link',
      className,
    )}
    {...props}
  >
    {children}
  </Anchor>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}

Link.defaultProps = {
  to: null,
  href: null,
  className: '',
}

export default Link
