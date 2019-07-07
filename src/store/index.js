import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from '@/modules/user/store'
import task from '@/modules/task/store'

// Vuex Initialization
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    task
  },
  plugins: [createPersistedState()]
})
