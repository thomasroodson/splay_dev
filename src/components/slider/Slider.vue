<template>
  <carousel v-bind="settings">
    <slide v-for="destaque in destaques" :key="destaque.id">
      <div class="col-12 slide-item" :style="{backgroundImage: `url(${destaque.imagem})`}"></div>
    </slide>
  </carousel>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'SlideComponent',
  data () {
    return {
      settings: {
        autoplay: true,
        perPage: 1,
        paginationActiveColor: '#F10000',
        paginationSize: 13
      }
    }
  },
  created () {
    this.LoadDestaques()
  },
  methods: {
    ...mapActions('components', ['LoadDestaques'])
  },
  computed: {
    ...mapState('components', ['destaques'])
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
.slide .VueCarousel-pagination {
  position: absolute;
  bottom: 25px;
}
.slide-item{
  height: 95vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>>
