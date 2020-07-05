import React, { useEffect, useState, useContext, useRef } from 'react'
import { TablePaginationConfig } from 'antd/lib/table'
import { Link } from 'react-router-dom'
import TableComponent from '../../components/table/Table'
import Loading from '../../components/loading/Loading'
import { Characters, Film } from '../../models/api/Api'
import { store } from '../../store/store'
import { getFilms, getCharactersWithPagination } from '../../store/api/api-actions'

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
    filters: [
      {
        text: 'blue',
        value: 'blue',
      },
      {
        text: 'yellow',
        value: 'yellow',
      },
      {
        text: 'red',
        value: 'red',
      },
      {
        text: 'brown',
        value: 'brown',
      },
      {
        text: 'blue-gray',
        value: 'blue-gray',
      },
    ],
    onFilter: (value: any, record: any) => {
      console.log(value, record)

      return record.eye_color.indexOf(value) === 0
    },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filters: [
      {
        text: 'male',
        value: 'male',
      },
      {
        text: 'female',
        value: 'female',
      },
      {
        text: 'n/a',
        value: 'n/a',
      },
    ],
    onFilter: (value: any, record: any) => {
      console.log(value, record)

      return record.gender.indexOf(value) === 0
    },
  },
  {
    title: 'List of films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => (
      <>
        {films.map((film) => (
          <li>
            <Link to="/Films">{film} </Link>
          </li>
        ))}
      </>
    ),

    filters: [
      {
        text: 'A New Hope',
        value: 'A New Hope',
      },
      {
        text: 'The Empire Strikes Back',
        value: 'The Empire Strikes Back',
      },
      {
        text: 'Return of the Jedi',
        value: 'Return of the Jedi',
      },
      {
        text: 'The Phantom Menace',
        value: 'The Phantom Menace',
      },
      {
        text: 'Attack of the Clones',
        value: 'Attack of the Clones',
      },
      {
        text: 'Revenge of the Sith',
        value: 'Revenge of the Sith',
      },
    ],
    onFilter: (value: any, record: any) => {
      console.log(value, record)

      return record.films.some((film: any) => film.indexOf(value) === 0)
    },
  },
]

const getPagination = (total: number): TablePaginationConfig => {
  return { current: 1, total, showSizeChanger: false }
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

  const prevPage = useRef(1)
  const handlePaginationChange = (page: number) => {
    if (page && prevPage.current !== page) {
      prevPage.current = page
      getCharactersWithPagination(dispatch, page)
    }
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
