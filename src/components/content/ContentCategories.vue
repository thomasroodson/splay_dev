<template>
  <div v-if="loading" class="row flex-column my-3">
    <div class="col-12" v-for="( categoria, index ) in categorias" :key="categoria.id">
      <h4 class="mt-5">{{categoria.descricao}}</h4>
      <ShowContent :idComp="categoria.id" :iCateg="index" />
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
    ...mapActions('components', ['LoadCategorias'])
  },
  components: {
    ShowContent
  }
}
</script>

<style lang="scss" scoped>
  .col-12{
    h2{
      font-size: 1.5rem;
    }
  }
</style>
