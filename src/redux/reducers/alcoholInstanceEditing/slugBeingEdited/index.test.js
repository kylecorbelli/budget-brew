import slugBeingEdited from './index'
import * as actions from '../../../actions'

describe('alcoholInstanceEditing.slugBeingEdited', () => {
  it('should default to "null"', () => {
    const newState = slugBeingEdited(undefined, { type: null })
    expect(newState).toBe(null)
  })

  describe('SET_ALCOHOL_SLUG_BEING_EDITED', () => {
    it('should set the slug being edited', () => {
      const slug = 'new-slug'
      const initialState = 'old-slug'
      const newState = slugBeingEdited(initialState, actions.setAlcoholSlugBeingEdited(slug))
      expect(newState).toBe(slug)
    })
  })
})
