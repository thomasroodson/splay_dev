<template>
  <div class="row text-center" v-if="loading">
    <h1 class="h1-related">Você também pode gostar</h1>
    <div class="col-md-3" v-for="(related, index) in movie.related" :key="related.id">
      <a :href="`/watch/${related.id}/${related.url}`" v-if="index < 4">
        <img :src="related.imagem.cdn" class="img-fluid pb-3 related">
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'RelatedComponent',
  data () {
    return {
      loading: null
    }
  },
  created () {
    this.loading = true
  },
  computed: {
    ...mapState('single', ['movie'])
  }
}
</script>

<style lang="scss" scoped>
  img.related{
    width: 100%;
    max-width: 300px;
    max-height: 180px;
    object-fit: cover;
    object-position: center center;
  }
</style>>
