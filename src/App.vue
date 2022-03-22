<template>
<Nav />
  <router-view/>
</template>

<script>
import Nav from './components/nav.vue'
import axios from "axios"
export default {
  name: 'App',
  components: { Nav },
  data() {
    return{
      baseUrl: "https://project---312-3.herokuapp.com/",
      products: [],
      categories: []
    }
  },
  methods: {
    async fetchData() {
      await axios.get(this.baseUrl + "category")
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


