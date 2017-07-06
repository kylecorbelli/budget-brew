import { connect } from 'react-redux'
import SortableTableHeader from '../components/SortableTableHeader'
import { setSortAttributeKey, setSortOrderKey } from '../redux/actions'

const mapStateToProps = (state) => {
  const {
    sortAttributeKey: selectedSortAttributeKey,
    sortOrderKey: selectedSortOrderKey,
  } = state
  return {
    selectedSortAttributeKey,
    selectedSortOrderKey,
  }
}

const SortableTableHeaderConnected = connect(
  mapStateToProps,
  {
    setSortAttributeKey,
    setSortOrderKey,
  },
)(SortableTableHeader)

export default SortableTableHeaderConnected
