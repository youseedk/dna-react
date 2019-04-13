import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import {
  IconUIArrowDown,
  IconUIArrowLeft,
  IconUIArrowRight,
  IconUIArrowUp,
  IconUICheckMark,
  IconUIErase,
  IconUIExclamationMark,
  IconUIEyeClosed,
  IconUIEyeOpen,
  IconUILogo,
  IconUIMultiplication,
  IconUIPlus,
} from '..'

const variants = {
  default: 'default',
  light: 'light',
  cta: 'cta',
  'solid-dark': 'solid-dark',
  'solid-light': 'solid-light',
  'stripped-dark': 'stripped-dark',
  'stripped-light': 'stripped-light',
}

const icons = {
  none: null,
  'ui-arrow-down': IconUIArrowDown,
  'ui-arrow-left': IconUIArrowLeft,
  'ui-arrow-right': IconUIArrowRight,
  'ui-arrow-up': IconUIArrowUp,
  'ui-check-mark': IconUICheckMark,
  'ui-erase': IconUIErase,
  'ui-exclamation-mark': IconUIExclamationMark,
  'ui-eye-closed': IconUIEyeClosed,
  'ui-eye-open': IconUIEyeOpen,
  'ui-logo': IconUILogo,
  'ui-multiplication': IconUIMultiplication,
  'ui-plus': IconUIPlus,
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
