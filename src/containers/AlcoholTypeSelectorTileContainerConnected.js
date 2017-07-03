import { connect } from 'react-redux'
import AlcoholTypeSelectorTileContainer from '../components/AlcoholTypeSelectorTileContainer'

const mapStateToProps = (state) => {
  const {
    entities: {
      alcoholTypeOptions: {
        allSlugs,
        bySlug,
      }
    }
  } = state
  return {
    alcoholTypeOptions: allSlugs.map(slug => bySlug[slug]),
  }
}

const AlcoholTypeSelectorTileContainerConnected = connect(
  mapStateToProps,
  null,
)(AlcoholTypeSelectorTileContainer)

export default AlcoholTypeSelectorTileContainerConnected
