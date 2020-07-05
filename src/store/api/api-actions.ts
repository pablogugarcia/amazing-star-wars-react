import simpleFetch from '../../api/utils/simple-fetch'
import { ResponseList, Film, Characters } from '../../models/api/Api'
import URL from '../../api/urls'

export const getFilms = (dispatch: (act: any) => void): void => {
  simpleFetch<ResponseList<Film>>(URL.films).then((data) => {
    dispatch({ type: 'SET_ALL_FILMS', payload: data.results })
  })
}

export const getCharacters = (dispatch: (act: any) => void): void => {
  simpleFetch<ResponseList<Characters>>(URL.people).then((data) => {
    dispatch({ type: 'SET_ALL_PEOPLE', payload: data.results })
  })
}

export const getCharactersWithPagination = (dispatch: (act: any) => void , page: number): void => {
  simpleFetch<ResponseList<Characters>>(URL.peopleWithPagination(page)).then((data) => {
    dispatch({ type: 'SET_ALL_PEOPLE_PAGINATION', payload: data })
  })
}