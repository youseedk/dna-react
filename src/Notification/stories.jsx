import React from 'react'
import { storiesOf } from '@storybook/react'

import { select, text } from '@storybook/addon-knobs'

import Notification from './Notification'

const variants = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
}

storiesOf('Notification', module)
  .addParameters({ jest: ['Notification'] })
  .add('Default', () => (
    <Notification
      variant={select('variant', variants, variants.info, 'Visuals')}
      className={text('className', '', 'Misc')}
    >
      <Notification.Text>{text('text', 'Notification message', 'Content')}</Notification.Text>
    </Notification>
  ))
