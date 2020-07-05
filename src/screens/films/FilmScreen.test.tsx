/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FilmScreen from './FilmScreen'
import Loading from '../../components/loading/Loading'

configure({ adapter: new Adapter() })

describe('<FilmScreen/>', () => {
  const container = shallow(<FilmScreen />)

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have loading in flims length 0', () => {
    expect(container.contains(<Loading />)).toEqual(true)
  })

})
