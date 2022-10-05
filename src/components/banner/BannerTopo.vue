<template>
  <section class="main-banner">
    <div v-if="!loading" class="banner" :style="{backgroundImage: `url(${destaques[n].imagem})`}"></div>
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
    height: 95vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
