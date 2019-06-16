import React from 'react'
import { shallow, mount } from 'enzyme'

import SliderStep from './SliderStep'

describe('<SliderStep>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `children` prop is passed', () => {
      expect(() => (
        shallow(
          <SliderStep />,
        )
      )).toThrow()
    })

    it('Throws propType warning if `children` isn\'t a string', () => {
      expect(() => (
        shallow(
          <SliderStep>
            {100}
          </SliderStep>,
        )
      )).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount(
        <SliderStep>
          Label
        </SliderStep>,
      )

      expect(component.props().className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      expect(
        shallow(
          <SliderStep>
            Step label
          </SliderStep>,
        )
          .hasClass('ys-slider__data-item'),
      ).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      expect(
        shallow(
          <SliderStep className="caracal">
            Step label
          </SliderStep>,
        )
          .hasClass('caracal'),
      ).toBe(true)
    })

    it('Places `children` inside label container', () => {
      expect(
        shallow(
          <SliderStep>
            Label
          </SliderStep>,
        )
          .text(),
      ).toBe('Label')
    })
  })

  describe('Snapshots', () => {
    it('Default', () => {
      expect(
        shallow(
          <SliderStep>
            Step label
          </SliderStep>,
        ),
      ).toMatchSnapshot()
    })

    it('With custom props', () => {
      expect(
        shallow(
          <SliderStep
            className="wild-cats"
            id="lynx"
          >
            Step label
          </SliderStep>,
        ),
      ).toMatchSnapshot()
    })
  })
})
