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
const labelOptions = ['Label', 'Label text']

storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Default', () => (
    <Button
      label={text(...labelOptions)}
      variant={select('Variant', variantOptions, variantOptions.default)}
      onClick={action('click')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
    />
  ))
  .add('Link', () => (
    <Button
      label={text(...labelOptions)}
      variant={select('Variant', variantOptions, variantOptions.default)}
      href={text('URL', 'https://yousee.dk')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
    />
  ))
