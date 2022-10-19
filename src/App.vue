<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
