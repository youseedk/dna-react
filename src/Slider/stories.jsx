import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'

import { text, number } from '@storybook/addon-knobs'
import { decorate } from '@storybook/addon-actions'
import { Store, State } from '@sambego/storybook-state'

import Slider from './Slider'
import '@youseedk/dna/css/elements/ys-slider.css'

const store = new Store({
  value: 2,
})

const updateStore = decorate([(value) => {
  store.set({ value: value[0] })
  return value
}])

store.subscribe(forceReRender)

storiesOf('Slider', module)
  .addParameters({ jest: ['Slider', 'SliderStep'] })
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
  .add('With step labels', () => (
    <State store={store}>
      <Slider
        value={number('value', store.get('value'), {}, 'Content')}
        valueMin={number('valueMin', 1, {}, 'Content')}
        valueMax={number('valueMax', 5, {}, 'Content')}
        step={number('step', 1, {}, 'Content')}
        label={text('label', 'Label', 'Content')}
        onChange={updateStore.action('onChange')}
        className={text('className', '', 'Misc')}
      >
        <Slider.Step>XS</Slider.Step>
        <Slider.Step>S</Slider.Step>
        <Slider.Step>M</Slider.Step>
        <Slider.Step>L</Slider.Step>
        <Slider.Step>XL</Slider.Step>
      </Slider>
    </State>
  ))
  .add('With min/max labels', () => (
    <State store={store}>
      <Slider
        value={number('value', store.get('value'), {}, 'Content')}
        valueMin={number('valueMin', 1, {}, 'Content')}
        valueMax={number('valueMax', 5, {}, 'Content')}
        step={number('step', 1, {}, 'Content')}
        label={text('label', 'Label', 'Content')}
        labelMin={text('labelMin', '0%', 'Content')}
        labelMax={text('labelMax', '100%', 'Content')}
        onChange={updateStore.action('onChange')}
        className={text('className', '', 'Misc')}
      />
    </State>
  ))
