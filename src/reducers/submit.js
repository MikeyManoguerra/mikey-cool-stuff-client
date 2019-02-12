import * as actions from '../actions/submit';

const initialState = {
  categories: [],
  loading: false,
  error: null,
  uploadedFileCloudinaryUrl: '',
  uploadedFile: '',
} 

export const submitReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_CATEGORIES_SUCCESS) {
    return Object.assign({}, state, {
      categories: [...action.categoriesList],
      loading: false
    })
  }
 
  if (action.type === actions.UPLOADED_IMAGE_FILE) {
    return Object.assign({}, state, {
      uploadedFile: action.imageFile
    })
  }
  if (action.type === actions.DEFINE_CLOUDINARY_URL) {
    return Object.assign({}, state, {
      uploadedFileCloudinaryUrl: action.url
    })
  }
  return state;
}