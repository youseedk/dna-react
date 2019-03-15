import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { withTests } from '@storybook/addon-jest'

import results from '../.jest-test-results.json'

const req = require.context('../src', true, /[^/]+\/stories.jsx$/)

addDecorator(withKnobs)
addDecorator(centered)
addDecorator(withTests({
  results,
  filesExt: '.test.jsx',
}))

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
