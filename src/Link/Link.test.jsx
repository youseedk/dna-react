import React from 'react'
import { shallow, mount } from 'enzyme'

import Link from './Link'

describe('<Link>', () => {
  describe('Props', () => {
    it('Throws propType warning if no `children` prop is passed', () => {
      expect(
        () => shallow(
          <Link href="https://yousee.dk" />,
        ),
      ).toThrow()
    })

    it('Has correct defaultProps', () => {
      const {
        className,
        href,
        to,
      } = mount(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link>
          YouSee.dk
        </Link>,
      ).props()

      expect(className).toBe('')
      expect(href).toBe(null)
    })
  })

  describe('Rendering', () => {
    it('Custom `className` is being applied to the container', () => {
      expect(
        shallow(
          <Link
            href="https://yousee.dk"
            className="salamander"
          >
            YouSee.dk
          </Link>,
        )
          .find('.ys-link.salamander')
          .exists(),
      ).toBe(true)
    })

    it('Forwards other generic props to container element', () => {
      const props = shallow(
        <Link
          href="https://yousee.dk"
          target="_blank"
          title="Gå til YouSee.dk"
        >
          YouSee.dk
        </Link>,
      ).props()

      expect(props.title).toBe('Gå til YouSee.dk')
      expect(props.target).toBe('_blank')
    })

    it('Doesn\'t add `ys-link` class if given `unstyled` prop', () => {
      expect(
        shallow(
          <Link
            unstyled
            href="https://yousee.dk"
          >
            YouSee.dk
          </Link>,
        )
          .find('.ys-link')
          .exists(),
      ).toBe(false)
    })
  })

  describe('Snapshots', () => {
    it('With default props', () => {
      expect(
        shallow(
          <Link to="/kurv">
            Til kurv
          </Link>,
        ),
      ).toMatchSnapshot()
    })

    it('With custom props', () => {
      expect(
        shallow(
          <Link
            href="https://yousee.dk"
            target="_blank"
            title="Gå til YouSee.dk"
          >
            YouSee.dk
          </Link>,
        ),
      ).toMatchSnapshot()
    })
  })
})
