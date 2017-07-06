import * as constants from '../../../../constants'

const bySlug = (state = {}, action) => {
  switch (action.type) {
    case constants.SELECT_ALCOHOL_TYPE:
      const {
        alcoholType,
        cuid,
      } = action.payload
      const uniqueSlug = `${alcoholType.slug}-${cuid}`
      const alcoholTypeCopy = {
        ...alcoholType,
        slug: uniqueSlug,
      }
      return {
        ...state,
        [uniqueSlug]: alcoholTypeCopy,
      }
    case constants.UPDATE_ALCOHOL_INSTANCE:
      const {
        slug,
        attributeName,
        newValue,
      } = action.payload
      return {
        ...state,
        [slug]: {
          ...state[slug],
          [attributeName]: newValue,
        },
      }
    default:
      return state
  }
}

export default bySlug
