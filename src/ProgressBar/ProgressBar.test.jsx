import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import ProgressBar from './ProgressBar'

const customClassName = 'badger'
const getProgressBar = props => (
  <ProgressBar
    value={50}
    valueMin={0}
    valueMax={100}
    {...props}
  />
)

const shallowRender = props => shallow(getProgressBar(props))
const mount = props => mountComponent(getProgressBar(props))

describe('<ProgressBar>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `value` prop is passed', () => {
      const component = () => shallowRender({
        value: null,
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if no `valueMin` prop is passed', () => {
      const component = () => shallowRender({
        valueMin: null,
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if no `valueMax` prop is passed', () => {
      const component = () => shallowRender({
        valueMax: null,
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if `value` props aren\'t numbers', () => {
      let component = () => shallowRender({
        value: '10',
      })
      expect(component).toThrow()

      component = () => shallowRender({
        valueMin: '0',
      })
      expect(component).toThrow()

      component = () => shallowRender({
        valueMax: '100',
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if unsupported `variant` prop is passed', () => {
      const component = () => shallowRender({
        variant: 'dark',
      })

      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        variant,
        className,
      } = component.props()

      expect(variant).toBe(null)
      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Correctly calculates progress', () => {
      const component = shallowRender()

      expect(component.find('.ys-progress__progress').prop('style')).toEqual({
        width: '50%',
      })
    })

    it('Correctly calculates progress with rounding', () => {
      const component = shallowRender({
        value: 1337,
        valueMin: 42,
        valueMax: 9000,
      })

      expect(component.find('.ys-progress__progress').prop('style')).toEqual({
        width: '14%',
      })
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      const component = shallowRender({
        className: customClassName,
      })

      expect(component).toMatchSnapshot()
    })

    it('Without custom `className`', () => {
      const component = shallowRender()

      expect(component).toMatchSnapshot()
    })

    it('`light` variant', () => {
      const component = shallowRender({
        variant: 'light',
      })

      expect(component).toMatchSnapshot()
    })
  })
})
