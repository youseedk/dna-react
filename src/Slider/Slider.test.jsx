import React from 'react'
import { shallow, mount } from 'enzyme'

import Slider from './Slider'

describe('<Slider>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `value` prop is passed', () => {
      expect(
        () => shallow(
          <Slider
            valueMin={1}
            valueMax={3}
            label="Label"
            onChange={jest.fn()}
          />,
        ),
      ).toThrow()
    })

    it('Throws propType warning if no `valueMin` prop is passed', () => {
      expect(
        () => shallow(
          <Slider
            value={2}
            valueMax={3}
            label="Label"
            onChange={jest.fn()}
          />,
        ),
      ).toThrow()
    })

    it('Throws propType warning if no `valueMax` prop is passed', () => {
      expect(
        () => shallow(
          <Slider
            value={2}
            valueMin={1}
            label="Label"
            onChange={jest.fn()}
          />,
        ),
      ).toThrow()
    })

    it('Throws propType warning if no `label` prop is passed', () => {
      expect(
        () => shallow(
          <Slider
            value={2}
            valueMin={1}
            valueMax={3}
            onChange={jest.fn()}
          />,
        ),
      ).toThrow()
    })

    it('Throws propType warning if no `onChange` prop is passed', () => {
      expect(
        () => shallow(
          <Slider
            value={2}
            valueMin={1}
            valueMax={3}
            label="Label"
          />,
        ),
      ).toThrow()
    })

    it('Has correct defaultProps', () => {
      const {
        className,
        step,
      } = mount(
        <Slider
          value={2}
          valueMin={1}
          valueMax={3}
          label="Label"
          onChange={jest.fn()}
        />,
      ).props()

      expect(className).toBe('')
      expect(step).toBe(1)
    })
  })

  describe('Rendering', () => {
    it('Matches label and input with `for` and `id` attributes', () => {
      const component = shallow(
        <Slider
          value={2}
          valueMin={1}
          valueMax={3}
          label="Label"
          onChange={jest.fn()}
        />,
      )

      expect(
        component
          .find('label')
          .prop('htmlFor'),
      ).toBe(
        component
          .find('input')
          .prop('id'),
      )
    })

    it('Passes other generic props to container element', () => {
      expect(
        shallow(
          <Slider
            id="test"
            value={2}
            valueMin={1}
            valueMax={3}
            label="Label"
            onChange={jest.fn()}
          />,
        ).prop('id'),
      ).toBe('test')
    })
  })

  describe('Snapshots', () => {
    it('With optional props', () => {
      expect(
        shallow(
          <Slider
            value={20}
            valueMin={0}
            valueMax={100}
            step={10}
            label="Label"
            onChange={jest.fn()}
            className="lizard"
          />,
        ),
      ).toMatchSnapshot()
    })
  })

  describe('Events', () => {
    it('Delegates `onChange` event when input is changed', () => {
      const changeHandler = jest.fn()
      const mockedEvent = { target: { value: '2' } }

      const component = shallow(
        <Slider
          value={2}
          valueMin={1}
          valueMax={3}
          label="Label"
          onChange={changeHandler}
        />,
      )

      component
        .find('input')
        .simulate('change', mockedEvent)

      // Converts `value` to number and passes entire event as second parameter
      expect(changeHandler).toHaveBeenCalledWith(2, mockedEvent)
    })
  })
})
