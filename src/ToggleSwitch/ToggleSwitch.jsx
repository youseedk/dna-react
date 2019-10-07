import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'

const id = `toggle-switch-${uniqueId()}`

const ToggleSwitch = ({
  label,
  defaultChecked,
  onChange,
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
        defaultChecked={defaultChecked}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
}

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  className: '',
}

export default ToggleSwitch
