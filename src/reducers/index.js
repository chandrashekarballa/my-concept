import {combineReducers } from 'redux';
import ReducerHomeFetchExample from '../reducers/Home.Reducer'
const rootReducer = combineReducers({
   mainfetch: ReducerHomeFetchExample


})
export default rootReducer;