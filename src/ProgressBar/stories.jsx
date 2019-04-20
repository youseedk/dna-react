import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, select, number } from '@storybook/addon-knobs'

import ProgressBar from './ProgressBar'

const variantOptions = {
  default: null,
  light: 'light',
}

storiesOf('ProgressBar', module)
  .addParameters({ jest: ['ProgressBar'] })
  .add('Default', () => (
    <ProgressBar
      value={number('value', 40, {}, 'Content')}
      valueMin={number('valueMin', 0, {}, 'Content')}
      valueMax={number('valueMax', 100, {}, 'Content')}
      variant={select('variant', variantOptions, variantOptions.default, 'Visuals')}
      className={text('className', '', 'Misc')}
    />
  ))
