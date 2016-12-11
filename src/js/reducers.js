import { combineReducers } from 'redux';
import { ADD_NOTE } from './actions';
import { data } from '../data/data';

const notes = (state = data.notes, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  notes
});