import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Anchor, { anchorPropTypes } from '../helpers/Anchor'

const Link = ({
  children,
  className,
  unstyled,
  ...props
}) => (
  <Anchor
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
  href: PropTypes.string,
  className: PropTypes.string,
  unstyled: PropTypes.bool,
  ...anchorPropTypes,
}

Link.defaultProps = {
  href: null,
  className: '',
  unstyled: false,
}

export default Link
