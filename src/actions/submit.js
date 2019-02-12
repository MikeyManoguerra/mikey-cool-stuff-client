import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';

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

export const submitNewObject = (values) => dispatch => {
  return getCapitalFromCountriesApi(values.countryOfOrigin)
    .then((capital) => {
      debugger;
      const valuesWithLocation = {
        ...values,
        capital: capital
      }
      return fetch(`${API_BASE_URL}/objects`, {
        method: 'POST',
        body: JSON.stringify(valuesWithLocation),
        headers: { 'content-type': 'application/json' }
      })
    })
    .then(res => {
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
      debugger;
      return res.json();
    })
    .then((newObject) => {
      dispatch(postObjectSuccess(newObject));
    })
    .catch(err => {
      debugger;
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
}

export const getCapitalFromCountriesApi = (country) => {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(([result]) => result.capital)
    .catch(() => null);
};
