import React, { useEffect, useState, useContext } from 'react'
import './FilmScreen.scss'
import { Card, CardContent } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Film } from '../../models/api/Api'
import MovieCard from '../../components/movie-card/MovieCard'
import Loading from '../../components/loading/Loading'
import { store } from '../../store/store'
import { getFilms } from '../../store/api/api-actions'

const FilmScreen = (): JSX.Element => {
  const [films, setFilms] = useState<(Film & { isSelected?: boolean })[]>([])
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  useEffect(() => {
    const id = setTimeout(() => {
      if (state.films.length === 0) {
        getFilms(dispatch)
      }
    }, 3000)

    return () => clearTimeout(id)
  }, [])

  useEffect(() => { 
    setFilms(state.films)
  }, [state.films])

  const handleCardClick = (title: string) => () => {
    setFilms((prevState) =>
      prevState.map((film) => {
        if (film.title === title) {
          const newFilm = { ...film }
          newFilm.isSelected = !film.isSelected
          return newFilm
        }
        return film
      })
    )
  }

  if (state.films.length === 0) {
    return <Loading />
  }

  return (
    <div className="film-screen-container">
      {films.map((film) => (
        <Card
          key={film.title}
          className="film-card"
          style={{
            gridColumnStart: film.isSelected ? 'span 3' : 'unset',
          }}
          onClick={handleCardClick(film.title)}
        >
          <CardContent className="film-card-content">
            <div>
              <h3>
                <span className="film-label">Movie name: </span>
                {film.title}
              </h3>
              <p>
                <span className="film-label">Episode number : </span>
                {film.episode_id}
              </p>
              <p>
                <span className="film-label">Director: </span>
                {film.director}
              </p>
              <p>
                <Link to="/People">People</Link>
              </p>
            </div>

            {film.isSelected && <MovieCard text={film.opening_crawl} />}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FilmScreen
