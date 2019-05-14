import React from 'react'
import { storiesOf } from '@storybook/react'

import { text, select } from '@storybook/addon-knobs'

import Shortcut from './Shortcut'
import { setIcons as icons } from '../../utils/iconMapper'

storiesOf('Shortcut', module)
  .addParameters({ jest: ['Shortcut'] })
  .add('Default', () => (
    <Shortcut
      label={text('label', 'Musik', 'Content')}
      href={text('href', 'https://yousee.dk', 'Content')}
      icon={icons[select('icon', Object.keys(icons), 'music', 'Visuals')]}
      className={text('className', '', 'Misc')}
    />
  ))
