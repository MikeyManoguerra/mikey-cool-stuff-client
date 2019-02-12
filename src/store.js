import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { displayReducer } from './reducers/display'
import { submitReducer } from './reducers/submit';
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    display: displayReducer,
    submit: submitReducer
  }),
  composeEnhancers(
    applyMiddleware(thunk))
);

export default store;