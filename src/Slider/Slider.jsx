import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'

import SliderStep from './SliderStep'

import componentPropType from '../helpers/componentPropType'

const id = `slider-${uniqueId()}`

const Slider = ({
  value,
  valueMin,
  valueMax,
  label,
  labelMin,
  labelMax,
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
    if (children || (labelMin && labelMax)) {
      const assistiveLabels = children
        ? children.map(sliderStep => sliderStep.props.children)
          .join(', ')
        : `mellem ${labelMin} og ${labelMax}`

      return (
        <span className="ys-u-visuallyhidden">
          {`(valgmulighederne er ${assistiveLabels})`}
        </span>
      )
    }

    return null
  }

  const input = (
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
  )

  return (
    <div {...wrapperProps}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
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
        {(labelMin
          && labelMax
          && (
            <span className="ys-slider__wrapper">
              <span className="ys-slider__minmax-label" aria-hidden="true">{labelMin}</span>
              {input}
              <span className="ys-slider__minmax-label" aria-hidden="true">{labelMax}</span>
            </span>
          ))
          || input}
      </label>
    </div>
  )
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  valueMin: PropTypes.number.isRequired,
  valueMax: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  labelMin: PropTypes.string,
  labelMax: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: componentPropType(SliderStep, true),
  step: PropTypes.number,
  className: PropTypes.string,
}

Slider.defaultProps = {
  step: 1,
  children: null,
  labelMin: '',
  labelMax: '',
  className: '',
}

Slider.Step = SliderStep

export default Slider
