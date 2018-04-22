<template>
  <div class="home">
    <h3>Welcome.</h3>
    <p> You are logged In as <strong>{{user.username}}.</strong></p>
    <br>
    <p> System Time: <strong>{{dateTime.toString()}}</strong></p>
  </div>
</template>

<script>
import API from '@/utils/http-api.js'
export default {
  data () {
    return {
      user: {},
      dateTime: new Date()
    }
  },
  mounted () {
    API.get('users/me')
    .then(response => {
      this.user = response.data
    }).catch(err => {
      console.error(err)
      this.$router.push({
        name: 'Login'
      })
    })

    const tick = function () {
      this.dateTime = new Date()
      window.setTimeout(tick, 1000)
    }.bind(this)

    tick()
  }
}
</script>
