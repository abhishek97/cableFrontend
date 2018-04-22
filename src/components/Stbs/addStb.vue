<template>
  <div class="container">
        <div class="card">
            <div class="card-block">
                <div class="form-group">
                    <label>Vc Number</label>
                    <b-form-input type="text"
                                placeholder="Enter Vc of new stb"
                                v-model="stb.vc_no"
                    ></b-form-input>
                    <small class="text-muted">*Required</small>
                </div>
                <div class="form-group">
                  <label> Agent </label>
                  <model-list-select :list="agentList"
                             option-value="id"
                             option-text="name"
                             v-model="stb.agent"
                             placeholder="Start Typing an Agent name"
                             @searchchange="searchAgent">
                    </model-list-select>
                </div>
                <div class="form-group">
                  <label> Cable Network </label>
                  <model-list-select :list="cableNetworkList"
                             option-value="id"
                             option-text="name"
                             v-model="stb.cable_network"
                             placeholder="Start Typing a Cable Network"
                             @searchchange="searchCableNetworks">
                    </model-list-select>
                </div>
                <div class="form-group">
                    <label>Vc Number</label>
                    <b-form-textarea type="text"
                                placeholder="Remarks (optional)"
                                rows="3"
                                v-model="stb.remarks"
                    ></b-form-textarea>
                    <small class="text-muted">Optional</small>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" @click="submit()">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
import API from '@/utils/http-api.js'
import qs from 'qs'
import { ModelListSelect } from 'vue-search-select'
export default {
  components: {
    ModelListSelect
  },
  data () {
    return {
      stb: {
        remarks: '',
        agent: {},
        cable_network: {}
      },
      agentList: [],
      cableNetworkList: []
    }
  },
  methods: {
    submit () {
      API.post('/stbs', this.stb).then(response => {
        this.$router.push({
          name: 'stbsIndex'
        })
      }).catch(err => {
        this.$store.commit('setError', err.response)
        this.$router.push({
          name: 'error'
        })
      })
    },
    async searchAgent (searchString) {
      const results = await API.get('/agents', {
        params: {
          filter: {
            name: {
              $like: `%${searchString}%`
            }
          }
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      this.agentList = results.data
    },
    async searchCableNetworks (searchString) {
      const results = await API.get('/cableNetworks', {
        params: {
          filter: {
            name: {
              $like: `%${searchString}%`
            }
          }
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      })
      this.cableNetworkList = results.data
    }
  }
}
</script>

