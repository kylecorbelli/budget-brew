import { connect } from 'react-redux'

import AlcoholComparisonTable from '../components/AlcoholComparisonTable'

const mapStateToProps = (state) => {
  const {
    entities: {
      selectedAlcoholTypes: {
        allSlugs,
        bySlug,
      },
    },
  } = state
  return {
    selectedAlcoholTypes: allSlugs.map(slug => bySlug[slug]),
  }
}

const AlcoholComparisonTableConnected = connect(
  mapStateToProps,
  null,
)(AlcoholComparisonTable)

export default AlcoholComparisonTableConnected
