<template>
  <div>
    <b-nav tabs>
      <b-nav-item> PMS </b-nav-item>
      <b-nav-item active>
        <router-link to="/home"> Home </router-link>
      </b-nav-item>
      <b-nav-item v-if="this.$store.state.isLoggedIn">
        <router-link to="/addPayment"> Payment </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

