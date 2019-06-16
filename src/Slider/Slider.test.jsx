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
        children,
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
      expect(children).toBe(null)
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

    it('Renders a label for each <Slider.Step>', () => {
      expect(
        shallow(
          <Slider
            value={2}
            valueMin={1}
            valueMax={3}
            label="Label"
            onChange={jest.fn()}
          >
            <Slider.Step>Small</Slider.Step>
            <Slider.Step>Medium</Slider.Step>
            <Slider.Step>Large</Slider.Step>
          </Slider>,
        )
          .find('.ys-slider__data-set')
          .children()
          .length,
      ).toBe(3)
    })

    it('Displays assistive label containing step information', () => {
      expect(
        shallow(
          <Slider
            value={2}
            valueMin={1}
            valueMax={3}
            label="Choose size"
            onChange={jest.fn()}
          >
            <Slider.Step>20 GB</Slider.Step>
            <Slider.Step>40 GB</Slider.Step>
            <Slider.Step>80 GB</Slider.Step>
          </Slider>,
        )
          .find('.ys-slider__label-text span')
          .text(),
      ).toBe('(valgmulighederne er 20 GB, 40 GB, 80 GB)')
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

    it('With steps', () => {
      expect(
        shallow(
          <Slider
            value={1}
            valueMin={1}
            valueMax={4}
            label="Starbucks sizes"
            onChange={jest.fn()}
          >
            <Slider.Step>Tall</Slider.Step>
            <Slider.Step>Grande</Slider.Step>
            <Slider.Step>Venti</Slider.Step>
            <Slider.Step>Trenta</Slider.Step>
          </Slider>,
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
