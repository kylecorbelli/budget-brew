import { connect } from 'react-redux'
import MobileTableCellAttribute from '../components/MobileTableCellAttribute'
import {
  setAlcoholAttributeBeingEdited,
  setAlcoholSlugBeingEdited,
} from '../redux/actions'

const MobileTableCellAttributeConnected = connect(
  null,
  {
    setAlcoholAttributeBeingEdited,
    setAlcoholSlugBeingEdited,
  },
)(MobileTableCellAttribute)

export default MobileTableCellAttributeConnected
