import services from '@/http'
import * as types from './mutation-types'

export const LoadSingleMovie = ({ dispatch }, payload) => {
  return services.single.loadMovie({ id: payload }).then(res => {
    dispatch('ActionSetSingleMovie', res.data)
  })
}

export const ActionSetSingleMovie = ({ commit }, payload) => {
  commit(types.SET_SINGLEMOVIE, payload)
}