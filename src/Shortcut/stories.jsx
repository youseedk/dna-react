import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { text, select } from '@storybook/addon-knobs'

import Shortcut from './Shortcut'
import { setIcons as icons } from '../../utils/iconMapper'

storiesOf('Shortcut', module)
  .addParameters({ jest: ['Shortcut'] })
  .addDecorator(StoryRouter())
  .add('Anchor element', () => (
    <Shortcut
      label={text('label', 'Musik', 'Content')}
      href={text('href', 'https://yousee.dk', 'Content')}
      icon={icons[select('icon', Object.keys(icons), 'music', 'Visuals')]}
      className={text('className', '', 'Misc')}
    />
  ))
  .add('React Router <NavLink>', () => (
    <Shortcut
      label={text('label', 'Webmail', 'Content')}
      to={text('to', '/dna', 'Content')}
      icon={icons[select('icon', Object.keys(icons), 'mail', 'Visuals')]}
      className={text('className', '', 'Misc')}
    />
  ))
