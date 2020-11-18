import { createStore } from 'redux';

import rootReducers from './reducers';

/** Defines a function to be used as initialization store */
const initStore = () => createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/** Define an usable store */
const store = initStore();

export default store;
