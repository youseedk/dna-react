import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'

import ToggleSwitch from './ToggleSwitch'
import '@youseedk/dna/css/elements/ys-toggle-switch.css'

storiesOf('ToggleSwitch', module)
  .addParameters({ jest: ['ToggleSwitch'] })
  .add('Default', () => (
    <ToggleSwitch
      label={text('label', 'Label text', 'Content')}
      className={text('className', '', 'Misc')}
    />
  ))
