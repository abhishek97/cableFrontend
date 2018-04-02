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
                    <b-form-input type="text"
                                placeholder="Enter Vc number of the customer"
                                v-model="customer.vc_no"
                    ></b-form-input>
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
                    <label>Cable Network</label>
                    <b-form-input type="text"
                                placeholder="Enter Cable Network name of the customer"
                                v-model="customer.cable_network"
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
import API from '@/utils/http-api.js'
export default {
  props: {
    customer: {
      type: Object
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
    }
  }
}
</script>
