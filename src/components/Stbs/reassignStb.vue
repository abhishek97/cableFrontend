<template>
  <div v-if="stb.id">
    <h1>Confirm Details</h1>
      <div class="card">
        <div class="card-block">
          <div class="row">
            <div class="col-6">
            <table cellpadding="6" border="1">
              <tr>
                <td>Vc No</td>
                <td>{{stb.vc_no}}</td>
              </tr>
              <tr>
                <td>Customer Name</td>
                <td>{{stb.customer.name}}</td>
              </tr>
              <tr>
                <td>Customer Address</td>
                <td>{{stb.customer.address}}</td>
              </tr>
              <tr>
                <td>Network Name</td>
                <td>{{stb.cable_network.name}}</td>
              </tr>
            </table>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="form-group">
                  <input type="checkbox" id="checkbox" v-model="isReassign">
                  <label for="checkbox">Reassign New VC</label>
                </div>
              </div>
              <div class="row" v-if="isReassign">
                <label>New Vc</label>
                <model-list-select :list="newStbList"
                             option-value="id"
                             option-text="vc_no"
                             v-model="selectedNewStb"
                             placeholder="Start typing a VC Number"
                             @searchchange="getAvailableStbs">
                </model-list-select>
              </div>
            </div>
          </div>
          <div class="row top-buffer">
            <div class="col-4">
              <div class="form-group">
                <button class="btn btn-primary" @click="submit">
                  {{buttonText}}
                </button>
              </div>
            </div>
          </div>
          <div class="row top-buffer" v-if="errors.length">
            The following Errors Occured:
            <ul v-for="error in errors" :key="error">
              <li>{{error}}</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import API from '@/utils/http-api.js'
import qs from 'qs'
import { ModelListSelect } from 'vue-search-select'
export default {
  components: {
    ModelListSelect
  },
  data () {
    return {
      isReassign: false,
      newStbList: [],
      selectedNewStb: {},
      stb: {},
      errors: []
    }
  },
  computed: {
    buttonText () {
      return this.isReassign ? 'Re-Assign' : 'Return'
    }
  },
  mounted () {
    this.getData()
    this.getAvailableStbs()
  },
  methods: {
    getData () {
      API.get(`stbs/${this.$route.params.stbId}`).then(response => {
        this.stb = response.data
      })
    },
    async getAvailableStbs (searchText = '') {
      const response = await API.request('stbs', {
        params: {
          filter: {
            customerId: null,
            vc_no: {
              $like: `%${searchText}%`
            }
          }
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      this.newStbList = response.data
    },
    validate () {
      this.errors = []
      if (this.isReassign && !this.selectedNewStb) {
        this.errors.push('No selected Vc to reassign.')
      }
      return !this.errors.length
    },
    async submit () {
      // check if it reassign or return
      if (!this.validate()) {
        return null
      }
      this.errors = []
      if (!this.isReassign) {
        // just return
        try {
          await API.get(`stbs/${this.stb.id}/return`)
          this.$router.push({
            name: 'customersIndex'
          })
        } catch (err) {
          this.errors.push(err)
        }
        return null
      }

      // is re-assign
      try {
        await API.get(`customers/${this.stb.customer.id}/reassign`, {
          params: {
            stbId: this.selectedNewStb.id
          }
        })
        this.$router.push({
          name: 'customersIndex'
        })
      } catch (err) {
        this.errors.push(err)
      }
    }
  }
}
</script>
<style scoped>
  .top-buffer {
    margin-top: 25px;
  }
</style>

