<template>
  <div>
    <div class="list-wrapper">
      <form v-on:submit.prevent="onclick">
        <label for="isbn">ISBN：</label>
        <input type="text" id="isbn" v-model="isbn"><br>
        <label for="title">タイトル：</label>
        <input type="text" id="title" v-model="title"><br>
        <label for="price">価格：</label>
        <input type="number" id="price" v-model="price"><br>
        <input type="submit" value="登録">
      </form>
      <hr>
      <p>書籍は全部で{{booksCount}}冊あります。</p>
      <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
        <li>{{b.title}} （{{b.price}}円）ISBN：{{b.isbn}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters([ 'booksCount', 'getBooksByPrice' ]),
  data() {
    return {
      isbn: '',
      title: '',
      price: 0
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addBook', {
        book: {
          isbn: this.isbn, title: this.title, price: this.price
        }
      })
    }
  }
}
</script>

<style>
.list-wrapper {
  margin: 0 auto;
  padding: 34px 10px 10px;
  max-width: 800px;
  background-color: #ffe7eb;
}

ul {
  margin :0 auto;
  max-width: 500px;
}

li {
  margin-bottom: 10px;
  margin-left: -20px;
  text-align: left;
}
</style>
