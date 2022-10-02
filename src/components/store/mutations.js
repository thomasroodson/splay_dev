export default {
  SetLoadDestaque (state, payload) {
    state.destaques = payload
  },
  SetLoadPlans (state, payload) {
    state.planos = payload
  },
  SetLoadCultos (state, paylaod) {
    state.cultos = paylaod
  },
  SetLoadCategorias (state, payload) {
    state.categorias = payload
  },
  SetConteudoCategoria (state, payload) {
    console.log(payload)
    state.categorias[payload[0]].conteudo = payload
  }

}
