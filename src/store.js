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
import { POST_OBJECT_SUCCESS } from './actions/submit';
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(
  combineReducers({
    form: formReducer.plugin({
     newObject : (state, action) => { 
        switch(action.type) {
          case POST_OBJECT_SUCCESS:
            return undefined;       
          default:
            return state;
        }
      }
    }),
    display: displayReducer,
    submit: submitReducer
  }),
  composeEnhancers(
    applyMiddleware(thunk))
);

export default store;