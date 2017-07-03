import { connect } from 'react-redux'
import AlcoholTypeSelectorTileContainer from '../components/AlcoholTypeSelectorTileContainer'

const mapStateToProps = (state) => ({
  alcoholTypeOptions: state.entities.alcoholTypeOptions.allSlugs.map(slug => {
    return state.entities.alcoholTypeOptions.bySlug[slug]
  }),
})

const AlcoholTypeSelectorTileContainerConnected = connect(
  mapStateToProps,
  null,
)(AlcoholTypeSelectorTileContainer)

export default AlcoholTypeSelectorTileContainerConnected
