import { displayReducer } from '../reducers/display'
import * as displayActions from '../actions/display';
import * as submitActions from '../actions/submit'

const initialState = {
  objects: [],
  loading: false,
  error: null,
  expandedListItem: null,
  infoSection: 'page-load',
  mapViewItem: null,
  mapUrl: '',
  mapError: null,
  categories: [],
  uploadedFileCloudinaryUrl: '',
  uploadedFile: '',
}

describe('displayReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = displayReducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('should return current state for an unknown action', () => {
    const state = displayReducer(undefined, { type: 'UNKNOWN' });
    expect(state).toEqual(initialState)
  })

  it('Should handle expansion of an item', () => {
    const state = displayReducer(initialState, displayActions.handleExpandedItem(423))
    expect(state).toEqual({
      ...initialState,
      expandedListItem: 423,
      mapError: null
    })
  })
  it('should contract all items', () => {
    const testState = {
      ...initialState,
      expandedListItem: 534
    }
    const state = displayReducer(testState, displayActions.contractAllItems())
    expect(state).toEqual({
      ...initialState,
      expandedListItem: null
    })
  })
  it('should contract the info section', () => {
    const state = displayReducer(undefined, displayActions.contractInfoSection())
    expect(state).toEqual({
      ...initialState,
      infoSection: 'contracted'
    })
  })
  it('should expand the info section', () => {
    const testState = {
      ...initialState,
      infoSection: 'contracted'
    }
    const state = displayReducer(testState, displayActions.expandInfoSection())
    expect(state).toEqual({
      ...initialState,
      infoSection: 'more-info'
    })
  })
  it('should set the mapError to null', () => {
    const testState = {
      ...initialState,
      mapError: 645
    }
    const state = displayReducer(testState, displayActions.setMapErrorToNull())
    expect(state).toEqual({
      ...initialState,
      mapError: null
    })
  })
  it('should set the cloudinary URL', () => {
    const state = displayReducer(initialState, submitActions.defineCloudinaryUrl('https://example.org'))
    expect(state).toEqual({
      ...initialState,
      uploadedFileCloudinaryUrl: 'https://example.org'
    })
  })
})