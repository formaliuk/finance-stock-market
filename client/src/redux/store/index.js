import { createStore } from 'redux';
import reducer from '../reducers';

export const initialState = {
  quotes: [],
  hiddenItems: {}
};

export const store = createStore(reducer, initialState);
