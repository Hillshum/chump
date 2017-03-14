import * as types from '../types'
import deepFreeze from 'deep-freeze'

const initialState = []

export default function(state=initialState, action){
  const actions = {
    [types.ADD_MESSAGE]: ()=>{
      state = state.filter(item => {
        if (!action.payload.data.optimistKey) return true
        return item.data.optimistKey !== action.payload.data.optimistKey
      })
      return [...state, action.payload]
    }
  }

  return actions[action.type] === undefined ? state : deepFreeze(actions[action.type]())
}
