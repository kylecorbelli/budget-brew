import isEditingModalShown from './index'
import * as actions from '../../../actions'

describe('isEditingModalShown', () => {
  it('should have a default value of "false"', () => {
    const newState = isEditingModalShown(undefined, { type: null })
    expect(newState).toBe(false)
  })

  describe('SHOW_ALCOHOL_INSTANCE_EDITING_MODAL', () => {
    it('should show the alcohol instance editing modal', () => {
      const slugBeingEdited = 'some-slug'
      const attributeBeingEdited = 'someAttribute'
      const initialState = false
      const action = actions.showAlcoholInstanceEditingModal(slugBeingEdited, attributeBeingEdited)
      const newState = isEditingModalShown(initialState, action)
      expect(newState).toBe(true)
    })
  })

  describe('HIDE_ALCOHOL_INSTANCE_EDITING_MODAL', () => {
    it('should hide the alcohol instance editing modal', () => {
      const initialState = true
      const action = actions.hideAlcoholInstanceEditingModal()
      const newState = isEditingModalShown(initialState, action)
      expect(newState).toBe(false)
    })
  })
})
