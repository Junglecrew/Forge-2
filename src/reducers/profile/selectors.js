import { createSelector } from 'reselect'

export const getUser = state => state.profile.user
export const getSocialsList = state =>
  state.profile.user ? state.profile.user.social : []
export const getIsFetching = state => state.profile.isFetching
export const getError = state => state.profile.error

export const getSortedSocials = createSelector(getSocialsList, social => {
  if (!social) return social
  const webSocial = social.findIndex(element => element.label === 'web')
  social.unshift(...social.splice(webSocial, 1))
  return social
})
