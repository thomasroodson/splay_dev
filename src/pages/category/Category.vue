<template>
  <div class="home">
      <!--Banner Topo-->>
      <section class="main-content mt-5">
        <div class="container-fluid">
        </div>
      </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
