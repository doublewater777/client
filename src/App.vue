<template>
  <div id="app">
    <aside>
      <Left></Left>
    </aside>
    <div class="main">
      <header><Nav></Nav></header>
      <main><router-view :key="this.$route.fullpath"></router-view></main>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Nav from "./components/Nav.vue";
import Left from "./components/Left.vue";
export default {
  name: "App",
  components: {
    Nav,
    Left,
  },
};
</script>

<style>
html,body{height:100%;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
  min-height: 100vh;
  display: flex;
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
aside{
  width: 200px;
  background-color: pink;
 
}
.main{
  flex: 1;
  background-color: rgb(249, 205, 173);
}

</style>
