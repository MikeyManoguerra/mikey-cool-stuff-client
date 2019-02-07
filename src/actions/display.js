import { API_BASE_URL } from '../config';

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
export const postObjectSuccess = () => ({
  type: POST_OBJECT_SUCCESS,
})

export const HANDLE_EXPANDED_ITEM = 'HANDLE_EXPANDED_ITEM';
export const handleExpandedItem = expandedItemId => {

  return ({
    type: HANDLE_EXPANDED_ITEM,
    expandedItemId
  })
}

export const CONTRACT_ALL_ITEMS = 'CONTRACT_ALL_ITEMS';
export const ContractAllItems = () => ({
  type: CONTRACT_ALL_ITEMS,

})


export const fetchObjects = () => dispatch => {
  fetch(`${API_BASE_URL}/objects`)
    .then(res => {
      if (!res.ok) {
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
    headers: {'content-type': 'application/json'}
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
    return;
  })
    .then(() => {
      console.log('Submitted with values', values);
      dispatch(postObjectSuccess())
    }) 
// .catch(err => {
//     const {reason, message, location} = err;
//     if (reason === 'ValidationError') {
//         // Convert ValidationErrors into SubmissionErrors for Redux Form
//         return Promise.reject(
//             new SubmissionError({
//                 [location]: message
//             })
//         );
//     }
//     return Promise.reject(
//         new SubmissionError({
//             _error: 'Error submitting message'
//         })
//     );
// });

