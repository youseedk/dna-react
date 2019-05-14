import React from 'react'
import { shallow, mount } from 'enzyme'

import FlowSteps from './FlowSteps'

const customClassName = 'heron'

describe('<FlowSteps>', () => {
  describe('Props', () => {
    it('Doesn\'t throw propType warning if children are multiple `FlowSteps.Item` elements', () => {
      const component = () => shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component).not.toThrow()
    })

    it('Throws propType warning if single child element is passed', () => {
      const component = () => shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
        </FlowSteps>,
      )
      expect(component).toThrow()
    })

    it('Throws propType warning if no `child` is passed', () => {
      const component = () => shallow(
        <FlowSteps />,
      )
      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
        </FlowSteps>,
      )

      const {
        className,
      } = component.props()

      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('ARIA attributes calculated and set correctly', () => {
      let component = shallow(
        <FlowSteps>
          <FlowSteps.Item active>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component.prop('aria-valuenow')).toBe(0)
      expect(component.prop('aria-valuemin')).toBe(0)
      expect(component.prop('aria-valuemax')).toBe(3)

      component = shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item active>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component.prop('aria-valuenow')).toBe(1)

      component = shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item active>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component.prop('aria-valuenow')).toBe(2)

      component = shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component.prop('aria-valuenow')).toBe(3)
    })

    it('Passes other generic props to container element', () => {
      const component = shallow(
        <FlowSteps tabIndex="0" id="test">
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component.props().id).toBe('test')
      expect(component.props().tabIndex).toBe('0')
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      const component = shallow(
        <FlowSteps className={customClassName}>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component).toMatchSnapshot()
    })

    it('0% progress', () => {
      const component = shallow(
        <FlowSteps>
          <FlowSteps.Item active>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
          <FlowSteps.Item>Step 4</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component).toMatchSnapshot()
    })

    it('25% progress', () => {
      const component = shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item active>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
          <FlowSteps.Item>Step 4</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component).toMatchSnapshot()
    })

    it('100% progress', () => {
      const component = shallow(
        <FlowSteps>
          <FlowSteps.Item>Step 1</FlowSteps.Item>
          <FlowSteps.Item>Step 2</FlowSteps.Item>
          <FlowSteps.Item>Step 3</FlowSteps.Item>
          <FlowSteps.Item>Step 4</FlowSteps.Item>
        </FlowSteps>,
      )

      expect(component).toMatchSnapshot()
    })
  })
})
