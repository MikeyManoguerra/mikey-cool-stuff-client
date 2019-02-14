import * as submitActions from '../actions/submit'

describe('defineCloudinaryUrl', () => {
  it('Should return the action', () => {
    const url = 'https://example.org'
  const action = submitActions.defineCloudinaryUrl(url);

  expect(action.type).toEqual(submitActions.DEFINE_CLOUDINARY_URL)
  expect(action.url).toEqual(url);
  })
})