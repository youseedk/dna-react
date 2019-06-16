import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'

import SliderStep from './SliderStep'

import componentPropType from '../helpers/componentPropType'

import '../base.css'
import '@youseedk/dna/css/elements/ys-slider.css'

const id = `slider-${uniqueId()}`

const Slider = ({
  value,
  valueMin,
  valueMax,
  label,
  step,
  onChange,
  className,
  children,
  ...props
}) => {
  const wrapperProps = {
    className: classNames(
      'ys-slider',
      className,
    ),
    ...props,
  }

  const handleChange = (event) => {
    onChange(parseInt(event.target.value, 10), event)
  }

  const getSliderLabel = () => {
    if (children) {
      const assistiveLabels = children
        .map(sliderStep => sliderStep.props.children)
        .join(', ')

      return (
        <span className="ys-u-visuallyhidden">
          {`(valgmulighederne er ${assistiveLabels})`}
        </span>
      )
    }

    return null
  }

  return (
    <div {...wrapperProps}>
      <label
        className="ys-slider__label"
        htmlFor={id}
      >
        <span className="ys-slider__label-text">
          {label}
          {getSliderLabel()}
        </span>
        {children
          && (
            <span className="ys-slider__data-set" aria-hidden="true">
              {children}
            </span>
          )
        }
        <span className="ys-slider__control-wrapper">
          <input
            id={id}
            type="range"
            value={value}
            min={valueMin}
            max={valueMax}
            step={step}
            onChange={handleChange}
            className="ys-slider__control"
          />
        </span>
      </label>
    </div>
  )
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  valueMin: PropTypes.number.isRequired,
  valueMax: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: componentPropType(SliderStep, true),
  step: PropTypes.number,
  className: PropTypes.string,
}

Slider.defaultProps = {
  step: 1,
  children: null,
  className: '',
}

Slider.Step = SliderStep

export default Slider
