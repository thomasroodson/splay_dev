<template>
  <div v-if="loading" class="row flex-column">
    <div class="col-12" v-for="categoria in categorias" :key="categoria.id">
      <div v-if="categoria.id == 32 || categoria.id == 33">
        <h4>{{categoria.descricao}}</h4>
        <ShowContent :idCategorie="categoria.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ShowContent from './ShowContent'

export default {
  data () {
    return {
      loading: true
    }
  },
  async created () {
    this.loading = false
    await this.LoadCategorias()
    this.loading = true
  },
  computed: {
    ...mapState('components', ['categorias'])
  },
  methods: {
    ...mapActions('components', ['LoadCategorias']),
    ...mapActions('components', ['LoadConteudoCategoria'])
  },
  components: {
    ShowContent
  }
}
</script>

<style>

</style>
