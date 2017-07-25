<template>
  <div class="container text-center">
    <h3>Login</h3>
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" placeholder="Enter username" @change="changeUsername" >
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Enter password" @change="changePassword">
    </div>
    <button class="btn btn-outline-primary" @click="logIn" >Login</button>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Login',
    methods: {
      changeUsername (e) {
        this.$store.commit('changeUsername', e.target.value)
      },
      changePassword (e) {
        this.$store.commit('changePassword', e.target.value)
      },
      logIn () {
        this.$store.dispatch('authenticate').then(() => {
          console.log('then')
          if (this.$store.state.isLoggedIn) {
            this.$router.push('home')
          }
        }).catch(err => {
          console.error(err)
          alert('Wrong Username and password!')
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 50%
  }
</style>


