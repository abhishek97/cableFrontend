<template>
  <div>
    <h1>Customer #{{customer.id}}</h1>
    <div class="card" v-if="customer.id">
      <div class="card-block">
        <ul>
          <li>
            Name: {{customer.name}}
          </li>
          <li>
            VC: {{customer.vc_no}}
          </li>
          <li>
            Address: {{customer.address}}
          </li>
          <li>
            Mobile: {{customer.mobile}}
          </li>
          <li>
            Cable Network: {{customer.cable_network}}
          </li>
          <li>
            Arrears: {{customer.arrears}}
          </li>
        </ul>

        <PaymentList :payments="customer.payments" v-on:refreshModel="fetchCustomer" v-on:loading="setLoading"></PaymentList>
      </div>
    </div>
    <div class="loading" v-show="isLoading">
      <sync-loader :loading="isLoading"></sync-loader>
    </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import API from '@/utils/http-api.js'
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
  import PaymentList from '@/components/Customer/PaymentList.vue'
  export default {
    created () {
      this.fetchCustomer()
    },
    components: {
      PaymentList,
      SyncLoader
    },
    data () {
      return {
        isLoading: false,
        customer: {}
      }
    },
    watch: {
      '$route': 'fetchCustomer'
    },
    methods: {
      fetchCustomer () {
        this.isLoading = true
        API.get(`customers/${this.$route.params.customerId}`).then(response => {
          this.customer = response.data
          this.isLoading = false
        }).catch(err => {
          console.error(err)
        })
      },
      setLoading (value) {
        this.isLoading = value
      }
    }
  }
</script>

<style scoped>
  /* Absolute Center Spinner */
  .loading {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 10em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  /* Transparent Overlay */
  .loading:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }


</style>
