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
  it('should contract all items', ()=>{

    const state = displayReducer(undefined, displayActions.contractAllItems())
    expect(state).toEqual({
      ...initialState,
      expandedListItem: null
    })
  })
  it('should contract the info section', ()=>{
    const state = displayReducer(undefined, displayActions.contractInfoSection())
    expect(state).toEqual({
      ...initialState,
      infoSection: 'contracted'
    })   
  })
})