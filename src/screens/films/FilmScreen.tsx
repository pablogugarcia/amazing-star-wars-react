import React, { useEffect, useState } from 'react'
import './FilmScreen.scss'
import { Card, CardContent } from '@material-ui/core'
import { Film, ResponseList } from '../../models/api/Api'
import MovieCard from '../../components/movie-card/MovieCard'
import Loading from '../../components/loading/Loading'
import simpleFetch from '../../api/utils/simple-fetch'

const FilmScreen = (): JSX.Element => {
  const [films, setFilms] = useState<(Film & { isSelected?: boolean })[]>([])
  useEffect(() => {
    const id = setTimeout(() => {
      simpleFetch<ResponseList<Film>>('https://swapi.dev/api/films')
      .then(data => setFilms(data.results))
    }, 3000)

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
          className="film-card"
          style={{
            gridColumnStart: film.isSelected ? 'span 3' : 'unset',
          }}
          onClick={handleCardClick(film.title)}
        >
          <CardContent className="film-card-content">
            <div>
              <p>
                <span className="film-label">Movie name: </span>
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
