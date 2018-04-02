<template>
  <div>
    <b-nav tabs>
      <b-nav-item>  
        <router-link to="/home"> PMS </router-link>
      </b-nav-item>
      <b-nav-item :active="isHomeActive">
        <router-link to="/home"> Home </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isPaymentsActive">
        <router-link to="/payments"> Payments </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn" :active="isCustomerActive">
        <router-link to="/customers"> Customer </router-link>
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
    }
  }
}
</script>

