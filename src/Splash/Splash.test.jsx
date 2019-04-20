import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import Splash from './Splash'

const defaultPrice = 149
const getSplash = props => (
  <Splash
    price={defaultPrice}
    {...props}
  />
)

const shallowRender = props => shallow(getSplash(props))
const mount = props => mountComponent(getSplash(props))

describe('<Splash>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `price` prop is passed', () => {
      const component = () => shallowRender({
        price: null,
      })
      expect(component).toThrow()
    })

    it('Throws propType warning if unsupported `variant` prop is passed', () => {
      const component = () => shallowRender({
        variant: 'red',
      })

      expect(component).toThrow()
    })

    it('Throws propType warning if `price` prop is passed as string', () => {
      const component = () => shallowRender({
        price: '149,99',
      })

      expect(component).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount()

      const {
        variant,
        description,
        className,
      } = component.props()

      expect(variant).toBe('yellow')
      expect(description).toBe('')
      expect(className).toBe('')
    })
  })

  describe('Rendering', () => {
    it('Outputs elements with the correct class names', () => {
      const component = shallowRender({
        description: '/md i 24 mdr.',
      })

      expect(component.find('div.ys-splash').exists()).toBe(true)
      expect(component.find('strong.ys-splash__price').exists()).toBe(true)
      expect(component.find('small.ys-splash__desc').exists()).toBe(true)
    })

    it('Displays the suffixed price', () => {
      const component = shallowRender()

      expect(component.find('.ys-splash__price').text()).toBe(`${defaultPrice},-`)
    })

    it('Displays the description', () => {
      const description = '/md i 24 mdr.'
      const component = shallowRender({
        description,
      })

      expect(component.find('.ys-splash__desc').text()).toBe(description)
    })

    it('Doesn\'t render the description block if no `description` prop is passed', () => {
      const component = shallowRender()

      expect(component.find('.ys-splash__desc').exists()).toBe(false)
    })

    it('Custom `className` is being applied to the container', () => {
      const customClassName = 'fox'
      const component = shallowRender({
        className: customClassName,
      })

      expect(component.find(`.ys-splash.${customClassName}`).exists()).toBe(true)
    })

    it('Supports and adds the correct `variant` class to the container', () => {
      const variants = ['yellow', 'blue']

      variants.forEach((variant) => {
        const component = shallowRender({
          variant,
        })

        expect(component.find(`.ys-splash.ys-splash--${variant}`).exists()).toBe(true)
      })
    })
  })
})
