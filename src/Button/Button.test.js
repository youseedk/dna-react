import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const defaultLabel = 'Click me!'
const shallowRender = props => shallow(
  <Button
    label={defaultLabel}
    {...props}
  />
)

describe('<Button>', () => {

  it('Throws propType warning if no `label` prop is passed', () => {
    const componentShallowRender = () => shallowRender({
      href: 'https://yousee.dk',
      label: null,
    })

    expect(componentShallowRender).toThrow()
  })

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

  it('Delegates `onClick` event when is a <button> element', () => {
    const clickHandler = jest.fn()
    const component = shallowRender({
      onClick: clickHandler,
    })

    component.find('button').simulate('click')
    expect(clickHandler).toHaveBeenCalled()
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

  it('Throws propType warning if unsupported `variant` prop is passed', () => {
    const componentShallowRender = () => shallowRender({
      href: 'https://yousee.dk',
      variant: 'invisible',
    })

    expect(componentShallowRender).toThrow()
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

  it('Has correct defaultProps', () => {
    const component = shallowRender({
      onClick: jest.fn(),
    })
    const props = component.instance().props

    expect(props.variant).toBe('default')
    expect(props.disabled).toBe(false)
  })

})
