import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import front from './front'

const entApp = combineReducers({

  front,
  routing: routerReducer


})

export default entApp
