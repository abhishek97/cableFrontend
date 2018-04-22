/**
 * Created by abhishek on 25/07/17.
 */
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
import API from '../utils/http-api'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersist({
    namespace: 'cableApiAlphanetbroadbandCom',
    initialState: {
      isLoggedIn: false,
      username: null,
      password: null,
      jwt: ''
    },
    // ONE_DAY
    expires: (24 * 60 * 60 * 1e3)
  })],
  state: {
    isLoggedIn: false,
    username: null,
    password: null,
    jwt: ''
  },
  mutations: {
    setJwt (state, val) {
      API.defaults.headers.common['Authorization'] = `Bearer ${val}`
      state.jwt = val
      state.password = null
    },
    clearJwt (state, val) {
      delete API.defaults.headers.common['Authorization']
      state.jwt = null
      state.isLoggedIn = false
      state.username = null
    },
    logIn (state) {
      state.isLoggedIn = true
    },
    changeUsername (state, val) {
      state.username = val
    },
    changePassword (state, val) {
      state.password = val
    },
    setError (state, val) {
      state.error = val
    }
  },
  actions: {
    authenticate ({state, commit}) {
      return API.post('/login', {
        username: state.username,
        password: state.password
      }).then(response => {
        const jwt = response.data
        commit('setJwt', jwt)
        commit('logIn')
      })
    }
  }
})
