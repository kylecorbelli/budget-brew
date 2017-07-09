import { connect } from 'react-redux'
import AlcoholInstanceEditingModal from '../components/AlcoholInstanceEditingModal'
import {
  hideAlcoholInstanceEditingModal,
  showAlcoholInstanceEditingModal,
  updateAlcoholInstance,
} from '../redux/actions'

const mapStateToProps = (state) => {
  const {
    alcoholInstanceEditing: {
      attributeBeingEdited,
      isEditingModalShown,
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
    isEditingModalShown,
    slugBeingEdited,
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
    hideAlcoholInstanceEditingModal,
    showAlcoholInstanceEditingModal,
    updateAlcoholInstance,
  },
)(AlcoholInstanceEditingModal)

export default AlcoholInstanceEditingModalConnected
