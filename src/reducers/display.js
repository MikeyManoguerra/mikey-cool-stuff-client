import * as actions from '../actions/display';


const initialState = {
  objects: [],
  categories: [],
  loading: false,
  error: null,
  expandedListItem: null,
  submissionSuccess: false
}

export const displayReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_OBJECTS_SUCCESS) {
    return Object.assign({}, state, {
      objects: [...action.objectsList],
      loading: false
    })
  }
  if (action.type === actions.FETCH_CATEGORIES_SUCCESS) {

    return Object.assign({}, state, {

      categories: [...action.categoriesList],
      loading: false
    })
  }
  if (action.type === actions.HANDLE_EXPANDED_ITEM) {
    return Object.assign({}, state, {
      expandedListItem: action.expandedItemId
    })
  }
  if (action.type === actions.CONTRACT_ALL_ITEMS) {
    return Object.assign({}, state, {
      expandedListItem: null
    })
  }
  if (action.type === actions.POST_OBJECT_SUCCESS) {
    return Object.assign({}, state, {
      submissionSuccess: true
    })
  }
  return state;
};