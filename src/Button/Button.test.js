import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe("<Button>", () => {

  it('Outputs a <button> element', () => {
    const clickHandler = jest.fn()
    const component = shallow(
      <Button
        onClick={clickHandler}
        label="lawl"
      />)

    expect(component.find('button')).toHaveLength(1)
  })

})