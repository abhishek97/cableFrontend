<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Last Active Vc No</td>
          <td>Network</td>
          <td>Address</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer of customers" :key="customer.id">
          <td>
            <button type="button" class="btn btn-link"  @click="transitionToCustomer(customer.id)" >{{customer.id}}</button>
          </td>
          <td>{{customer.name}}</td>
          <td>
            <span>
              <b>Last Active {{popLast (customer.vc_no_trail)}} </b>
              <br>
              <p>
                Trail: {{customer.vc_no_trail}}
              </p>
            </span>
            </td>
          <td><span v-if="customer.stb">{{customer.stb.cable_network.name }}</span></td>
          <td>{{customer.address}}</td>
          <b-btn v-b-modal.makePaymentModal
                 variant="primary"
                 size="sm"
                 style="margin-top: 10px"
                 @click="selectCustomer(customer)">Make Payment</b-btn>
        </tr>
      </tbody>
    </table>

  <MakePaymentModal :customer=selectedCustomer ></MakePaymentModal>
  </div>
</template>

<script type="text/babel">
  import MakePaymentModal from '@/components/MakePaymentModal.vue'
  export default {
    name: 'CustomerView',
    components: {
      MakePaymentModal
    },
    props: {
      customers: {
        type: [Array, Object]
      }
    },
    data () {
      return {
        selectedCustomer: {}
      }
    },
    methods: {
      popLast (string) {
        return string.split(',').pop()
      },
      selectCustomer (customer) {
        this.selectedCustomer = customer
        // this.$root.$emit('show::modal', 'makePaymentModal')
      },
      transitionToCustomer (id) {
        this.$router.push({
          name: 'viewCustomer',
          params: {
            customerId: id
          }
        })
      }
    }
  }
</script>
