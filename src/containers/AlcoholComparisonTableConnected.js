import { connect } from 'react-redux'
import AlcoholComparisonTable from '../components/AlcoholComparisonTable'
import { sortAlcoholSelections } from '../services/sorting'
import { showAlcoholInstanceEditingModal } from '../redux/actions'

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
  { showAlcoholInstanceEditingModal },
)(AlcoholComparisonTable)

export default AlcoholComparisonTableConnected
