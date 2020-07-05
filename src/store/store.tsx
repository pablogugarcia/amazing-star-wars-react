import React, { useReducer, Dispatch } from 'react'
import { Film, Characters } from '../models/api/Api'

type actionTypes =
  | 'SET_ALL_FILMS'
  | 'SET_ALL_PEOPLE'
  | 'SET_ALL_PEOPLE_PAGINATION'

type stateContext = {
  films: Film[]
  characters: Characters[]
  totalCharacters: number
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type actionContext = { type: actionTypes; payload: any }

const initialReducerState = {
  films: [],
  characters: [],
  totalCharacters: 0,
}


const initialStateStore: {
  state: stateContext
  dispatch: Dispatch<actionContext>
} = {
  state: initialReducerState,
  dispatch: () => undefined,
}
const store = React.createContext(initialStateStore)
const { Provider } = store

const reducer = (state: stateContext, action: actionContext) => {
  switch (action.type) {
    case 'SET_ALL_FILMS':
      return {
        ...state,
        films: action.payload as Film[],
      }
    case 'SET_ALL_PEOPLE':
      return {
        ...state,
        characters: action.payload,
      }
    case 'SET_ALL_PEOPLE_PAGINATION':
      return {
        ...state,
        characters: action.payload.results,
        totalCharacters: action.payload.count,
      }
    default:
      return state
  }
}

interface StateProviderProps {
  children: JSX.Element
}


const StateProvider = ({ children }: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialReducerState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
