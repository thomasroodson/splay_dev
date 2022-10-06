<template>
<header>
  <nav v-if="!$route.meta.hideNavbar" class="navbar fixed-top bg-transparent px-2" :class="{change_color: scrollPosition > 400}">
    <router-link class="navbar-brand px-2" :to="{name: 'home'}">
      <img src="@/assets/logo/logosaraplay.png">
    </router-link>

    <button class="navbar-toggler">
      <font-awesome-icon class="navbar-toggler-icon" @click="navbarToogle" :icon="['fa', 'bars']"/>
    </button>
    <div class="overlay-menu" @click="navbarToogle"></div>

    <div class="menu-items">
      <ul class="navbar-nav mr-auto text-center mt-5">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Séries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Filmes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Podcasts</a>
        </li>
      </ul>
    </div>

  </nav>
</header>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      scrollPosition: null,
      toogler: false
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },
    navbarToogle () {
      this.toogler = !this.toogler
      console.log(this.toogler)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    .navbar-toggler-icon{
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
  .change_color{
    -webkit-transition: opacity 0.5s 0s ease-in-out;
    -moz-transition: opacity 0.5s 0s ease-in-out;
    -o-transition: opacity 0.5s 0s ease-in-out;
    transition: opacity 0.5s 0s ease-in-out;
    background-color: #161616d0 !important;
  }
  .overlay-menu{
    position: fixed;
    top: 0;
    left:0;
    width: 40vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 9999;
  }
  .menu-items{
    background-color:#ff0000;
    position: fixed;
    top: 0;
    right: 0;
    width: 60vw;
    height: 100vh;
    .nav-link{
      color:#fff;
      font-size: 1.4rem;
      font-weight: 500;
      padding-top:4px;
      padding-bottom:4px;
    }
  }
</style>
