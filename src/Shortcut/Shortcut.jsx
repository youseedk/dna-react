import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Anchor from '../helpers/Anchor'

import '../base.css'
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-shortcut.css'

const Shortcut = ({
  label,
  href,
  to,
  icon: Icon,
  className,
  ...props
}) => (
  <Anchor
    href={href}
    to={to}
    className={classNames(
      'ys-shortcut',
      className,
    )}
    {...props}
  >
    <figure
      className="ys-shortcut__icon-container"
      aria-hidden="true"
    >
      <Icon className="ys-shortcut__icon ys-icon" />
    </figure>
    <span className="ys-shortcut__title">
      {label}
    </span>
  </Anchor>
)

Shortcut.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  href: PropTypes.string,
  className: PropTypes.string,
}

Shortcut.defaultProps = {
  className: '',
  href: null,
  to: null,
}

export default Shortcut
