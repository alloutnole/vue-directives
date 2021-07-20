<template>
  <div id="app" class="container">
    <nav-bar />
    <h2 class="title">Directives</h2>
    <collapse />
    <directives />    
  </div>
</template>

<script>
import NavBar from './components/layout/navbar.vue'
import Directives from './components/Directives.vue'
import Collapse from './components/Collapse.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Directives,
    Collapse,
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
  margin-top: 40px;
}
</style>
