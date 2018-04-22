<template>
    <div class="container">
        <div class="card">
            <div class="card-block">
                <div class="form-group">
                    <label>Name</label>
                    <b-form-input type="text"
                                placeholder="Enter Name of the customer"
                                v-model="customer.name"
                    ></b-form-input>
                    <small class="text-muted">*Required</small>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <b-form-input type="text"
                                placeholder="Enter Adress of the customer"
                                v-model="customer.address"
                    ></b-form-input>
                    <small class="text-muted">*Required</small>
                </div>
                <div class="form-group">
                    <label>VC No</label>
                    <model-list-select :list="stbList"
                             option-value="id"
                             option-text="vc_no"
                             v-model="customer.stb"
                             placeholder="Enter a VC Number"
                             @searchchange="searchStb">
                    </model-list-select>
                    <small class="text-muted">*Required</small>
                </div>
                <div class="form-group">
                    <label>Mobile No</label>
                    <b-form-input type="text"
                                placeholder="Enter Mobile number of the customer"
                                v-model="customer.mobile"
                    ></b-form-input>
                    <small class="text-muted">*Required</small>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="submit()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
import { ModelListSelect } from 'vue-search-select'
import qs from 'qs'
import API from '@/utils/http-api.js'
export default {
  data () {
    return {
      customer: {
        stb: {}
      },
      stbList: [],
      stbId: null
    }
  },
  methods: {
    submit () {
      API.post('customers', this.customer)
      .then(customer => {
        this.$router.push({
          name: 'customersIndex'
        })
      }).catch(err => {
        this.$store.commit('setError', err.response)
        this.$router.push({
          name: 'error'
        })
      })
    },
    async searchStb (searchText) {
      const response = await API.get('/stbs', {
        params: {
          filter: {
            status: 0,
            vc_no: {
              $like: `%${searchText}%`
            }
          }
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      this.stbList = response.data
    }
  },
  components: {
    ModelListSelect
  }
}
</script>
