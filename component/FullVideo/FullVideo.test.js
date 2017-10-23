import React from 'react'
import FullVideo from './FullVideo'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<FullVideo />).toJSON()
  expect(rendered).toBeTruthy()
})
