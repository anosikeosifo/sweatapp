import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userData } from './UserReducer';

const sweatAppStore = createStore(
  combineReducers({ userData }),
  applyMiddleware(thunk),
);

export default sweatAppStore;
