import React from 'react'
import { shallow, mount } from 'enzyme'

import NotificationTextLink from './NotificationTextLink'

describe('<NotificationTextLink>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `children` prop is passed', () => {
      expect(() => shallow(
        <NotificationTextLink />,
      )).toThrow()
    })

    it('Has correct defaultProps', () => {
      const props = mount(
        <NotificationTextLink>
          Label
        </NotificationTextLink>,
      ).props()

      expect(props.className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class name', () => {
      expect(
        shallow(
          <NotificationTextLink>
            Label
          </NotificationTextLink>,
        )
          .find('.ys-notification__inline-link')
          .exists(),
      ).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      expect(
        shallow(
          <NotificationTextLink className="kitten">
            Label
          </NotificationTextLink>,
        )
          .find('.ys-notification__inline-link.kitten')
          .exists(),
      ).toBe(true)
    })

    it('Passes other generic props to container element', () => {
      expect(
        shallow(
          <NotificationTextLink title="Click here">
            Label
          </NotificationTextLink>,
        )
          .props()
          .title,
      ).toBe('Click here')
    })

    it('Sets `unstyled` prop used to remove `ys-link` class', () => {
      expect(
        shallow(
          <NotificationTextLink>
            Label
          </NotificationTextLink>,
        )
          .props()
          .unstyled,
      ).toBe(true)
    })
  })
})
