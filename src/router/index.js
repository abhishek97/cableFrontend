import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import PaymentsIndex from '@/components/Payments/Index.vue'
import ViewCustomer from '@/components/Customer/ViewCustomer.vue'
import AddCustomer from '@/components/Customer/AddCustomer.vue'
import CustomerIndex from '@/components/Customer/Index.vue'
import ErrorComponent from '@/components/Error.vue'
import Login from '@/components/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/payments',
      name: 'Payments',
      component: PaymentsIndex
    },
    {
      path: '/customers',
      name: 'customersIndex',
      component: CustomerIndex
    },
    {
      path: '/customers/create',
      name: 'addCustomer',
      component: AddCustomer
    },
    {
      path: '/customers/:customerId',
      name: 'viewCustomer',
      component: ViewCustomer
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorComponent
    }
  ]
})
