<template>
  <div id="app">
    <div class="nav">
      <Nav></Nav>
    </div>
    <!--  :key="$route.fullPath" -->
    <router-view :key="$route.fullPath"></router-view>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  
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
/* html{

width:100%;

overflow-x:hidden;

} */
/* 调试神器 */
/* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
} */
</style>
