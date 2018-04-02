<template>
  <div>
    <b-modal id="makePaymentModal" title="Enter Payment Amount" @ok="submit">
      <ul>
        <li>Name: {{customer.name}} </li>
        <li>VC: {{customer.vc_no}} </li>
        <li>Address: {{customer.address}} </li>
        <li>Network: {{customer.cable_network}} </li>
      </ul>
      <form @submit.stop.prevent="submit">
        <b-form-input type="number" placeholder="Enter Amount" v-model="amount"></b-form-input>
      </form>

    </b-modal>
  </div>
</template>

<script type="text/babel">
  import API from '@/utils/http-api.js'
  export default {
    name: 'makePaymentModal',
    props: {
      customer: {
        type: Object
      }
    },
    data () {
      return {
        amount: 0
      }
    },
    methods: {
      submit (e) {
        if (this.amount <= 0) {
          alert('Please Enter A Valid Amount')
          return e.cancel()
        }

        API.post('payments', {
          customerId: this.customer.id,
          vc_no: this.customer.vc_no,
          amount: this.amount
        }).then(response => {
          const payment = response.data
          alert('Payment Successful Txn ID: 2018' + payment.id)
          this.$router.push('/addPayment')
        }).catch(err => {
          this.$store.commit('setError', err.response)
          this.$router.push({
            name: 'error'
          })
        })
        console.log(this.customer, 'Amt', this.amount)
      }
    }
  }
</script>
