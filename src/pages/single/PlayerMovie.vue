<template>
  <section id="single-movie" @mousemove="someMovie">
    <Player />
    <button :class="{ active : mouseActive }" class="fixed" @click="$router.back()">
      <font-awesome-icon :icon="['fa', 'arrow-left']"/>
    </button>
  </section>
</template>

<script>
import Player from '@/components/player/Player'

export default {
  data () {
    return {
      mouseActive: false,
      timeout: 6000
    }
  },
  methods: {
    someMovie () {
      this.mouseActive = true
      setTimeout(() => {
        this.mouseActive = false
      }, this.timeout)
    }
  },
  components: {
    Player
  }
}
</script>

<style lang="scss" scoped>
*{
  overflow: hidden !important;
}
#single-movie{
  position: relative;
  height: 100vh;
  .fixed{
    opacity: 0.5;
    position: absolute;
    top: 20px;
    left: -100px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border:1px solid #fefefe;
    background-color: #fefefe;
    transition: ease-in-out 0.3s;
    &:hover{
      opacity: 1;
    }
  }
  .active{
    left: 10px;
  }
}
</style>
