import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, select } from '@storybook/addon-knobs'

import Bow from './Bow'
import '@youseedk/dna/css/elements/ys-bow.css'

const variants = {
  default: null,
  'midnight-green': 'midnight-green',
}

storiesOf('Bow', module)
  .addParameters({ jest: ['Bow'] })
  .add('Default', () => (
    <Bow
      variant={select('variant', variants, variants.default, 'Visuals')}
      className={text('className', '', 'Misc')}
    />
  ))
