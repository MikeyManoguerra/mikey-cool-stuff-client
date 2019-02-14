import * as displayActions from '../actions/display';
import * as submitActions from '../actions/submit'

const initialState = {
  objects: [],
  loading: false,
  error: null,
  expandedListItem: null,
  infoSection: 'page-load',
  mapViewItem: null,
  mapUrl: '',
  mapError: null,
  categories: [],
  uploadedFileCloudinaryUrl: '',
  uploadedFile: '',
}

export const displayReducer = (state = initialState, action) => {
  if (action.type === displayActions.FETCH_OBJECTS_SUCCESS) {
    return Object.assign({}, state, {
      objects: [...action.objectsList],
      loading: false,
      error: null
    })
  }
  if (action.type === displayActions.FETCH_OBJECTS_FAILURE) {
    return Object.assign({}, state, {
      error: action.err
    })
  }

  if (action.type === displayActions.HANDLE_EXPANDED_ITEM) {
    return Object.assign({}, state, {
      expandedListItem: action.expandedItemId,
      mapViewItem: null
    })
  }
  if (action.type === displayActions.CONTRACT_ALL_ITEMS) {
    return Object.assign({}, state, {
      expandedListItem: null
    })
  }
  if (action.type === displayActions.CONTRACT_INFO_SECTION) {
    return Object.assign({}, state, {
      infoSection: 'contracted'
    })
  }
  if (action.type === displayActions.EXPAND_INFO_SECTION) {
    return Object.assign({}, state, {
      infoSection: 'more-info'
    })
  }
  if (action.type === displayActions.GET_MAP_SUCCESS) {
    return Object.assign({}, state, {
      mapUrl: action.url,
      mapViewItem: action.id
    })
  }
  if (action.type === displayActions.GET_MAP_FAILURE) {
    return Object.assign({}, state, {
      mapError: action.id
    })
  }
  if (action.type === displayActions.SET_MAP_ERROR_TO_NULL) {
    return Object.assign({}, state, {
      mapError: null
    })
  }
  if (action.type === submitActions.FETCH_CATEGORIES_SUCCESS) {
    return Object.assign({}, state, {
      categories: [...action.categoriesList],
      loading: false
    })
  }

  if (action.type === submitActions.UPLOADED_IMAGE_FILE) {
    return Object.assign({}, state, {
      uploadedFile: action.imageFile
    })
  }
  if (action.type === submitActions.DEFINE_CLOUDINARY_URL) {
    return Object.assign({}, state, {
      uploadedFileCloudinaryUrl: action.url
    })
  }
  if (action.type === submitActions.POST_OBJECT_SUCCESS) {
    return ({
      ...state,
      objects: [action.newObject, ...state.objects],
      error: null
    })
  }
  return state;
};