<template>
  <div id="app">
    <p>書籍は全部で{{ booksCount }}冊あります。</p>
    <div class="list-wrapper">
      <ul v-for="b of getBookByPrice(4000)" v-bind:key="b.isbn">
        <li>『{{ b.title }}』 {{ b.price }}円（税別） (ISBN: {{ b.isbn }})</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters([ 'booksCount', 'getBookByPrice' ])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-wrapper {
  margin: 0 auto;
  padding: 34px 0 10px;
  width: 800px;
  background-color: #ffe7eb;
}

ul {
  margin :0 auto;
  width: 500px;
}

li {
  margin-bottom: 10px;
  margin-left: -20px;
  text-align: left;
}
</style>
