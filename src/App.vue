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

export default {
  name: 'app',
  components: {
    Nav
  },
  mounted () {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>
