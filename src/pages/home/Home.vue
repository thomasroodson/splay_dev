<template>
  <div class="home">
    <Loading v-if="loading" />
    <section v-else class="main-content">
      <BannerTopo />
      <div class="container-fluid">
        <ContentCategories />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BannerTopo from '@/components/banner/BannerTopo'
import ContentCategories from '@/components/content/ContentCategories'
import Loading from '@/components/loading/Loading'

export default {
  name: 'HomePage',
  data () {
    return {
      n: Math.floor(Math.random() * 5),
      loading: true,
      time: 1000
    }
  },
  async created () {
    await this.LoadDestaques()
    setTimeout(() => {
      this.loading = false
    }, this.time)
  },
  computed: {
    ...mapState('components', ['destaques'])
  },
  methods: {
    ...mapActions('components', ['LoadDestaques'])
  },
  components: {
    Loading,
    ContentCategories,
    BannerTopo
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
  p {
    color: white;
  }
</style>
