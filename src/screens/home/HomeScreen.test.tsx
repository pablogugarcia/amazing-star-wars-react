/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react'
import { shallow , configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import HomeScreen from './HomeScreen'

configure({adapter: new Adapter()})

it('renders title', () => {
  const wrapper = shallow(<HomeScreen />)
  const title = <h1 className="home-title">STAR WARS</h1>

  expect(wrapper.contains(title)).toEqual(true)
})
