import React from 'react'
import { shallow, mount as mountComponent } from 'enzyme'

import Button from './Button'

const dummyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      x="10"
      y="10"
      height="100"
      width="100"
      style={{ stroke: '#ff0000', fill: '#0000ff' }}
    />
  </svg>
)

const defaultLabel = 'Click me!'
const getButton = props => (
  <Button
    label={defaultLabel}
    {...props}
  />
)

const shallowRender = props => shallow(getButton(props))
const mount = props => mountComponent(getButton(props))

describe('<Button>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `label` prop is passed', () => {
      const componentShallowRender = () => shallowRender({
        href: 'https://yousee.dk',
        label: null,
      })
      expect(componentShallowRender).toThrow()
    })

    it('Throws propType warning if unsupported `variant` prop is passed', () => {
      const componentShallowRender = () => shallowRender({
        href: 'https://yousee.dk',
        variant: 'invisible',
      })

      expect(componentShallowRender).toThrow()
    })

    it('Has correct defaultProps', () => {
      const component = mount({
        onClick: jest.fn(),
      })

      const {
        variant,
        disabled,
        className,
        block,
        icon,
        iconOnly,
      } = component.props()

      expect(variant).toBe('default')
      expect(disabled).toBe(false)
      expect(className).toBe('')
      expect(block).toBe(false)
      expect(icon).toBe(null)
      expect(iconOnly).toBe(false)
    })
  })

  describe('Rendering', () => {
    it('Outputs a <button> element when passed an `onClick` prop', () => {
      const component = shallowRender({
        onClick: jest.fn(),
      })

      expect(component.find('button')).toHaveLength(1)
    })

    it('Outputs an <a> element when passed a `href` prop', () => {
      const href = 'https://yousee.dk'
      const component = shallowRender({
        href,
      })

      expect(component.find('a').prop('href')).toBe(href)
    })

    it('Displays the correct label in the <button> element', () => {
      const component = shallowRender({
        onClick: jest.fn(),
      })

      expect(component.find('button span').text()).toBe(defaultLabel)
    })

    it('Displays the correct label in the <a> element', () => {
      const component = shallowRender({
        href: 'https://yousee.dk',
      })

      expect(component.find('a span').text()).toBe(defaultLabel)
    })

    it('<button> element has the `ys-button` default class', () => {
      const component = shallowRender({
        onClick: jest.fn(),
      })

      expect(component.find('.ys-button')).toHaveLength(1)
    })

    it('<a> element has the `ys-button` and `ys-button__text` default classes', () => {
      const component = shallowRender({
        href: 'https://yousee.dk',
      })

      expect(component.find('.ys-button .ys-button__text')).toHaveLength(1)
    })

    it('Custom `className` is being applied to the container', () => {
      const customClassName = 'squirrel'
      const component = shallowRender({
        onClick: jest.fn(),
        className: customClassName,
      })

      expect(component.find(`.ys-button.${customClassName}`)).toHaveLength(1)
    })

    it('Supports and adds the correct `variant` class to the container', () => {
      const variants = ['default', 'light', 'cta', 'solid-dark', 'solid-light', 'stripped-dark', 'stripped-light']

      variants.forEach((variant) => {
        const component = shallowRender({
          onClick: jest.fn(),
          variant,
        })

        expect(component.find(`.ys-button.ys-button--${variant}`)).toHaveLength(1)
      })
    })

    it('Adds `disabled` attribute and `ys-disabled` class if passed as prop', () => {
      const component = shallowRender({
        onClick: jest.fn(),
        disabled: true,
      })

      // https://github.com/airbnb/enzyme/issues/336
      expect(component.find('button').prop('disabled')).toBe(true)
      expect(component.find('button.ys-disabled')).toHaveLength(1)
    })

    it('Adds `ys-button--block` class if passed `block` prop', () => {
      const component = shallowRender({
        onClick: jest.fn(),
        block: true,
      })

      expect(component.find('button.ys-button--block')).toHaveLength(1)
    })

    describe('Icons', () => {
      // 'ys-button--icon'

      it('Doesn\'t render the icon container nor classes unless passed `icon` prop', () => {
        const component = shallowRender({
          onClick: jest.fn(),
        })

        expect(component.find('button.ys-button--icon').exists()).toBe(false)
        expect(component.find('.ys-button__icon').exists()).toBe(false)
      })

      it('Correctly renders icons in the <button> element', () => {
        const component = shallowRender({
          onClick: jest.fn(),
          icon: dummyIcon,
        })

        expect(component.find('.ys-button--icon').exists()).toBe(true)
        expect(component.find('.ys-button__icon .ys-icon').exists()).toBe(true)
      })

      it('Correctly renders icons in the <a> element', () => {
        const component = shallowRender({
          href: 'https://yousee.dk',
          icon: dummyIcon,
        })

        expect(component.find('.ys-button--icon').exists()).toBe(true)
        expect(component.find('.ys-button__icon .ys-icon').exists()).toBe(true)
      })

      it('Doesn\'t add `ys-button--icon` class if passed `iconOnly` prop', () => {
        const component = shallowRender({
          onClick: jest.fn(),
          icon: dummyIcon,
          iconOnly: true,
        })

        expect(component.find('.ys-button--icon').exists()).toBe(false)
      })

      it('Adds needed classes if passed `iconOnly` prop', () => {
        const component = shallowRender({
          onClick: jest.fn(),
          icon: dummyIcon,
          iconOnly: true,
        })

        expect(component.find('.ys-button.ys-button--icon-only').exists()).toBe(true)
        expect(component.find('.ys-button__text.ys-u-visuallyhidden').exists()).toBe(true)
      })
    })
  })

  describe('Events', () => {
    it('Delegates `onClick` event when is a <button> element', () => {
      const clickHandler = jest.fn()
      const component = shallowRender({
        onClick: clickHandler,
      })

      component.find('button').simulate('click')
      expect(clickHandler).toHaveBeenCalled()
    })
  })
})
