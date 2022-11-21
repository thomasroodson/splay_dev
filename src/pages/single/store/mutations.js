import * as types from './mutation-types'

export default {
  [types.SET_SINGLEMOVIE] (state, payload) {
    state.movie = payload
  },
  [types.SET_RELATEDCONTENT] (state, payload) {
    state.movie.related = payload
  }
}
