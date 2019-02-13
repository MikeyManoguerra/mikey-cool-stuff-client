import { API_BASE_URL, MAP_QUEST_BASE_URL } from '../config';

export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS_SUCCESS';
export const fetchObjectsSuccess = objectsList => ({
  type: FETCH_OBJECTS_SUCCESS,
  objectsList
})

export const FETCH_OBJECTS_FAILURE = 'FETCH_OBJECTS_FAILURE';
export const fetchObjectsFailure = err => ({
  type: FETCH_OBJECTS_FAILURE,
  err
})

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
export const GET_MAP_FAILURE = 'GET_MAP_FAILURE'
export const getMapFailure = (id) => ({
  type: GET_MAP_FAILURE,
  id
})

export const SET_MAP_ERROR_TO_NULL = 'SET_MAP_ERROR_TO_NULL'
export const setMapErrorToNull = () => ({
  type: SET_MAP_ERROR_TO_NULL
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
    })
    .catch(err => {
      // error is just a 404 not found from above promise reject at this time.
      err = 'Cannot get the object data at this time. Please try again later!'
      dispatch(fetchObjectsFailure(err))
    })
};

export const getMapFromMapApi = (country, capital, id) => dispatch => {
  return fetch(
    `${MAP_QUEST_BASE_URL}${capital},${country}&zoom=4&size=800,600&defaultMarker=flag-009900-${country}-sm`)
    .then(res => {
      if (!res.ok) {
        console.log(res)
        return Promise.reject(res.statusText);
      }
      return res.url
    })
    .then(mapdata => {
      return dispatch(getMapSuccess(mapdata, id));
    })
    .catch(() => {
      setTimeout(
        () => dispatch(setMapErrorToNull()),
        5 * 1000
      )
      return dispatch(getMapFailure(id))
    })
}
