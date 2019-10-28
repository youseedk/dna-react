import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import icons from '../../utils/iconMapper'
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-button.css'

const variants = {
  default: null,
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
const iconOptions = ['icon', Object.keys(icons), 'none', 'Visuals']
const iconOnlyOptions = ['iconOnly', false, 'Visuals']
const iconAlignmentOptions = ['iconAlignment', ['left', 'right'], 'right', 'Visuals']
const classNameOptions = ['className', '', 'Misc']

storiesOf('Button', module)
  .addParameters({ jest: ['Button'] })
  .addDecorator(StoryRouter())
  .add('Button element', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      onClick={action('onClick')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      iconAlignment={select(...iconAlignmentOptions)}
      className={text(...classNameOptions)}
    />
  ))
  .add('Anchor element', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      href={text('href', 'https://yousee.dk', 'Content')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      iconAlignment={select(...iconAlignmentOptions)}
      className={text(...classNameOptions)}
    />
  ))
  .add('React Router <NavLink>', () => (
    <Button
      label={text(...labelOptions)}
      variant={select(...variantOptions)}
      to={text('to', '/dna', 'Content')}
      disabled={boolean(...disabledOptions)}
      block={boolean(...blockOptions)}
      icon={icons[select(...iconOptions)]}
      iconOnly={boolean(...iconOnlyOptions)}
      iconAlignment={select(...iconAlignmentOptions)}
      className={text(...classNameOptions)}
    />
  ))
