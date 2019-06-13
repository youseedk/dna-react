import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'

import { text, number } from '@storybook/addon-knobs'
import { decorate } from '@storybook/addon-actions'
import { Store, State } from '@sambego/storybook-state'

import Slider from './Slider'

const store = new Store({
  value: 2,
})

const updateStore = decorate([(value) => {
  store.set({ value: value[0] })
  return value
}])

store.subscribe(forceReRender)

storiesOf('Slider', module)
  .addParameters({ jest: ['Slider'] })
  .add('Default', () => (
    <State store={store}>
      <Slider
        value={number('value', store.get('value'), {}, 'Content')}
        valueMin={number('valueMin', 1, {}, 'Content')}
        valueMax={number('valueMax', 5, {}, 'Content')}
        step={number('step', 1, {}, 'Content')}
        label={text('label', 'Label', 'Content')}
        onChange={updateStore.action('onChange')}
        className={text('className', '', 'Misc')}
      />
    </State>
  ))
