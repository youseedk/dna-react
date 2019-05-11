import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import FlowStepsItem from './FlowStepsItem'

import componentPropType from '../../utils/componentPropType'

import '../base.css'
import '@youseedk/dna/css/elements/ys-flow-steps.css'

const FlowSteps = (props) => {
  const {
    children,
    className,
  } = props

  const wrapperProps = {
    className: classNames(
      'ys-flow-steps',
      className,
    ),
  }

  const totalSteps = children.length
  let activeStep = 0

  for (null; activeStep < totalSteps; activeStep += 1) {
    if (children[activeStep].props.active === true) {
      break
    }
  }

  const label = `${activeStep} ud af ${totalSteps} trin gennemført`

  return (
    <div
      role="progressbar"
      aria-valuenow={activeStep}
      aria-valuemin={0}
      aria-valuemax={totalSteps}
      aria-valuetext={label}
      {...wrapperProps}
    >
      <ol className="ys-flow-steps__list" aria-hidden="true">
        {children}
      </ol>
    </div>
  )
}

FlowSteps.propTypes = {
  children: componentPropType(FlowStepsItem, true).isRequired,
  className: PropTypes.string,
}

FlowSteps.defaultProps = {
  className: '',
}

FlowSteps.Item = FlowStepsItem

export default FlowSteps
