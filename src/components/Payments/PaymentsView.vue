<template>
  <div>
      <table class="table table-striped">
          <thead>
              <tr>
                  <td>#</td>
                  <td>Vc No</td>
                  <td>Amount</td>
                  <td>Months</td>
                  <td>Customer ID</td>
                  <td>Added By</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(payment, index) in payments" :key="payment.id">
                  <td>{{index+1}}</td>
                  <td>{{payment.stb.vc_no}}</td>
                  <td>{{payment.amount}}</td>
                  <td>{{payment.months}}</td>
                  <td class="pointer" @click="transitionToCustomer(payment.customer.id)">
                    <a href="#" style="width:10px">
                      {{payment.customer.id}}
                    </a>
                  </td>
                  <td>{{payment.createdBy.username}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  props: {
    payments: [Array, Object]
  },
  methods: {
    transitionToCustomer (customerId) {
      this.$router.push('/customers/' + customerId)
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

