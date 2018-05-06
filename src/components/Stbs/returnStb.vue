<template>
  <div class="container">
    <div class="card">
      <div class="card-block">
        <div class="row">
          <div class="col-8 offset-1">
            <b-form-input type="text"
              placeholder="Enter Vc of new stb"
              v-model="stb.vc_no"
            >
            </b-form-input>
          </div>
          <div class="col-3">
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div> 
    <div class="card" style="margin-top:25px">
      <div class="card-block">
        <StbView :stbs=results>
          <template v-for="stb in results" :slot=stb.id>
            <router-link :to=link(stb.id) :key=stb.id>
              <button class="btn btn-primary">
                Confirm Return
              </button>
            </router-link>
          </template>
        </StbView>
      </div>
    </div> 
  </div>
</template>
<script>
import StbView from './StbView'
import API from '@/utils/http-api.js'
import qs from 'qs'
export default {
  components: {
    StbView
  },
  data () {
    return {
      stb: {},
      results: []
    }
  },
  mounted () {
    this._getData()
  },
  methods: {
    _getData (searchText = '') {
      API.get('/stbs', {
        params: {
          filter: {
            vc_no: {
              $like: `%${searchText}%`
            }
          }
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      }).then(response => {
        this.results = response.data
      })
    },
    link (a) {
      return '/stbs/return/' + a
    }
  }
}
</script>
