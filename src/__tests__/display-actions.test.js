import * as displayActions from '../actions/display'

describe('handleExpandedItem', () => {
  it('Should return the action', () => {
    const expandedItemId = 423
  const action = displayActions.handleExpandedItem(expandedItemId);

  expect(action.type).toEqual(displayActions.HANDLE_EXPANDED_ITEM)
  expect(action.expandedItemId).toEqual(expandedItemId);
  })
})


describe('contractAllItems', () => {
  it('Should return the action', () => {
  const action = displayActions.contractAllItems();

  expect(action.type).toEqual(displayActions.CONTRACT_ALL_ITEMS)
  })
})


describe('contractInfoSection', () => {
  it('Should return the action', () => {
  const action = displayActions.contractInfoSection();

  expect(action.type).toEqual(displayActions.CONTRACT_INFO_SECTION)
  })
})


describe('expandInfoSection', () => {
  it('Should return the action', () => {
  const action = displayActions.expandInfoSection();

  expect(action.type).toEqual(displayActions.EXPAND_INFO_SECTION)
  })
})


describe('setMapErrorToNull', () => {
  it('Should return the action', () => {
  const action = displayActions.setMapErrorToNull();

  expect(action.type).toEqual(displayActions.SET_MAP_ERROR_TO_NULL)
  })
})

// TODO: Async Actions
describe('fetchObjectsSuccess', () => {
  it('Should return the action', () => {
    const objectsList = [{ one: 1 }, { two: 2 }]
  const action = displayActions.fetchObjectsSuccess(objectsList);

  expect(action.type).toEqual(displayActions.FETCH_OBJECTS_SUCCESS)
  expect(action.objectsList).toEqual(objectsList);
  })
})