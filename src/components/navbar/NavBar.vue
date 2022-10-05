<template>
  <nav v-if="!$route.meta.hideNavbar" class="navbar fixed-top bg-transparent px-2" :class="{change_color: scrollPosition > 500}">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo/logosaraplay.png">
    </a>
    <div class="nav-content flex-grow-1">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>

    </div>
    <div class="right-content">
      <ul class="nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
          <font-awesome-icon :icon="['fa', 'magnifying-glass']"/>
          busca</a></li>
        <li class="nav-item">
          <a href="#" class="nav-link">login</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  a{
    color: #fff;
  }
}
.change_color{
  -webkit-transition: opacity 0.5s 0s ease-in-out;
  -moz-transition: opacity 0.5s 0s ease-in-out;
  -o-transition: opacity 0.5s 0s ease-in-out;
  transition: opacity 0.5s 0s ease-in-out;
  background-color: #161616d0 !important;
}
</style>
