import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AddPayment from '@/components/AddPayment.vue'
import Customer from '@/components/Customer/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/addPayment',
      name: 'AddPayment',
      component: AddPayment
    },
    {
      path: '/customer/:customerId',
      name: 'customer',
      component: Customer
    }
  ]
})
