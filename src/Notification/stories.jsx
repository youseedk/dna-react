import React from 'react'
import { storiesOf } from '@storybook/react'

import { select, text, boolean } from '@storybook/addon-knobs'

import { uiIcons as icons } from '../../utils/iconMapper'
import Notification from './Notification'

const variants = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
}
const iconOptions = ['icon', Object.keys(icons), icons.none, 'Visuals']

storiesOf('Notification', module)
  .addParameters({ jest: ['Notification'] })
  .add('Default', () => (
    <Notification
      variant={select('variant', variants, variants.info, 'Visuals')}
      icon={icons[select(...iconOptions)]}
      displayIcon={boolean('displayIcon', true, 'Visuals')}
      className={text('className', '', 'Misc')}
    >
      <Notification.Text>{text('text', 'Notification message', 'Content')}</Notification.Text>
    </Notification>
  ))
