import { createStore } from '@mpxjs/core'
const store = createStore({
  state: {
    memberList: []
  },
  mutations: {
    setMember(state, { list }) {
      state.memberList = list
    },
  }
})
export default store