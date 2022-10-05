<template>
  <div v-if="loading" class="row flex-column mx-3">
    <div class="col-12" v-for="categoria in categorias" :key="categoria.id">
      <ShowContent />
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

<style>

</style>
