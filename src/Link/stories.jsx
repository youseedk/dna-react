import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import { text } from '@storybook/addon-knobs'

import Link from './Link'

storiesOf('Link', module)
  .addParameters({ jest: ['Link'] })
  .addDecorator(StoryRouter())
  .add('Anchor element', () => (
    <Link
      href={text('href', 'https://yousee.dk', 'Content')}
      className={text('className', '', 'Misc')}
    >
      External link
    </Link>
  ))
  .add('React Router <NavLink>', () => (
    <Link
      to={text('to', '/dna', 'Content')}
      className={text('className', '', 'Misc')}
    >
      Internal link
    </Link>
  ))
