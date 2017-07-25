/**
 * Created by abhishek on 25/07/17.
 */
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import API from '../utils/http-api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    password: null,
    jwt: ''
  },
  mutations: {
    setJwt (state, val) {
      state.jwt = val
    },
    logIn (state) {
      state.isLoggedIn = true
    },
    changeUsername (state, val) {
      state.username = val
    },
    changePassword (state, val) {
      state.password = val
    }
  },
  actions: {
    authenticate ({state, commit}) {
      return API.post('/login', {
        username: state.username,
        password: state.password
      }).then(response => {
        const jwt = response.data
        API.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
        commit('setJwt', jwt)
        commit('logIn')
      })
    }
  }
})
