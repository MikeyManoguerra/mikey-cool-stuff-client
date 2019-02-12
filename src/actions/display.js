import { API_BASE_URL, MAP_QUEST_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS_SUCCESS';
export const fetchObjectsSuccess = objectsList => ({
  type: FETCH_OBJECTS_SUCCESS,
  objectsList
})
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const fetchCategoriesSuccess = categoriesList => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categoriesList
})
export const POST_OBJECT_SUCCESS = 'POST_OBJECT_SUCCESS';
export const postObjectSuccess = (newObject) => {
  return ({
    type: POST_OBJECT_SUCCESS,
    newObject
  })
}

export const HANDLE_EXPANDED_ITEM = 'HANDLE_EXPANDED_ITEM';
export const handleExpandedItem = expandedItemId => {

  return ({
    type: HANDLE_EXPANDED_ITEM,
    expandedItemId
  })
}

export const CONTRACT_ALL_ITEMS = 'CONTRACT_ALL_ITEMS';
export const contractAllItems = () => ({
  type: CONTRACT_ALL_ITEMS,

})
export const UPLOADED_IMAGE_FILE = 'UPLOADED_IMAGE_FILE';
export const uploadedImageFile = imageFile => {
  return ({
    type: UPLOADED_IMAGE_FILE,
    imageFile
  })
}
export const DEFINE_CLOUDINARY_URL = 'DEFINE_CLOUDINARY_URL';
export const defineCloudinaryUrl = url => {
  return ({
    type: DEFINE_CLOUDINARY_URL,
    url

  })
};

export const CONTRACT_INFO_SECTION = 'CONTRACT_INFO_SECTION';
export const contractInfoSection = () => ({
  type: CONTRACT_INFO_SECTION
})

export const EXPAND_INFO_SECTION = 'EXPAND_INFO_SECTION';
export const expandInfoSection = () => ({
  type: EXPAND_INFO_SECTION
})

export const GET_MAP_SUCCESS = 'GET_MAP_SUCCESS'
export const getMapSuccess = (url, id) => ({
  type: GET_MAP_SUCCESS,
  url,
  id
})


export const fetchObjects = () => dispatch => {
  debugger;
  fetch(`${API_BASE_URL}/objects`)
    .then(res => {
      if (!res.ok) {
        console.log(res.statusText)
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(objectsList => {
      dispatch(fetchObjectsSuccess(objectsList));
    });
};

export const getCategories = () => dispatch => {
  fetch(`${API_BASE_URL}/categories`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(categoriesList => {
      dispatch(fetchCategoriesSuccess(categoriesList));
    });
};

export const submitNewObject = (values) => dispatch =>
  fetch(`${API_BASE_URL}/objects`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'content-type': 'application/json' }
  }).then(res => {
    if (!res.ok) {
      if (
        res.headers.has('content-type') &&
        res.headers
          .get('content-type')
          .startsWith('application/json')
      ) {
        // It's a nice JSON error returned by us, so decode it
        return res.json().then(err => Promise.reject(err));
      }
      // It's a less informative error returned by express
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return res.json();
  })
    .then((newObject) => {
      dispatch(postObjectSuccess(newObject));
    })
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      );
    });

export const getMapFromMapApi = (country, capital, id) => dispatch => {

  return fetch(`${MAP_QUEST_BASE_URL}${capital},${country}&zoom=3&size=800,600&defaultMarker=marker`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.url
    })
    .then(mapdata => {
     return  dispatch(getMapSuccess(mapdata , id));
    })
}



export const getCapitalFromCountriesApi = () => dispatch => {
  fetch(`https://restcountries.eu/rest/v2/name/usa`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(([result]) => console.log(result.capital))
};
