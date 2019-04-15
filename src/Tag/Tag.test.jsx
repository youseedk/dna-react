import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import Tag from './Tag'

const defaultLabel = 'Nyhed'
const customClassName = 'panda'
const getTag = props => (
  <Tag
    label={defaultLabel}
    {...props}
  />
)

const shallowRender = props => shallow(getTag(props))
const mount = props => mountComponent(getTag(props))

describe('<Tag>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `label` prop is passed', () => {
      const component = () => shallowRender({
        label: null,
      })
      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        className,
      } = component.props()

      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      const component = shallowRender()
      expect(component.find('span.ys-tag').exists()).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {

      const component = shallowRender({
        className: customClassName,
      })

      expect(component.find(`.ys-tag.${customClassName}`).exists()).toBe(true)
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
  })
})
