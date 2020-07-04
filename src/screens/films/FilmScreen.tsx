import React, { useEffect, useState } from 'react'
import './FilmScreen.scss'
import { Card, CardContent } from '@material-ui/core'
import { Film } from '../../models/api/Api'
import MovieCard from '../../components/movie-card/MovieCard'
import Loading from '../../components/loading/Loading'

const FilmScreen = (): JSX.Element => {
  const [films, setFilms] = useState<(Film & { isSelected?: boolean })[]>([])
  useEffect(() => {
    const id = setTimeout(() => {
      fetch('https://swapi.dev/api/films')
        .then((r) => r.json())
        .then((data) => {
          setFilms(data.results)
        })
        .catch(() => undefined) // for now
    }, 10000)

    return () => clearTimeout(id)
  }, [])

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

  if (films.length === 0) {
    return <Loading />
  }

  return (
    <div className="film-screen-container">
      {films.map((film) => (
        <Card
          key={film.title}
          style={{
            gridColumnStart: film.isSelected ? 'span 3' : 'unset',
          }}
          onClick={handleCardClick(film.title)}
        >
          <CardContent className="film-card-content">
            <div>
              <p>
                <span className="film-label">Name: </span>
                {film.title}
              </p>
              <p>
                <span className="film-label">Episode number : </span>
                {film.episode_id}
              </p>
              <p>
                <span className="film-label">Director: </span>
                {film.director}
              </p>
              <p>link</p>
            </div>

            {film.isSelected && <MovieCard text={film.opening_crawl} />}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FilmScreen
