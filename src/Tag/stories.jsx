import React from 'react'
import { storiesOf } from '@storybook/react'

import { text } from '@storybook/addon-knobs'

import Tag from './Tag'
import '@youseedk/dna/css/elements/ys-tag.css'

storiesOf('Tag', module)
  .addParameters({ jest: ['Tag'] })
  .add('Default', () => (
    <Tag
      label={text('label', 'Nyhed', 'Content')}
      className={text('className', '', 'Misc')}
    />
  ))
