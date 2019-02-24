import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <Button>{text('Label', 'Label text')}</Button>
))