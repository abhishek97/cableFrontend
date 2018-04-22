<template>
  <div>
      <div class="card">
        <div class="card-block">

          <div class="form-group">
            <label>Vc Number</label>
          <b-form-input type="text"
                        placeholder="Enter Vc number of the customer"
                        v-model="vc_no"
                        @change="changed"
          ></b-form-input>
          <small class="text-muted">We will convert your name to lowercase instantly</small>
          </div>
          <div class="loadingContainer text-center">
            <sync-loader :loading="isLoading"></sync-loader>
          </div>
          <CustomerView :customers=customerList v-if="isNotLoading"></CustomerView>
        </div>
      </div>
  </div>
</template>

<script>
import CustomerView from '@/components/CustomerView.vue'
import API from '@/utils/http-api.js'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
  components: {
    CustomerView,
    SyncLoader
  },
  data () {
    return {
      customerList: [],
      vc_no: '',
      isLoading: false
    }
  },
  computed: {
    isNotLoading () {
      return !this.isLoading
    }
  },
  mounted () {
    this.isLoading = true
    API.get('customers/collectPayments')
    .then(response => {
      this.customerList = response.data
      this.isLoading = false
    })
    .catch(err => {
      this.isLoading = false
      this.$store.commit('setError', err.response)
      this.$router.push({
        name: 'error'
      })
    })
  },
  methods: {
    changed () {
      this.isLoading = true
      API.get('customers/collectPayments')
      .then(response => {
        this.customerList = response.data
        this.isLoading = false
      })
      .catch(err => {
        this.isLoading = false
        this.$store.commit('setError', err.response)
        this.$router.push({
          name: 'error'
        })
      })
    }
  }
}
</script>
