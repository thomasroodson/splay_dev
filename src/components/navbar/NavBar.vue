<template>
<header v-if="!$route.meta.hideNavbar">
  <nav class="navbar fixed-top bg-transparent px-2" :class="{change_color: scrollPosition > 400}">
    <router-link class="navbar-brand px-2" :to="{name: 'home'}">
      <img src="@/assets/logo/logosaraplay.png">
    </router-link>

    <button v-if="!toggler" class="navbar-toggler d-md-none" @click="navbarToggle">
      <font-awesome-icon class="navbar-toggler-icon" :icon="['fa', 'bars']"/>
    </button>

    <button v-else class="navbar-toggler close d-md-none" @click="navbarToggle">
      <font-awesome-icon class="navbar-toggler-icon" :icon="['fa', 'x']"/>
    </button>

    <div class="menu-items d-md-flex flex-column flex-md-row flex-grow-1 justify-content-between mx-md-3" :class="{'d-none' : !toggler}">
      <ul class="navbar-nav text-center flex-md-row mt-5 mt-md-2">
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
      <ul class="navbar-nav text-center flex-md-row mt-5 mt-md-2">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'search'}">
            <font-awesome-icon :icon="['fa', 'magnifying-glass']"/>
            Busca
          </router-link>
        </li>
        <li v-if="!hasToken" class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </li>
        <li v-else class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Ação</a>
          <a class="dropdown-item" href="#">Outra ação</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Algo mais aqui</a>
        </div>
      </li>
      </ul>
    </div>

    <div class="overlay-menu" @click="navbarToggle" v-if="toggler"></div>

  </nav>
</header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['hasToken'])
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    .navbar-toggler-icon{
      color: #fff;
      font-size: 1.088rem;
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
    .nav-link{
      color:#fff;
      font-size: 1.088rem;
      font-weight: 300;
      padding-left:8px;
      padding-right: 8px;
      &:hover{
        color: #ff0000;
      }
    }
  }
  @media (max-width: 768px){
    .menu-items{
      background-color:#181818;
      position: fixed;
      top: 0;
      right: 0;
      width: 60%;
      height: 100vh;
    }
  }
</style>
