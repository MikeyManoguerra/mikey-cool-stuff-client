import { API_BASE_URL } from '../config';

export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS_SUCCESS';
export const fetchObjectsSuccess = objectsList => ({
  type: FETCH_OBJECTS_SUCCESS,
  objectsList
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