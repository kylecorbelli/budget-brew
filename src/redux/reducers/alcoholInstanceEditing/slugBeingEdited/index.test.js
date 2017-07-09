import slugBeingEdited from './index'
import * as actions from '../../../actions'

describe('alcoholInstanceEditing.slugBeingEdited', () => {
  it('should default to "null"', () => {
    const newState = slugBeingEdited(undefined, { type: null })
    expect(newState).toBe(null)
  })

  describe('SHOW_ALCOHOL_INSTANCE_EDITING_MODAL', () => {
    it('should set the slug being edited', () => {
      const slugToEdit = 'some-to-edit'
      const attributeToEdit = 'attributeToEdit'
      const initialState = 'old-slug'
      const action = actions.showAlcoholInstanceEditingModal(slugToEdit, attributeToEdit)
      const newState = slugBeingEdited(initialState, action)
      expect(newState).toBe(slugToEdit)
    })
  })
})
