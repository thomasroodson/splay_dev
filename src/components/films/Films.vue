<template>
  <carousel v-bind="settings">
    <slide v-for="film in filmsHome" :key="film.id">
      <div class="col-12 play-film d-flex justify-content-center">
        <img class="img-fluid" :src="film.img">
      </div>
    </slide>
  </carousel>
</template>

<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'FilmsComponent',
  data () {
    return {
      settings: {
        autoplay: true,
        paginationActiveColor: '#F10000',
        perPageCustom: [[576, 2], [768, 3], [992, 5], [1200, 6]]
      }
    }
  },
  computed: {
    ...mapState('components', ['filmsHome'])
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
.VueCarousel-dot:focus {
    outline-color: transparent !important;
  }
// - Films
.films{
  .play-film{
    img {
      width: 180px;
      height:260px;
      overflow: hidden;
      object-fit: contain;
      object-position: center center;
    }
  }
  .VueCarousel-dot-container{
    margin-top:0 !important;
  }
}
</style>
