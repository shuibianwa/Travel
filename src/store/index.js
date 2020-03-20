import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)
export default new Vuex.Store({
  state: state,
  mutations: {
    //改变数据
    citychanged (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
})
