import React, { useEffect, useState } from 'react'
import './FilmScreen.scss'
import { Card, CardContent } from '@material-ui/core'
import { Film } from '../../models/api/Api'
import MovieCard from '../../components/movie-card/MovieCard'
import Loading from '../../components/loading/Loading'

/**
 * 1 - Nombre
2 - Número de episodio
3 - Director
4 - Personajes (Enlace que me permita ir a la página de personajes del film)
5 - Extra bonus (Al hacer click/over sobre el film mostrar los textos con los que inicia el film)
6 - Super Extra bonus (Animar el texto https://giphy.com/media/2UCCiILkXaLbDbrjll/giphy.gif

    title string -- The title of this film
episode_id integer -- The episode number of this film.
opening_crawl string -- The opening paragraphs at the beginning of this film.
director string -- The name of the director of this film.
producer string -- The name(s) of the producer(s) of this film. Comma separated.
release_date date -- The ISO 8601 date format of film release at original creator country.
species array -- An array of species resource URLs that are in this film.
starships array -- An array of starship resource URLs that are in this film.
vehicles array -- An array of vehicle resource URLs that are in this film.
characters array -- An array of people resource URLs that are in this film.
planets array -- An array of planet resource URLs that are in this film.
url string -- the hypermedia URL of this resource.
created string -- the ISO 8601 date format of the time that this resource was created.
edited string -- the ISO 8601 date format of the time that this resource was edited.
 */

const FilmScreen = (): JSX.Element => {
    const [films, setFilms] = useState<(Film & { isSelected?: boolean })[]>([])
    useEffect(() => {
        const id = setTimeout(() => {
            fetch('https://swapi.dev/api/films')
                .then((r) => r.json())
                .then((data) => {
                    setFilms(data.results)
                })
                .catch((e) => alert('error'))
        }, 10000)

        return () => clearTimeout(id)
    }, [])

    const handleCardClick = (title: string) => () => {
        console.log('click-->', films)
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
                                <span className="film-label">
                                    Episode number :{' '}
                                </span>
                                {film.episode_id}
                            </p>
                            <p>
                                <span className="film-label">Director: </span>
                                {film.director}
                            </p>
                            <p>link</p>
                        </div>

                        {film.isSelected && (
                            <MovieCard text={film.opening_crawl} />
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default FilmScreen
