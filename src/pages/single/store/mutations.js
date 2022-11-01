import * as types from './mutation-types'

export default {
  [types.SET_SINGLEMOVIE] (state, payload) {
    state.movie = payload
  }
}
