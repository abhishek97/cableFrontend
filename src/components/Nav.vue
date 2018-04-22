<template>
  <div>
    <b-nav tabs>
      <b-nav-item>  
        <router-link to="/home"> PMS </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isHomeActive">
        <router-link to="/home"> Home </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isPaymentsActive">
        <router-link to="/payments"> Payments </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isCustomerActive">
        <router-link to="/customers"> Customer </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isStbsActive">
        <router-link to="/stbs"> Stb </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isListsActive">
        <router-link to="/lists"> Lists </router-link>
      </b-nav-item>
      <b-nav-item class="right" v-if="this.$store.state.isLoggedIn">
        <a @click="logout"> Logout </a>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  computed: {
    isHomeActive () {
      return this.$route.name === 'Home'
    },
    isPaymentsActive () {
      return ['Payments'].includes(this.$route.name)
    },
    isCustomerActive () {
      return ['addCustomer', 'customersIndex'].includes(this.$route.name)
    },
    isStbsActive () {
      return ['stbsIndex'].includes(this.$route.name)
    },
    isListsActive () {
      return ['listsIndex'].includes(this.$route.name)
    }
  },
  methods: {
    logout () {
      this.$store.commit('clearJwt')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style scoped>
.right {
    margin-left: 60%;
}
</style>

