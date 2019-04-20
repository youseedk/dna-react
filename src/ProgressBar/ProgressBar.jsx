import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../base.css'
import '@youseedk/dna/css/elements/ys-progress.css'

const ProgressBar = (props) => {
  const {
    value,
    valueMin,
    valueMax,
    variant,
    className,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-progress',
      variant && `ys-progress--${variant}`,
      className,
    ),
  }

  const progress = Math.round((value - valueMin) / (valueMax - valueMin) * 100)
  const progressPercentage = `${progress}%`
  const label = `${progressPercentage} gennemført`

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      aria-valuetext={label}
      {...wrapperProps}
    >
      <div
        className="ys-progress__bar"
        aria-hidden="true"
      >
        <div
          className="ys-progress__progress"
          style={{ width: progressPercentage }}
        >
          <span className="ys-u-visuallyhidden">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  valueMin: PropTypes.number.isRequired,
  valueMax: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['light']),
  className: PropTypes.string,
}

ProgressBar.defaultProps = {
  variant: null,
  className: '',
}

export default ProgressBar
