import { createStore } from 'vuex'

export default createStore({
  state: {
    styledata: null
  },
  mutations: {
    styledata_changed (state, styledata) {
      state.styledata = styledata
    }
  },
  actions: {
  },
  modules: {
  }
})
