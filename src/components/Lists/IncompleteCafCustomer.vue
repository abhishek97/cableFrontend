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
          <StbView :stbs=stbList v-if="isNotLoading"></StbView>
        </div>
      </div>
  </div>
</template>

<script>
import StbView from '@/components/Stbs/StbView.vue'
import API from '@/utils/http-api.js'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
  components: {
    StbView,
    SyncLoader
  },
  mounted () {
    this.isLoading = true
    API.get('customers/incompleteCaf')
    .then(response => {
      this.stbList = response.data
      this.isLoading = false
    }).catch(err => {
      this.isLoading = false
      this.$store.commit('setError', err.response)
      this.$router.push({
        name: 'error'
      })
    })
  },
  data () {
    return {
      isPristine: true,
      isLoading: false,
      vc_no: '',
      stbList: []
    }
  },
  computed: {
    isNotLoading () {
      return (!this.isLoading)
    }
  },
  methods: {
    changed (e) {
      this.isLoading = true
      this.isPristine = false
      API.get('customers/incompleteCaf', {
        params: {
          filter: {
            vc_no: this.vc_no
          }
        }
      }).then(response => {
        this.stbList = response.data
        this.isLoading = false
      }).catch(err => {
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

<style scoped>
  .loadingContainer {
    margin: 50px auto;
  }
</style>