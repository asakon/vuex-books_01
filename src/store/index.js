import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [
      {
        isbn: 'aaa-a-aaaa-aaaa-a',
        title: 'ねこの散歩みち',
        price: '2300'
      },
      {
        isbn: 'bbb-b-bbbb-bbbb-b',
        title: '犬が３匹出会ったら',
        price: '2100'
      },
      {
        isbn: 'ccc-c-cccc-cccc-c',
        title: 'まいご文鳥騒動記',
        price: '3000'
      },
    ]
  },
  getters: {
    booksCount(state) {
      return state.books.length
    },
    getBookByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
