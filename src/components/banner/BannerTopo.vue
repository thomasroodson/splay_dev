<template>
  <section class="main-banner">
    <div v-if="!loading" class="banner" :style="{background: `linear-gradient(0deg, rgba(22,22,22,1) 10%, rgba(22,22,22,0.98) 18%, rgba(22,22,22,0.95) 22%, rgba(22,22,22,0.8) 32%, rgba(22,22,22,0.75) 36%, rgba(22,22,22,0.7) 43%, rgba(22,22,22,0.5) 58%, rgba(22,22,22,0) 100%), url(${destaques[n].imagem}) center center no-repeat`}"></div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BannerTopo',
  data () {
    return {
      n: Math.floor(Math.random() * 5),
      loading: false
    }
  },
  async created () {
    this.loading = true
    await this.LoadDestaques()
    this.loading = false
  },
  computed: {
    ...mapState('components', ['destaques'])
  },
  methods: {
    ...mapActions('components', ['LoadDestaques'])
  }
}
</script>

<style lang="scss" scoped>
  .banner{
    height: 90vh;
    background-size: cover !important;
  }
  @media (max-width: 768px) {
    .banner{
      height: 40vh;
    }
  }
</style>
