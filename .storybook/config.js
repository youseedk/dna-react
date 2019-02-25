import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

const req = require.context('../src', true, /[^/]+\/stories.js$/);

addDecorator(withKnobs)
addDecorator(centered)

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);