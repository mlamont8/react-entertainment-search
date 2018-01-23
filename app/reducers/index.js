import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import front from './front'
import searchTerm from './search'
import exploreResults from './exploreData'

const entApp = combineReducers({


  routing: routerReducer,
  front,
  searchTerm,
  exploreResults


})

export default entApp
