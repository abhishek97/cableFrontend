<template>
  <div>
    <div class="row">
      <div class="col-md-5">
        <router-link to="/customers/create">
          <button type="button" class="btn btn-primary btn-lg">+ Add </button>
        </router-link>
      </div>
    </div>
    <div class="loadingContainer text-center">
          <sync-loader :loading="isLoading"></sync-loader>
    </div>
    <hr noshade>
  <CustomerView :customers=customers v-if="isNotLoading"></CustomerView>
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
      customers: [],
      isLoading: true
    }
  },
  computed: {
    isNotLoading: () => !this.isLoading
  },
  mounted () {
    API.get('customers').then(response => {
      this.isLoading = false
      this.customers = response.data
    }).catch(err => {
      this.isLoading = false
      this.$store.commit('setError', err.response)
      this.$router.push({
        name: 'error'
      })
    })
  }
}
</script>
