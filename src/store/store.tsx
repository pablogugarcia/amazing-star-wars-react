import React, { useReducer, Dispatch } from 'react'
import { Film, Characters } from '../models/api/Api'

type actionTypes = 'SET_ALL_FILMS' | 'SET_ALL_PEOPLE' | 'SET_ALL_PEOPLE_PAGINATION'
type stateContext = { films: Film[]; characters: Characters[] ; totalCharacters: number}
type actionContext = { type: actionTypes; payload: any }

const initialStateStore: {
  state: stateContext
  dispatch: Dispatch<actionContext>
} = {
  state: { films: [], characters: [], totalCharacters: 0 },
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
      return state;
  }
}

interface StateProviderProps {
  children: JSX.Element
}

const initialState = {
  films: [],
  characters: [],
  totalCharacters: 0
}

const StateProvider = ({ children }: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
