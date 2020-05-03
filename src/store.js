import {createStore, combineReducers, applyMiddleware} from "redux";
import searchReducer from './reducers/search';
import thunk from 'redux-thunk';

const combined =  combineReducers({searchReducer})  ; 
const store = createStore(combined,applyMiddleware(thunk));

export default store;