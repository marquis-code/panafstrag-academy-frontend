import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './modules/app/index'
Vue.use(Vuex)

// eslint-disable-next-line import/no-named-as-default-member
export default () => new Vuex.Store({
  modules: {
    app
  }
})
