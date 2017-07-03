import * as constants from '../../../../constants'

const allSlugs = (state = [], action) => {
  switch (action.type) {
    case constants.SELECT_ALCOHOL_TYPE:
      const {
        alcoholType,
        cuid,
      } = action.payload
      const uniqueSlug = `${alcoholType.slug}-${cuid}`
      return [ ...state, uniqueSlug ]
    default:
      return state
  }
}

export default allSlugs
