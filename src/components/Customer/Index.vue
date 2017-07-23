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

        <PaymentList :payments="customer.payments" v-on:refreshModel="fetchCustomer"></PaymentList>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import API from '@/utils/http-api.js'
  import PaymentList from '@/components/Customer/PaymentList.vue'
  export default {
    created () {
      this.fetchCustomer()
    },
    components: {
      PaymentList
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
      }
    }
  }
</script>
