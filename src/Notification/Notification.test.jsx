import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import Notification from './Notification'
import dummyIcon from '../../utils/dummyIcon'

const defaultMessage = 'Notification message'
const customClassName = 'sparrow'
const getNotification = props => (
  <Notification
    {...props}
  >
    <Notification.Text>
      {defaultMessage}
    </Notification.Text>
  </Notification>
)

const shallowRender = props => shallow(getNotification(props))
const mount = props => mountComponent(getNotification(props))

describe('<Notification>', () => {
  describe('Props', () => {
    it('Doesn\'t throw propType warning if child is `Notification.Text` element', () => {
      const component = () => shallowRender()
      expect(component).not.toThrow()
    })

    it('Doesn\'t throw propType warning if children are multiple `Notification.Text` elements', () => {
      const component = () => shallow(
        <Notification>
          <Notification.Text>{defaultMessage}</Notification.Text>
          <Notification.Text>{defaultMessage}</Notification.Text>
        </Notification>,
      )
      expect(component).not.toThrow()
    })

    it('Throws propType warning if no `child` is passed', () => {
      const component = () => shallow(<Notification />)
      expect(component).toThrow()
    })

    it('Throws propType warning if text is being passed as `child`', () => {
      const component = () => shallow(
        <Notification>
          {defaultMessage}
        </Notification>,
      )
      expect(component).toThrow()
    })

    it('Throws propType warning if unsupported `variant` prop is passed', () => {
      const component = () => shallowRender({
        variant: 'default',
      })

      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        variant,
        // icon,
        displayIcon,
        className,
      } = component.props()

      expect(variant).toBe('info')
      expect(displayIcon).toBe(true)
      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Custom `className` is being applied to the container', () => {
      const component = shallowRender({
        className: customClassName,
      })

      expect(component.find(`.ys-notification.${customClassName}`).exists()).toBe(true)
    })

    it('Supports and adds the correct `variant` class to the container', () => {
      const variants = ['info', 'success', 'warning', 'error']

      variants.forEach((variant) => {
        const component = shallowRender({
          variant,
        })

        expect(component.find(`.ys-notification.ys-notification--${variant}`).exists()).toBe(true)
      })
    })

    describe('Icons', () => {
      it('Doesn\'t render the icon container nor classes if `displayIcon` is `false`', () => {
        const component = shallowRender({
          displayIcon: false,
        })

        expect(component.find('.ys-notification__icon').exists()).toBe(false)
      })

      it('Correctly renders icons in the <button> element', () => {
        const component = shallowRender({
          icon: dummyIcon,
        })

        expect(component.find('.ys-notification__icon .ys-icon').exists()).toBe(true)
      })
    })

    describe('Snapshots', () => {
      it('With custom props', () => {
        const component = shallowRender({
          className: customClassName,
          variant: 'success',
          icon: dummyIcon,
        })

        expect(component).toMatchSnapshot()
      })

      it('With default props', () => {
        const component = shallowRender()

        expect(component).toMatchSnapshot()
      })
    })
  })
})
