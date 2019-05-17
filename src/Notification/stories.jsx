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
  .add('With link', () => (
    <Notification
      variant={select('variant', variants, variants.info, 'Visuals')}
      className={text('className', '', 'Misc')}
    >
      <Notification.Text>
        To fix this
        &nbsp;
        <Notification.TextLink href="https://yousee.dk">go to this place</Notification.TextLink>
      </Notification.Text>
    </Notification>
  ))
  .add('Multiple lines', () => (
    <Notification
      variant={select('variant', variants, variants.info, 'Visuals')}
      className={text('className', '', 'Misc')}
    >
      <Notification.Text>
        Morbi faucibus, velit quis venenatis finibus, sem quam luctus nisl, ac consectetur.
      </Notification.Text>
      <Notification.Text>
        Sed efficitur pretium ultricies. Fusce quis urna nibh. Suspendisse scelerisque suscipit.
      </Notification.Text>
      <Notification.Text>
        Cras vitae libero euismod, placerat orci eget, porta libero.
      </Notification.Text>
    </Notification>
  ))
