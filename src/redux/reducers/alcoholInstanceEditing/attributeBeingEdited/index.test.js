import attributeBeingEdited from './index'
import * as actions from '../../../actions'

describe('alcoholInstanceEditing.attributeBeingEdited', () => {
  it('should default to "null"', () => {
    const newState = attributeBeingEdited(undefined, { type: null })
    expect(newState).toBe(null)
  })

  describe('SET_ALCOHOL_ATTRIBUTE_BEING_EDITED', () => {
    it('should set the attribute being edited', () => {
      const attribute = 'totalCost'
      const initialState = 'costPerOunceOfPureAlcohol'
      const newState = attributeBeingEdited(initialState, actions.setAlcoholAttributeBeingEdited(attribute))
      expect(newState).toBe(attribute)
    })
  })
})
