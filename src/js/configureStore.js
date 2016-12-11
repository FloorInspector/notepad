import {createStore} from 'redux';
import {combinedReducers} from './reducers';

export const configureStore = () => createStore(combinedReducers);