<template>
  <carousel v-if="loading" v-bind="settings">
    <slide v-for="index in 10" :key="index">
      <div class="col-12 px-2">
        <img class="img-fluid" src="https://www.themoviedb.org/t/p/original/zEkgjxI57Or8YtdqM32WsUBmf5w.jpg">
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CultsComponent',
  data () {
    return {
      settings: {
        autoplay: false,
        paginationActiveColor: '#F10000',
        perPageCustom: [[576, 2], [768, 3], [992, 4], [1200, 5]]
      },
      loading: true
    }
  },
  props: {
    idComp: Number
  },
  mounted () {
    this.LoadConteudoCategoria(this.idComp)
  },
  methods: {
    ...mapActions('components', ['LoadConteudoCategoria'])
  },
  computed: {
    ...mapState('components', ['categorias'])
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
