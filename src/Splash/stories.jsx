import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, select, number } from '@storybook/addon-knobs'

import Splash from './Splash'
import '@youseedk/dna/css/elements/ys-splash.css'

const variants = {
  yellow: 'yellow',
  blue: 'blue',
}

storiesOf('Splash', module)
  .addParameters({ jest: ['Splash'] })
  .add('Default', () => (
    <Splash
      price={number('price', 149, {}, 'Content')}
      description={text('description', '/md i 24 mdr.', 'Content')}
      variant={select('variant', variants, variants.yellow, 'Visuals')}
      className={text('className', '', 'Misc')}
    />
  ))
