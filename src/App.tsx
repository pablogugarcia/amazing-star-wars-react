import React from 'react'
import { Route } from 'react-router-dom'
import HomeScreen from './screens/home/HomeScreen'
import NavBar from './components/navbar/Navbar'
import Particles from './components/particles/Particles'
import FilmScreen from './screens/films/FilmScreen'
import PeopleScreen from './screens/people/PeopleScreen'
import MainLayout from './layouts/MainLayout'
import SeparatorLine from './components/separator-line/SeparatorLine'

const App = (): JSX.Element => (
  <div>
    <NavBar items={['Films', 'People']} />
    <SeparatorLine />
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
