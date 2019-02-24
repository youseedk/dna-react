import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs)

stories
  .add('Default', () => (
    <Button
      onClick={action('click')}
      label={text('Label', 'Label text')}
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Link', () => (
    <Button
      href={text('URL', 'https://yousee.dk')}
      label={text('Label', 'Label text')}
      disabled={boolean('Disabled', false)}
    />
  ))
