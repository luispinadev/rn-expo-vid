import React from 'react'
import Item from './Item'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<Item />).toJSON()
  expect(rendered).toBeTruthy()
})
