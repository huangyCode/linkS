import { createStore } from '@mpxjs/core'
const store = createStore({
  state: {
    foodList: []
  },
  mutations: {
    setMember(state, { list }) {
      state.foodList = list
    },
    clearMember(state) {
      state.foodList = []
    },
    delMember(state, { index }) {
      console.log(index)
      state.foodList.splice(index, 1)
    }
  }
})
export default store