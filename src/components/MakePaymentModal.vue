<template>
  <div>
    <b-modal id="makePaymentModal" title="Enter Payment Amount" @ok="submit">
      <ul>
        <li>Name: {{customer.name}} </li>
        <li>VC: {{ popLast(customer.vc_no_trail)}} </li>
        <li>Address: {{customer.address}} </li>
        <li>Network: {{customer.stb.cable_network.name}} </li>
      </ul>
      <form @submit.stop.prevent="submit">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
            <label> Amount: </label>
            <b-form-input type="number" placeholder="Enter Amount" v-model="amount"></b-form-input>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="form-group">
            <label> Months: </label>
            <b-form-input type="number" placeholder="Enter Months (Default 1)" v-model="months"></b-form-input>
            </div>
          </div>
        </div>
        <div class="form-group">
        <label> Remarks : </label>
        <b-form-input type="text" placeholder="Remarks(optional)" v-model="remarks"></b-form-input>
        </div>
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
      },
      remarks: ''
    },
    data () {
      return {
        amount: null,
        months: 1
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
          stbId: this.customer.stb.id,
          months: this.months,
          remarks: this.remarks,
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
      },
      popLast (string = '') {
        return string.split(',').pop()
      }
    }
  }
</script>
