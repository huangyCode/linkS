import { createStore } from '@mpxjs/core'
const store = createStore({
  state: {
    foodList: {},
    address: {},
    shopName: ''
  },
  mutations: {
    setShopName(state, {name}) {
      state.shopName = name
    },
    setMember(state, { list }) {
      state.foodList = {...list}
    },
    clearMember(state, id) {
      state.foodList[id] = []
      state.foodList = {...state.foodList}
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