import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import FlowStepsItem from './FlowStepsItem'

const customClassName = 'gibbon'
const stepLabel = 'step'
const getFlowStepsItem = (children, props) => (
  <FlowStepsItem
    {...props}
  >
    {children}
  </FlowStepsItem>
)

const shallowRender = (children, props) => shallow(getFlowStepsItem(children, props))
const mount = (children, props) => mountComponent(getFlowStepsItem(children, props))

describe('<FlowStepsItem>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `children` prop is passed', () => {
      const component = () => shallowRender()
      expect(component).toThrow()
    })

    it('Throws propType warning if `children` isn\'t a string', () => {
      const component = () => shallowRender(2)
      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        className,
        active,
      } = component.props()

      expect(className).toBe('')
      expect(active).toBe(false)
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      const component = shallowRender()

      expect(component.find('.ys-flow-steps__item').exists()).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      const component = shallowRender(stepLabel, {
        className: customClassName,
      })

      expect(component.find(`.ys-flow-steps__item.${customClassName}`).exists()).toBe(true)
    })

    it('Places `children` inside label container', () => {
      const component = shallowRender(stepLabel)

      expect(component.find('.ys-flow-steps__label').text()).toBe(stepLabel)
    })

    it('Passes other generic props to container element', () => {
      const component = shallowRender(stepLabel, {
        id: 'test',
        tabIndex: 0,
      })

      expect(component.props().id).toBe('test')
      expect(component.props().tabIndex).toBe(0)
    })
  })

  describe('Snapshots', () => {
    it('Inactive state (default)', () => {
      const component = shallowRender(stepLabel)

      expect(component).toMatchSnapshot()
    })

    it('Active state', () => {
      const component = shallowRender(stepLabel, {
        active: true,
      })

      expect(component).toMatchSnapshot()
    })

    it('With custom `className`', () => {
      const component = shallowRender(stepLabel, {
        className: customClassName,
      })

      expect(component).toMatchSnapshot()
    })
  })
})
