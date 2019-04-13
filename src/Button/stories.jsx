import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import { uiIcons as icons } from '../utils/iconMapper'

const variants = {
  default: 'default',
  light: 'light',
  cta: 'cta',
  'secondary-dark': 'secondary-dark',
  'secondary-light': 'secondary-light',
  'tertiary-dark': 'tertiary-dark',
  'tertiary-light': 'tertiary-light',
}

const labelOptions = ['label', 'Label text', 'Content']
const variantOptions = ['variant', variants, variants.default, 'Visuals']
const disabledOptions = ['disabled', false, 'Visuals']
const blockOptions = ['block', false, 'Visuals']
const iconOptions = ['icon', Object.keys(icons), icons.none, 'Visuals']
const iconOnlyOptions = ['iconOnly', false, 'Visuals']
const classNameOptions = ['className', '', 'Misc']

storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Default', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      onClick={action('onClick')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      className={text(...classNameOptions)}
    />
  ))
  .add('Link', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      href={text('href', 'https://yousee.dk', 'Content')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      className={text(...classNameOptions)}
    />
  ))
