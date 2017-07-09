import attributeBeingEdited from './index'
import * as actions from '../../../actions'

describe('alcoholInstanceEditing.attributeBeingEdited', () => {
  it('should default to "null"', () => {
    const newState = attributeBeingEdited(undefined, { type: null })
    expect(newState).toBe(null)
  })

  describe('SHOW_ALCOHOL_INSTANCE_EDITING_MODAL', () => {
    it('should set the attribute being edited', () => {
      const slugToEdit = 'some-slug'
      const attributeToEdit = 'attributeToEdit'
      const initialState = 'oldAttribute'
      const action = actions.showAlcoholInstanceEditingModal(slugToEdit, attributeToEdit)
      const newState = attributeBeingEdited(initialState, action)
      expect(newState).toBe(attributeToEdit)
    })
  })
})
