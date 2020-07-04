import React, { useEffect, useState, useContext } from 'react'
import { TablePaginationConfig } from 'antd/lib/table'
import TableComponent from '../../components/table/Table'
import Loading from '../../components/loading/Loading'
import { Characters, Film } from '../../models/api/Api'
import { store } from '../../store/store'
import {  getFilms, getCharactersWithPagination } from '../../store/api/api-actions'

function formatForTable(films: Film[], characters: Characters[]): Characters[] {
  const mapLinksToName = films.reduce<{ [key: string]: string }>((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    prev[current.url] = current.title
    return prev
  }, {})

  return characters.map((character) => {
    const newFilms = character.films.map((filmUrl) => mapLinksToName[filmUrl])

    return {
      ...character,
      films: newFilms,
    }
  })
}

const isEmpty = (array: any[]) => array.length === 0

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Eye color',
    dataIndex: 'eye_color',
    key: 'eye_color',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'List of films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => (
      <>
        {films.map((film) => (
          <li>
            <a href="/">{film} </a>
          </li>
        ))}
      </>
    ),
  },
]

const getPagination = (total: number): TablePaginationConfig => {
  return { current: 1, total , showSizeChanger: false }
}

const PeopleScreen = (): JSX.Element => {
  const [characters, setCharacters] = useState<Characters[] | []>([])
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  useEffect(() => {
    if (state.films.length === 0) {
      getFilms(dispatch)
    }
    getCharactersWithPagination(dispatch, 1)
  }, [])

  useEffect(() => {
    if (isEmpty(state.characters) || isEmpty(state.films)) return

    setCharacters(formatForTable(state.films, state.characters))
  }, [state.characters, state.films])

  const handlePaginationChange =(page: number) => {
    getCharactersWithPagination(dispatch, page)
  }

  if (state.characters.length === 0) return <Loading />

  return (
    <TableComponent
      data={characters}
      columns={columns}
      pagination={getPagination(state.totalCharacters)}
      onPaginationChange={handlePaginationChange}
    />
  )
}

export default PeopleScreen

