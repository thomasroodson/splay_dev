<template>
  <div class="home">

    <div class="main">
      <section class="main-banner">
        <div v-if="!loading" class="banner" :style="{backgroundImage: `url(${destaques[n].imagem})`}"></div>
      </section>
      <section class="main-content mt-5">
        <div class="container-fluid">
          <ContentCategories />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ContentCategories from '@/components/content/ContentCategories'

export default {
  name: 'HomePage',
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
  },
  components: {
    ContentCategories
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
