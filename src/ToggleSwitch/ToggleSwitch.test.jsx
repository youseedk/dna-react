import React from 'react'
import { shallow, mount } from 'enzyme'

import ToggleSwitch from './ToggleSwitch'

describe('<ToggleSwitch>', () => {
  describe('Props', () => {
    it('Has correct defaultProps', () => {
      const component = mount(
        <ToggleSwitch
          label="Click me!"
        />,
      )

      const {
        className,
      } = component.props()

      expect(className).toBe('')
    })

    it('Throws propType warning if no `label` prop is passed', () => {
      expect(
        () => <ToggleSwitch />,
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
            label="Click me!"
            id="polyphyly"
          />,
        ).props().id,
      ).toBe('polyphyly')
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      expect(
        shallow(
          <ToggleSwitch
            label="Toggle flying reptiles"
            className="pterosaur"
          />,
        ),
      ).toMatchSnapshot()
    })
  })
})
