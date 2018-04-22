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
          <small class="text-muted">Filter Results by Vc Number</small>
          </div>
          <div class="loadingContainer text-center">
            <sync-loader :loading="isLoading"></sync-loader>
          </div>
          <PaymentsView :payments=paymentList v-if="isNotLoading"></PaymentsView>
        </div>
      </div>
	</div>
</template>
<script>
import API from '@/utils/http-api.js'
import PaymentsView from '@/components/Payments/PaymentsView.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
  components: {
    PaymentsView,
    SyncLoader
  },
  data () {
    return {
      paymentList: [],
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
    this._loadData()
  },
  methods: {
    changed () {
      this._loadData()
    },
    _loadData () {
      this.isLoading = true
      API.get('payments/daily', {
        params: {
          vc_no: this.vc_no
        }
      })
      .then(response => {
        this.paymentList = response.data
        this.isLoading = false
      })
    }
  }
}
</script>
