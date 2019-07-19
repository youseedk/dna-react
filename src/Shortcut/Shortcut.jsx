import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Anchor, { anchorPropTypes } from '../helpers/Anchor'

const Shortcut = ({
  label,
  icon: Icon,
  className,
  ...props
}) => (
  <Anchor
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
  href: PropTypes.string,
  className: PropTypes.string,
  ...anchorPropTypes,
}

Shortcut.defaultProps = {
  className: '',
  href: null,
}

export default Shortcut
