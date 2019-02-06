import { API_BASE_URL } from '../config';

export const FETCH_OBJECTS_SUCCESS = 'FETCH_OBJECTS_SUCCESS';
export const fetchObjectsSuccess = objectsList => ({
  type: FETCH_OBJECTS_SUCCESS,
  objectsList
})

export const HANDLE_EXPANDED_ITEM = 'HANDLE_EXPANDED_ITEM';
export const handleExpandedItem = expandedItemId => {

  return({
  type: HANDLE_EXPANDED_ITEM,
  expandedItemId
})}

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