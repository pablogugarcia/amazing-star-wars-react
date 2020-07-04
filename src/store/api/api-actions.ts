import simpleFetch from '../../api/utils/simple-fetch'
import { ResponseList, Film, Characters } from '../../models/api/Api'

export const getFilms = (dispatch: (act: any) => void): void => {
  simpleFetch<ResponseList<Film>>('https://swapi.dev/api/films').then((data) => {
    dispatch({ type: 'SET_ALL_FILMS', payload: data.results })
  })
}

export const getCharacters = (dispatch: (act: any) => void): void => {
  simpleFetch<ResponseList<Characters>>('https://swapi.dev/api/people').then((data) => {
    dispatch({ type: 'SET_ALL_PEOPLE', payload: data.results })
  })
}

export const getCharactersWithPagination = (dispatch: (act: any) => void , page: number): void => {
  simpleFetch<ResponseList<Characters>>(`https://swapi.dev/api/people/?page=${page}`).then((data) => {
    dispatch({ type: 'SET_ALL_PEOPLE_PAGINATION', payload: data })
  })
}