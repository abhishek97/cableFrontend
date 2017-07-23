<template>
  <div>
    <b-nav tabs>
      <b-nav-item> PMS </b-nav-item>
      <b-nav-item active>
        <router-link to="/home"> Home </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/addPayment"> Payment </router-link>
      </b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>

