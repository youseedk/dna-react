
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Anchor from './Anchor'

const defaultLabel = 'Click me!'
const getLink = (props, children) => (
  <Anchor {...props}>
    {defaultLabel || children}
  </Anchor>
)

const shallowRender = (props, children) => shallow(getLink(props, children))

describe('<Anchor>', () => {
  describe('Props', () => {
    describe('Props', () => {
      it('Throws propType warning if no `child` is passed', () => {
        const component = () => shallow(
          <Anchor />,
        )

        expect(component).toThrow()
      })

      it('Has correct defaultProps', () => {
        const component = mount(getLink())

        const {
          to,
          href,
          disabled,
        } = component.props()

        expect(to).toBe(null)
        expect(href).toBe(null)
        expect(disabled).toBe(false)
      })
    })
  })

  describe('Rendering', () => {
    it('Outputs a valid <a> element when passed an `href` prop', () => {
      const href = 'https://yousee.dk'
      const component = shallowRender({
        href,
      })

      expect(component.find('a').exists()).toBe(true)
      expect(component.find('a').props().href).toBe(href)
    })

    it('Outputs a valid <a> element when passed a `to` prop', () => {
      const to = '/very-page'
      const component = mount(
        <MemoryRouter>
          {getLink({
            to,
          })}
        </MemoryRouter>,
      )

      expect(component.find('a').exists()).toBe(true)
      expect(component.find('a').props().href).toBe(to)
    })

    it('Forwards arbitrary props', () => {
      expect(
        shallow(<Anchor title="Gå til Yousee.dk" />)
          .find('a')
          .props()
          .title,
      ).toBe('Gå til Yousee.dk')
    })

    it('Displays the label', () => {
      expect(
        shallow(<Anchor>Klik her</Anchor>)
          .find('a')
          .text(),
      ).toBe('Klik her')
    })

    it('Sets `tabindex` and `aria-disabled` attributes when disabled', () => {
      const props = shallow(<Anchor disabled />)
        .find('a')
        .props()

      expect(props['aria-disabled']).toBe(true)
      expect(props.tabIndex).toBe(-1)
      expect(props.disabled).toBe(undefined)
    })

    it('Sets `role=button` when no href is provided', () => {
      const props = shallow(<Anchor />)
        .find('a')
        .props()

      expect(props.role).toBe('button')
    })

    it('Never sets `role=button` if `to` is provided', () => {
      expect(
        mount(
          <MemoryRouter>
            <Anchor to="page" />
          </MemoryRouter>,
        )
          .find('a')
          .props()
          .role,
      ).toBe(undefined)
    })
  })
})
