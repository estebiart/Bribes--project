import { createStore } from 'vuex'
import { formatter } from '@/composables/helpers/formatter'


const { currentDay } = formatter()

let persistData = JSON.parse(localStorage.getItem('cartStorage'))

export default createStore({
  state: {
    cartItems: persistData?.cartItems || [],
    cartList: persistData?.cartList || [],
    orderId: persistData?.orderId || 0,
    purchaseQuery: persistData?.purchaseQuery || [],
    cartQuantity: persistData?.cartQuantity || 0,
    cartTotal: persistData?.cartTotal || 0,
    isLoggedIn: false || JSON.parse(localStorage.getItem('loggedIn')),
    userData: {} || JSON.parse(localStorage.getItem('userInfo')),
    userId: null || JSON.parse(localStorage.getItem('userId'))
  },
  mutations: {
    USERDATA(state, payload) {
      state.userData = payload;
      state.userId = payload.id;
    },
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    addorderData(state, data) {
      state.orderId = data.id;
      let updatePurchase = state.purchaseQuery.map(item => ({ ...item, order_id: data.id }))
      state.purchaseQuery = updatePurchase
      localStorage.cartStorage = JSON.stringify(state)
    },

    pushProductItem(state, product) {
      // state.cartItems=[];
      if (state.cartItems.length === 0) {
        product.map(function (item) {
          state.cartItems = [...state.cartItems, { ...item, quantity: 0 }]
        })
      }
    },

    pushProductToCart(state, product) {
      state.cartList = [...state.cartList, { ...product, quantity: 1 }]
      state.purchaseQuery = [
        ...state.purchaseQuery,
        {
          order_id: state.orderId,
          product_id: product.id,
          quantity: 1,
          date:currentDay,
        },
      ]

      const cartProduct = state.cartItems.find((item) => item.id === product.id)
      cartProduct.quantity++
      localStorage.cartStorage = JSON.stringify(state)
    },

    incrementItemQuantity(state, { id }) {
      const cartProduct = state.cartItems.find((item) => item.id === id)
      const cartItem = state.cartList.find((item) => item.id === id)
      const queryItem = state.purchaseQuery.find(
        (item) => item.product_id === id,
      )
      //4to icrementamos
      cartProduct.quantity++
      cartItem.quantity++
      queryItem.quantity++
      localStorage.cartStorage = JSON.stringify(state)

    },

    decrementItemQuantity(state, { id }) {
      const cartProduct = state.cartItems.find((item) => item.id === id)
      const cartItem = state.cartList.find((item) => item.id === id)
      const queryItem = state.purchaseQuery.find(
        (item) => item.product_id === id,
      )
      cartProduct.quantity--
      cartItem.quantity--
      queryItem.quantity--
      localStorage.cartStorage = JSON.stringify(state)
    },
    deleteItem(state, { id }) {
      //first decrement
      const cartItemdecrement = state.cartList.find((item) => item.id === id)
      cartItemdecrement.quantity--

      const cartProduct = state.cartItems.find((item) => item.id === id)
      cartProduct.quantity--

      const queryProduct = state.purchaseQuery.find(
        (item) => item.product_id === id,
      )
      queryProduct.quantity--

      //then delete it from array
      const cartItem = state.cartList.findIndex((item) => item.id === id)
      state.cartList.splice(cartItem, 1)

      const queryItem = state.purchaseQuery.findIndex(
        (item) => item.product_id === id,
      )
      state.purchaseQuery.splice(queryItem, 1)
      localStorage.cartStorage = JSON.stringify(state)

    },
    cartCounter(state) {
      const counterCart = state.cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity
      }, 0)
      state.cartQuantity = counterCart
      localStorage.cartStorage = JSON.stringify(state)

    },
    cartTotal(state) {
      const counterCart = state.cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.price
      }, 0)
      state.cartTotal = counterCart
      localStorage.cartStorage = JSON.stringify(state)
    },
    clearCart(state) {
      state.cartItems.map(function (item) {
        item.quantity = 0
      })
      state.cartList = []
      state.purchaseQuery = []
      state.cartQuantity = 0
      state.cartTotal = 0
      localStorage.cartStorage = JSON.stringify(state)
    },
  },
  actions: {
    addorderData({ commit }, data) {
      commit('addorderData', data)
    },
    addItemtoStore({ commit }, product) {
      commit('pushProductItem', product)
    },
    addProductToCart({ state, commit }, product) {
      const cartItem = state.cartList.find((item) => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('cartCounter', state.cartList)
      commit('cartTotal', state.cartList)
    },
    subtractProductToCart({ state, commit }, product) {
      const cartItem = state.cartList.find((item) => item.id === product.id)
      commit('decrementItemQuantity', cartItem)
      commit('cartCounter', state.cartList)
      commit('cartTotal', state.cartList)
    },
    deleteProductToCart({ state, commit }, product) {
      const cartItem = state.cartList.find((item) => item.id === product.id)
      commit('deleteItem', cartItem)
      commit('cartCounter', state.cartList)
      commit('cartTotal', state.cartList)
    },
    clearProductCart({ commit }) {
      commit('clearCart')
    },
  },
  modules: {},
})
