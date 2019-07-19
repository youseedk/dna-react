import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'

import FlowSteps from './FlowSteps'
import '@youseedk/dna/css/elements/ys-flow-steps.css'

storiesOf('FlowSteps', module)
  .addParameters({ jest: ['FlowSteps', 'FlowStepsItem'] })
  .add('0% complete', () => (
    <FlowSteps
      className={text('className', '', 'Misc')}
    >
      <FlowSteps.Item active>Abonnement</FlowSteps.Item>
      <FlowSteps.Item>Adresse</FlowSteps.Item>
      <FlowSteps.Item>Forsendelse</FlowSteps.Item>
      <FlowSteps.Item>Bekræftelse</FlowSteps.Item>
      <FlowSteps.Item>Betaling</FlowSteps.Item>
    </FlowSteps>
  ))
  .add('40% complete', () => (
    <FlowSteps
      className={text('className', '', 'Misc')}
    >
      <FlowSteps.Item>Abonnement</FlowSteps.Item>
      <FlowSteps.Item>Adresse</FlowSteps.Item>
      <FlowSteps.Item active>Forsendelse</FlowSteps.Item>
      <FlowSteps.Item>Bekræftelse</FlowSteps.Item>
      <FlowSteps.Item>Betaling</FlowSteps.Item>
    </FlowSteps>
  ))
  .add('100% complete', () => (
    <FlowSteps
      className={text('className', '', 'Misc')}
    >
      <FlowSteps.Item>Abonnement</FlowSteps.Item>
      <FlowSteps.Item>Adresse</FlowSteps.Item>
      <FlowSteps.Item>Forsendelse</FlowSteps.Item>
      <FlowSteps.Item>Bekræftelse</FlowSteps.Item>
      <FlowSteps.Item>Betaling</FlowSteps.Item>
    </FlowSteps>
  ))
