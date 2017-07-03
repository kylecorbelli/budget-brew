import { connect } from 'react-redux'
import {
  selectAlcoholType,
} from '../redux/actions'
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
  { selectAlcoholType },
)(AlcoholTypeSelectorTileContainer)

export default AlcoholTypeSelectorTileContainerConnected
