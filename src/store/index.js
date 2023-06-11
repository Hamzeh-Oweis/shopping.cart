import i18n from '@/i18n'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'en',
    cart: {
      products: []
    }
  },
  getters: {
    lang (state) {
      return state.locale
    },
    cartProducts (state) {
      return state.cart.prodcuts
    },
  },
  mutations: {
    changeLang(state, locale) {
      state.locale = locale
      i18n.locale = locale

      if (locale == 'ar') {
        document.querySelector('html').classList.add('is-rtl')
      } else {
        document.querySelector('html').classList.remove('is-rtl')
      }
    },
    addProduct(state,  product ) {
      state.cart.products.push(product)
    },
    removeProduct(state, product) {
      state.cart.products = state.cart.products.filter((prd) => prd.id !== product.id);
    }
  },
  actions: {
  },
  modules: {
  }
})
