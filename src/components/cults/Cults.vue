<template>
  <carousel v-if="loading" v-bind="settings">
    <slide v-for="index in 5" :key="index">
      <div class="col-12 px-2">
        <img class="img-fluid" :src="cultos[index].imagem.cdn">
      </div>
    </slide>
  </carousel>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'CultsComponent',
  data () {
    return {
      settings: {
        autoplay: true,
        paginationActiveColor: '#F10000',
        perPageCustom: [[576, 2], [768, 3], [992, 4], [1200, 5]]
      },
      loading: true
    }
  },
  async created () {
    this.loading = false
    await this.LoadCultos()
    this.loading = true
  },
  computed: {
    ...mapState('components', ['cultos'])
  },
  methods: {
    ...mapActions('components', ['LoadCultos'])
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
// - Cultos
.cultos{
  .play-culto{
    img{
      width: 250px;
      height: 160px;
      overflow: hidden;
      object-fit: cover;
      object-position: center center;
    }
  }
  .VueCarousel-dot-container{
    margin-top:0 !important;
  }
}
</style>
