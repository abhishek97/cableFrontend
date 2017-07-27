<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Nav from './components/Nav.vue'
import API from './utils/http-api'

export default {
  name: 'app',
  components: {
    Nav
  },
  created () {
    API.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.jwt}`
  },
  mounted () {
    if (!this.$store.state.isLoggedIn) {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>
