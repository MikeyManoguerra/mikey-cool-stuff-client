import * as actions from '../actions/display';


const initialState = {
  objects: [],
  loading: false,
  error: null,
  expandedListItem: null
}

export const displayReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_OBJECTS_SUCCESS) {
    return Object.assign({}, state, {
      objects: [...action.objectsList],
      loading: false
    })
  }
  if (action.type === actions.HANDLE_EXPANDED_ITEM) {
    return Object.assign({}, state, {
      expandedListItem: action.expandedItemId
    })
  }
  if(action.type === actions.CONTRACT_ALL_ITEMS){
    return Object.assign({}, state, {
      expandedListItem: null
    })
  }
  return state;
};