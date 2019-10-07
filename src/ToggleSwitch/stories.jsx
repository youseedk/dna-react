import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ToggleSwitch from './ToggleSwitch'
import '@youseedk/dna/css/elements/ys-toggle-switch.css'

storiesOf('ToggleSwitch', module)
  .addParameters({ jest: ['ToggleSwitch'] })
  .add('Default', () => (
    <ToggleSwitch
      onChange={action('onChange')}
      defaultChecked={boolean('defaultChecked', false, 'Content')}
      label={text('label', 'Label text', 'Content')}
      className={text('className', '', 'Misc')}
    />
  ))
