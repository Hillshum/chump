import * as types from '../types'
import * as server from '../server'

import store from '../'

export const listen = ()=>(dispatch)=>{
  server.listen((msg)=>{
    dispatch({
      type: types.ADD_MESSAGE,
      payload: msg
    })
  })
}

export const sendMessage = (data, type, cb)=>()=>{
  data.optimistKey = Math.round(Math.random() * 5000)
  store.dispatch({
    type: types.ADD_MESSAGE,
    payload: {
      type: 'text',
      data,
      user: store.getState().user,
      updatedAt: new Date().toISOString()}
  })
  server.sendMessage(data, type)
  if (typeof cb === 'function') cb(args)
  }
