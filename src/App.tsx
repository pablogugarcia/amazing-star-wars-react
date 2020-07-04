import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from './screens/home/HomeScreen'
import NavBar from './components/navbar/Navbar'
import Particles from './components/particles/Particles'
import FilmScreen from './screens/films/FilmScreen'
import PeopleScreen from './screens/people/PeopleScreen'
import MainLayout from './layouts/MainLayout'

const App = (): JSX.Element => (
  <div>
    <NavBar items={['Films', 'People']} />
    <div style={{ display: 'flex', justifyContent: 'space-around ' }}>
      <div
        style={{
          border: '1px solid #e2e2e2',
          margin: '5rem 5rem 1rem 5rem',
          width: '10%',
        }}
      />
      <div
        style={{
          border: '1px solid #e2e2e2',
          margin: '5rem 5rem 1rem 5rem',
          width: '10%',
        }}
      />
    </div>
    <Particles />
    <Route path="/Films">
      <MainLayout title="FILMS">
        <FilmScreen />
      </MainLayout>
    </Route>
    <Route path="/People">
      <MainLayout title="PEOPLE">
        <PeopleScreen />
      </MainLayout>
    </Route>
    <Route path="/" exact>
      <HomeScreen />
    </Route>
  </div>
)

export default App
