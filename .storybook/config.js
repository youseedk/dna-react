import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withTests } from '@storybook/addon-jest'

import results from '../.jest-test-results.json'

import '@youseedk/dna/css/base/ys-base.css'
import '@youseedk/dna/css/base/ys-webfonts.css'

const req = require.context('../src', true, /[^/]+\/stories.jsx$/)

addDecorator(withKnobs)
addDecorator(withTests({
  results,
  filesExt: '.test.jsx',
}))

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
