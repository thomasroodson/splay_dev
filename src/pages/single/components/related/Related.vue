<template>
  <div class="row text-center">
    <h1 class="h1-related">Você também pode gostar</h1>
    <div class="col-md-3" v-for="related in 4" :key="related.id">
      <!-- <router-link to="/">
        <img :src="movie.imagem.cdn" class="img-fluid pb-3">
      </router-link> -->
      {{ related }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'RelatedComponent',
  async created () {
    await this.LoadRelatedContent(this.movie.id)
  },
  computed: {
    ...mapState('single', ['movie'])
  },
  methods: {
    ...mapActions('single', ['LoadRelatedContent'])
  }
}
</script>

<style lang="scss" scoped>

</style>>
