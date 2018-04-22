<template>
  <b-tabs>
    <b-tab title="Incomplete CAF" active @click="changeActiveTab('incompleteCaf')">
      <br>Incomplete 
      <br> <IncompleteCafCustomer></IncompleteCafCustomer>
    </b-tab>
    <b-tab title="To be expired (Collect Payment)" @click="changeActiveTab('collectPayment')">
      <br>To be expired (Collect Payment)
      <br> <CollectPaymentCustomer></CollectPaymentCustomer>
    </b-tab>
    <b-tab title="Daily Collection" @click="changeActiveTab('dailyCollection')">
      <br>Today's Collection
      <br> <DailyCollection></DailyCollection>
    </b-tab>
  </b-tabs>
</template>
<script>
import IncompleteCafCustomer from './IncompleteCafCustomer.vue'
import CollectPaymentCustomer from './CollectPaymentCustomer.vue'
import DailyCollection from './DailyCollection.vue'

export default {
  components: {
    IncompleteCafCustomer,
    CollectPaymentCustomer,
    DailyCollection
  },
  data () {
    return {
      paymentCustomerList: [],
      incompleteCafCustomerList: [],
      activeTab: 'incompleteCaf'
    }
  },
  methods: {
    changeActiveTab (tabname) {
      this.activeTab = tabname
    }
  }
}
</script>
