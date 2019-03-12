import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const variantOptions = {
  default: 'default',
  light: 'light',
  cta: 'cta',
  'solid-dark': 'solid-dark',
  'solid-light': 'solid-light',
  'stripped-dark': 'stripped-dark',
  'stripped-light': 'stripped-light',
}
const labelOptions = ['label', 'Label text']

storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Default', () => (
    <Button
      label={text(...labelOptions)}
      variant={select('variant', variantOptions, variantOptions.default)}
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
      block={boolean('block', false)}
      className={text('className')}
    />
  ))
  .add('Link', () => (
    <Button
      label={text(...labelOptions)}
      variant={select('variant', variantOptions, variantOptions.default)}
      href={text('href', 'https://yousee.dk')}
      disabled={boolean('disabled', false)}
      block={boolean('block', false)}
      className={text('className')}
    />
  ))
