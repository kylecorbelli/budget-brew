import { connect } from 'react-redux'
import AlcoholComparisonTable from '../components/AlcoholComparisonTable'
import { sortAlcoholSelections } from '../services/sorting'

const mapStateToProps = (state) => {
  const {
    entities: {
      selectedAlcoholTypes: {
        allSlugs,
        bySlug,
      },
    },
    sortAttributeKey: selectedSortAttributeKey,
    sortOrderKey: selectedSortOrderKey,
  } = state
  const unorderedSelectedAlcoholTypes = allSlugs.map(slug => bySlug[slug])
  return {
    selectedAlcoholTypes: sortAlcoholSelections(unorderedSelectedAlcoholTypes, { key: selectedSortAttributeKey, order: selectedSortOrderKey }),
  }
}

const AlcoholComparisonTableConnected = connect(
  mapStateToProps,
  null,
)(AlcoholComparisonTable)

export default AlcoholComparisonTableConnected
