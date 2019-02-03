import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import navReducer from './reducers/nav'
import displayReducer from './reducers/display'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    navigation : navReducer,
    display: displayReducer,

  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;