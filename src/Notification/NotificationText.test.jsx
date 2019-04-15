import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import NotificationText from './NotificationText'

const customClassName = 'parrot'
const getNotificationText = (props, children = 'Notification message') => (
  <NotificationText
    {...props}
  >
    {children}
  </NotificationText>
)

const shallowRender = (props, children) => shallow(getNotificationText(props, children))
const mount = (props, children) => mountComponent(getNotificationText(props, children))

describe('<NotificationText>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `children` prop is passed', () => {
      const component = () => shallowRender(null, null)
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

      expect(component.find('.ys-notification__text').exists()).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      const component = shallowRender({
        className: customClassName,
      })

      expect(component.find(`.ys-notification__text.${customClassName}`).exists()).toBe(true)
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
