<template>
<header>
  <nav v-if="!$route.meta.hideNavbar" class="navbar fixed-top bg-transparent px-2" :class="{change_color: scrollPosition > 400}">
    <router-link class="navbar-brand px-2" :to="{name: 'home'}">
      <img src="@/assets/logo/logosaraplay.png">
    </router-link>

    <button v-if="!toggler" class="navbar-toggler" @click="navbarToggle">
      <font-awesome-icon class="navbar-toggler-icon" :icon="['fa', 'bars']"/>
    </button>

    <button v-else class="navbar-toggler close" @click="navbarToggle">
      <font-awesome-icon class="navbar-toggler-icon" :icon="['fa', 'x']"/>
    </button>

    <div class="overlay-menu" @click="navbarToggle" v-if="toggler"></div>

    <div class="menu-items d-flex flex-column pt-2" :class="{'d-none' : !toggler}">

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
      toggler: false
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },
    navbarToggle () {
      this.toggler = !this.toggler
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
  .navbar-toggler:focus{
    box-shadow: none !important;
  }
  .close{
    z-index: 9999;
  }
  .overlay-menu{
    position: fixed;
    top: 0;
    left:0;
    width: 40%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  }
  .menu-items{
    display: none;
    background-color:#181818;
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
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
