<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>VC NO</th>
        <th>Amount</th>
        <th>Added Time</th>
        <th>Comment</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="payment in payments">
        <th scope="row">{{payment.id}}</th>
        <td>{{payment.vc_no}}</td>
        <td>{{payment.amount}}</td>
        <td>{{payment.payment_date | formatDatetime}}</td>
        <td>{{payment.comment}}</td>
        <td>
          <a :href="payment.bill.url" target="_blank" v-if="payment.bill">Download Bill</a>
          <button
            class="btn btn-secondary btn-sm"
            @click="generateBill(payment)"
            v-else
          >
              Generate Billi Clinton
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  import API from '@/utils/http-api.js'
  export default {
    name: 'PaymentList',
    props: {
      payments: {
        type: [Array, String]
      }
    },
    filters: {
      formatDatetime (time) {
        return moment(time).format('MMMM Do YYYY, h:mm:ss a')
      }
    },
    methods: {
      generateBill (payment) {
        API.get(`payments/${payment.id}/bill`).then(response => {
          this.$emit('refreshModel')
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>
