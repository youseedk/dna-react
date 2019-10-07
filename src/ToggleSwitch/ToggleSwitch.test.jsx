import React from 'react'
import { shallow, mount } from 'enzyme'

import ToggleSwitch from './ToggleSwitch'

describe('<ToggleSwitch>', () => {
  describe('Props', () => {
    it('Has correct defaultProps', () => {
      const component = mount(
        <ToggleSwitch
          onChange={jest.fn()}
          label="Click me!"
        />,
      )

      const {
        defaultChecked,
        className,
      } = component.props()

      expect(defaultChecked).toBe(false)
      expect(className).toBe('')
    })

    it('Throws propType warning if no `onChange` prop is passed', () => {
      expect(
        () => <ToggleSwitch
          label="Click me!"
        />,
      ).toThrow()
    })

    it('Throws propType warning if no `label` prop is passed', () => {
      expect(
        () => <ToggleSwitch
          onChange={jest.fn()}
        />,
      ).toThrow()
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      expect(
        shallow(
          <ToggleSwitch
            label="Click me!"
          />,
        )
          .find('div.ys-toggle-switch')
          .exists(),
      ).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      expect(
        shallow(
          <ToggleSwitch
            onChange={jest.fn()}
            label="Click me!"
            className="snail"
          />,
        )
          .find('.ys-toggle-switch.snail')
          .exists(),
      ).toBe(true)
    })

    it('Sets `label`', () => {
      expect(
        shallow(
          <ToggleSwitch
            onChange={jest.fn()}
            label="Toggle flying reptiles"
          />,
        )
          .find('.ys-toggle-switch__label')
          .text(),
      ).toBe('Toggle flying reptiles')
    })

    it('Forwards other generic props to container element', () => {
      expect(
        shallow(
          <ToggleSwitch
            onChange={jest.fn()}
            label="Click me!"
            id="polyphyly"
          />,
        ).props().id,
      ).toBe('polyphyly')
    })

    it('Forwards `onChange` and `defaltChecked` to input element', () => {
      const changeHandler = jest.fn()
      const component = shallow(
        <ToggleSwitch
          onChange={changeHandler}
          defaultChecked={true}
          label="Click me!"
        />,
      )

      const {
        onChange,
        defaultChecked,
      } = component
        .find('.ys-toggle-switch__control')
        .props()

      expect(onChange).toBe(changeHandler)
      expect(defaultChecked).toBe(true)
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      expect(
        shallow(
          <ToggleSwitch
            onChange={jest.fn()}
            label="Toggle flying reptiles"
            className="pterosaur"
          />,
        ),
      ).toMatchSnapshot()
    })
  })
})
