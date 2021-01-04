import { createStore } from 'vuex'

export default createStore({
  state: {
    styledata: null,
    data2: null,
    item: null
  },
  mutations: {
    styledata_changed(state, styledata) {
      state.styledata = styledata
    },
    data2_changed(state, data2) {
      state.data2 = data2
    },
    item_changed(state, item) {
      state.item = item
    }
  },
  actions: {
  },
  modules: {
  }
})
