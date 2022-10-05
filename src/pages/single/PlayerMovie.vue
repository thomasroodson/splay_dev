<template>
  <section class="single-movie">
    <div class="container-fluid p-0">
      <div class="row">
        <Player />
        <button class="fixed" @click="$router.back()">
          <font-awesome-icon :icon="['fa', 'arrow-left']"/>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Player from '@/components/player/Player'

export default {
  data () {
    return {
    }
  },
  components: {
    Player
  }
}
</script>

<style lang="scss" scoped>
.single-movie{
  position: relative;
  .fixed{
    opacity: 0.05;
    position: absolute;
    top: 20px;
    left: 10px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border:1px solid #fefefe;
    background-color: #fefefe;
    &:hover{
      opacity: 1;
    }
  }
}
</style>
