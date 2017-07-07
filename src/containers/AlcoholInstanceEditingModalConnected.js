import { connect } from 'react-redux'
import AlcoholInstanceEditingModal from '../components/AlcoholInstanceEditingModal'
import {
  setAlcoholAttributeBeingEdited,
  setAlcoholSlugBeingEdited,
  updateAlcoholInstance,
} from '../redux/actions'

const mapStateToProps = (state) => {
  const {
    alcoholInstanceEditing: {
      attributeBeingEdited,
      slugBeingEdited,
    },
    entities: {
      alcoholAttributes: {
        byKey: alcoholAttributesByKey,
      },
      selectedAlcoholTypes: {
        bySlug: selectedAlcoholTypesBySlug,
      },
    },
  } = state
  const objectToReturn = {
    attributeBeingEdited,
    slugBeingEdited,
  }
  if (alcoholAttributesByKey[attributeBeingEdited]) {
  }
  if (attributeBeingEdited && slugBeingEdited) {
    objectToReturn.attributeName = alcoholAttributesByKey[attributeBeingEdited].name
    objectToReturn.alcoholInstance = selectedAlcoholTypesBySlug[slugBeingEdited]
  }
  return objectToReturn
}

const AlcoholInstanceEditingModalConnected = connect(
  mapStateToProps,
  {
    setAlcoholAttributeBeingEdited,
    setAlcoholSlugBeingEdited,
    updateAlcoholInstance,
  },
)(AlcoholInstanceEditingModal)

export default AlcoholInstanceEditingModalConnected
