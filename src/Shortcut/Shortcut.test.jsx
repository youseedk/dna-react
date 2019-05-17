import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import Shortcut from './Shortcut'
import dummyIcon from '../../utils/dummyIcon'

const defaultLabel = 'Musik'
const customClassName = 'camel'
const getShortcut = props => (
  <Shortcut
    label={defaultLabel}
    icon={dummyIcon}
    {...props}
  />
)

const shallowRender = props => shallow(getShortcut(props))
const mount = props => mountComponent(getShortcut(props))

describe('<Shortcut>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `label` prop is passed', () => {
      const component = () => shallowRender({
        href: 'https://yousee.dk',
        label: null,
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if no `icon` prop is passed', () => {
      const component = () => shallowRender({
        href: 'https://yousee.dk',
        icon: null,
      })
      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        className,
        href,
        to,
      } = component.props()

      expect(className).toBe('')
      expect(href).toBe(null)
      expect(to).toBe(null)
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      const component = shallowRender()

      expect(component.find('figure.ys-shortcut__icon-container').exists()).toBe(true)
      expect(component.find('span.ys-shortcut__title').exists()).toBe(true)
    })

    it('Custom `className` is being applied to the container', () => {
      const component = shallowRender({
        className: customClassName,
      })

      expect(component.find(`.ys-shortcut.${customClassName}`).exists()).toBe(true)
    })

    it('Passes other generic props to container element', () => {
      const component = shallowRender({
        id: 'test',
        tabIndex: 0,
        className: 'owl',
      })

      expect(component.props().id).toBe('test')
      expect(component.props().tabIndex).toBe(0)
      expect(component.props().className).toBe('ys-shortcut owl')
    })
  })

  describe('Snapshots', () => {
    it('With custom `className`', () => {
      const component = shallowRender({
        href: 'https://yousee.dk',
        className: customClassName,
      })

      expect(component).toMatchSnapshot()
    })

    it('Without custom `className`', () => {
      const component = shallowRender({
        href: 'https://yousee.dk',
      })

      expect(component).toMatchSnapshot()
    })
  })
})
