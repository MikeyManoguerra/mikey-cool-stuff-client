import * as displayActions from '../actions/display'

describe('fetchObjectsSuccess', () => {
  it('Should return the action', () => {
    const objectsList = [{ one: 1 }, { two: 2 }]
  const action = displayActions.fetchObjectsSuccess(objectsList);

  expect(action.type).toEqual(displayActions.FETCH_OBJECTS_SUCCESS)
  expect(action.objectsList).toEqual(objectsList);
  })
})

describe('fetchObjectsSuccess', () => {
  it('Should return the action', () => {
    const objectsList = [{ one: 1 }, { two: 2 }]
  const action = displayActions.fetchObjectsSuccess(objectsList);

  expect(action.type).toEqual(displayActions.FETCH_OBJECTS_SUCCESS)
  expect(action.objectsList).toEqual(objectsList);
  })
})