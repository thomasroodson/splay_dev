import services from '@/http'

export const LoadDestaques = ({ dispatch }) => {
  return services.components.destaque()
    .then(res => {
      dispatch('SetLoadDestaque', res.data.data)
    })
}

export const SetLoadDestaque = ({ commit }, payload) => {
  commit('SetLoadDestaque', payload)
}

export const LoadPlans = ({ dispatch }) => {
  return services.components.planos()
    .then(res => {
      dispatch('SetLoadPlans', res.data.data)
    })
}

export const SetLoadPlans = ({ commit }, payload) => {
  commit('SetLoadPlans', payload)
}

export const LoadCultos = ({ dispatch }) => {
  return services.components.cultos()
    .then(res => {
      dispatch('SetLoadCultos', res.data.data)
    })
}

export const SetLoadCultos = ({ commit }, payload) => {
  commit('SetLoadCultos', payload)
}

export const LoadCategorias = ({ dispatch }) => {
  return services.components.categorias()
    .then(res => {
      dispatch('SetLoadCategorias', res.data.data)
    })
}

export const SetLoadCategorias = ({ commit }, payload) => {
  commit('SetLoadCategorias', payload)
}

export const LoadConteudoCategoria = ({ commit }, payload) => {
  return services.components.conteudoCategoria({ id: payload })
    .then(res => {
      console.log(res)
      commit('SetConteudoCategoria', res.data.data)
    })
}
