<template>
  <div v-if="loading">
    {{idCategorie}}
    <img :src="conteudoCategoria[1].imagem.cdn">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ShowContent',
  props: {
    idCategorie: Number
  },
  data () {
    return {
      loading: true
    }
  },
  async created () {
    this.loading = false
    await this.LoadConteudoCategoria(this.idCategorie)
    this.loading = true
  },
  computed: {
    ...mapState('components', ['conteudoCategoria'])
  },
  methods: {
    ...mapActions('components', ['LoadConteudoCategoria'])
  }
}
</script>

<style>

</style>
