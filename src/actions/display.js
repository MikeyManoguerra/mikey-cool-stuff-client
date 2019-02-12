import { API_BASE_URL, MAP_QUEST_BASE_URL } from '../config';

export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS_SUCCESS';
export const fetchObjectsSuccess = objectsList => ({
  type: FETCH_OBJECTS_SUCCESS,
  objectsList
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

export const fetchObjects = () => dispatch => {
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
    })
    .catch(err => {
      
    })
};

export const GET_MAP_SUCCESS = 'GET_MAP_SUCCESS'
export const getMapSuccess = (url, id) => ({
  type: GET_MAP_SUCCESS,
  url,
  id
})

export const getMapFromMapApi = (country, capital, id) => dispatch => {
  return fetch(
    `${MAP_QUEST_BASE_URL}${capital},${country}&zoom=4&size=800,600&defaultMarker=flag-009900-${country}-sm`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.url
    })
    .then(mapdata => {
      return dispatch(getMapSuccess(mapdata, id));
    })
}
