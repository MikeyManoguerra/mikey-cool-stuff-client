import * as actions from '../actions/display';
import { POST_OBJECT_SUCCESS } from '../actions/submit'

const initialState = {
  objects: [],
  loading: false,
  error: null,
  expandedListItem: null,
  infoSection: 'page-load',
  mapViewItem: null,
  mapUrl: '',
  mapError: null
}

export const displayReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_OBJECTS_SUCCESS) {
    return Object.assign({}, state, {
      objects: [...action.objectsList],
      loading: false,
      error: null
    })
  }
  if (action.type === actions.FETCH_OBJECTS_FAILURE) {
    return Object.assign({}, state, {
      error: action.err
    })
  }
  if (action.type === POST_OBJECT_SUCCESS) {
    return ({
      ...state,
      objects: [action.newObject, ...state.objects],
      error: null
    })
  }
  if (action.type === actions.HANDLE_EXPANDED_ITEM) {
    return Object.assign({}, state, {
      expandedListItem: action.expandedItemId,
      mapViewItem: null
    })
  }
  if (action.type === actions.CONTRACT_ALL_ITEMS) {
    return Object.assign({}, state, {
      expandedListItem: null
    })
  }
  if (action.type === actions.CONTRACT_INFO_SECTION) {
    return Object.assign({}, state, {
      infoSection: 'contracted'
    })
  }
  if (action.type === actions.EXPAND_INFO_SECTION) {
    return Object.assign({}, state, {
      infoSection: 'more-info'
    })
  }
  if (action.type === actions.GET_MAP_SUCCESS) {
    return Object.assign({}, state, {
      mapUrl: action.url,
      mapViewItem: action.id
    })
  }
  if (action.type === actions.GET_MAP_FAILURE) {
    return Object.assign({}, state, {
      mapError: action.id
    })
  }
  if (action.type === actions.SET_MAP_ERROR_TO_NULL){
    return Object.assign({}, state, {
      mapError: null
    })
  }
  return state;
};