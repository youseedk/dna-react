import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import { withTests } from '@storybook/addon-jest'

import results from '../.jest-test-results.json'

const req = require.context('../src', true, /[^/]+\/stories.js$/);

addDecorator(withKnobs)
addDecorator(centered)
addDecorator(withTests({ results }))

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);