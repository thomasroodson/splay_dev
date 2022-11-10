<template>
  <div v-if="loading" class="row flex-column mb-3">
    <div class="col-12" v-for="( categoria, index ) in categorias" :key="categoria.id">
      <div class="content">
        <h4 class="mt-3">{{categoria.descricao}}</h4>
        <ShowContent :idComp="categoria.id" :iCateg="index" />
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
    ...mapActions('components', ['LoadCategorias'])
  },
  components: {
    ShowContent
  }
}
</script>

<style lang="scss" scoped>
  .col-12 {
    h4 {
      font-size: 1.5rem;
      &:first-child {
        margin-top: 0;
      }
    }
    &:first-child {
        margin-top: -130px;
      }
  }
</style>
