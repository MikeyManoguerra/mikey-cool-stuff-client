import { FETCH_OBJECTS_SUCCESS } from '../actions/display';


const initialState = {
  objects: [],
  loading: false,
  error: null
}

export const displayReducer = (state = initialState, action) => {
  if (action.type === FETCH_OBJECTS_SUCCESS) {
    return Object.assign({}, state, {
      objects: [...action.objectsList],
      loading: false
    })
  }
  return state;
};