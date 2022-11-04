<template>
  <carousel class="mt-3" v-if="loading" v-bind="settings">
    <slide v-for="({ imagem, id, url}, index ) in categorias[iCateg].conteudo" :key="index" >
      <a :href="`/watch/${id}/${url}`">
        <img class="img-fluid px-1" :src="`https://img.saraplay.com.br/380x222/${imagem.url}.jpg`">
      </a>
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
        perPageCustom: [[576, 2], [768, 3], [992, 4], [1200, 5], [1440, 6], [1680, 7]]
      },
      loading: true
    }
  },
  props: {
    idComp: Number,
    iCateg: Number
  },
  async created () {
    this.loading = false
    await this.LoadConteudoCategoria(this.idComp)
    this.loading = true
  },
  methods: {
    ...mapActions('components', ['LoadConteudoCategoria']),
    ...mapActions('single', ['LoadSingleMovie'])
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

<style lang="scss" scoped>
  img {
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    -webkit-transition: transform 100ms ease-in;
    -moz-transition: transform 100ms ease-in;
    -o-transition: transform 100ms ease-in;
    transition: transform 100ms ease-in;
    &:hover {
      z-index: 999;
      transform: scale(1.2);
    }
  }
</style>
