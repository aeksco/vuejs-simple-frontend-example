import COLLECTION_MODULE from '@/store/lib/collectionModule'

const NEW_TASK = {
  "title": "",
  "done": false,
  "assignee_id": ""
}

// Task Vuex module definition
export default {
  namespaced: true,
  modules: {
    collection: COLLECTION_MODULE({ NEW_MODEL: NEW_TASK })
  }
}
