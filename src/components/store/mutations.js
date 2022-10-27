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
  async SetConteudoCategoria (state, payload) {
    await state.categorias.forEach((element, i) => {
      if (payload.id === element.id) {
        state.categorias[i].conteudo = payload.content
      }
    })
  }

}
