import React from 'react'
import { shallow, mount } from 'enzyme'

import Bow from './Bow'

describe('<Bow>', () => {
  describe('Props', () => {
    it('Has correct defaultProps', () => {
      const component = mount(
        <Bow />
      )

      const {
        variant,
        className,
      } = component.props()

      expect(variant).toBe(null)
      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      expect(
        shallow(
          <Bow />,
        )
          .find('div.ys-bow')
          .exists(),
      ).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      expect(
        shallow(
          <Bow
            className="gecko"
          />,
        )
          .find('.ys-bow.gecko')
          .exists(),
      ).toBe(true)
    })

    it('Forwards other generic props to container element', () => {
      expect(
        shallow(
          <Bow
            id="gastropod"
          />,
        ).props().id,
      ).toBe('gastropod')
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      expect(
        shallow(
          <Bow
            className="donkey"
          />,
        ),
      ).toMatchSnapshot()
    })

    it('With `midnight-green` variant', () => {
      expect(
        shallow(
          <Bow
            variant="midnight-green"
          />,
        ),
      ).toMatchSnapshot()
    })
  })
})
