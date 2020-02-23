import { createStore } from '@mpxjs/core'
const store = createStore({
  state: {
    foodList: [],
    address: {}
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
    },
    setAddress(state, {address}) {
      state.address = address
    }
  }
})
export default store