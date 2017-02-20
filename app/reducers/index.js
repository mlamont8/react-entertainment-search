import {combineReducers} from 'redux';
import MainImageReducer from './reducer-movieImages';

const allReducers = combineReducers({
  mainMovie: MainImageReducer
})

export default allReducers;
