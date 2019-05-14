import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../base.css'
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-shortcut.css'

const Shortcut = ({
  label,
  href,
  icon: Icon,
  className,
  ...props
}) => (
  <a
    href={href}
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
  </a>
)

Shortcut.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
}

Shortcut.defaultProps = {
  className: '',
}

export default Shortcut
