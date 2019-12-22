import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import user from './user';
import posts from './posts';
import modals from './modals';

// Root reducer of the redux store
const reducer = combineReducers({
  user,
  posts,
  modals
});
// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Contains all redux middlewares
const middlewares = [thunk];

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
