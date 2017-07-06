import { connect } from 'react-redux'
import AlcoholComparisonTableSorter from '../components/AlcoholComparisonTableSorter'
import { setSortAttributeKey, setSortOrderKey } from '../redux/actions'

const mapStateToProps = (state) => {
  const {
    entities: {
      sortAttributeOptions: {
        allKeys: sortAttributeAllKeys,
        byKey: sortAttributeByKey,
      },
      sortOrderOptions: {
        allKeys: sortOrderAllKeys,
        byKey: sortOrderByKey,
      },
    },
    sortAttributeKey,
    sortOrderKey,
  } = state
  return {
    sortAttributeOptions: sortAttributeAllKeys.map(key => sortAttributeByKey[key]),
    sortOrderOptions: sortOrderAllKeys.map(key => sortOrderByKey[key]),
    selectedSortAttributeKey: sortAttributeKey,
    selectedSortOrderKey: sortOrderKey,
  }
}

const AlcoholComparisonTableSorterConnected = connect(
  mapStateToProps,
  {
    setSortAttributeKey,
    setSortOrderKey,
  },
)(AlcoholComparisonTableSorter)

export default AlcoholComparisonTableSorterConnected
