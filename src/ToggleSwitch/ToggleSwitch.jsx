import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'

const id = `toggle-switch-${uniqueId()}`

const ToggleSwitch = ({
  label,
  className,
  ...props
}) => {
  const wrapperProps = {
    className: classNames(
      'ys-toggle-switch',
      className,
    ),
    ...props,
  }

  return (
    <div
      {...wrapperProps}
    >
      <input
        type="checkbox"
        id={id}
        className="ys-toggle-switch__control ys-u-visuallyhidden"
      />
      <label
        htmlFor={id}
        className="ys-toggle-switch__label"
      >
        {label}
      </label>
    </div>
  )
}

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

ToggleSwitch.defaultProps = {
  className: '',
}

export default ToggleSwitch
