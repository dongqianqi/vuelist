<template>
  <div id="app">
    <img src="./assets/logo.png">

 <router-link to="/" exact>首页</router-link>
    <router-link to="/detail" active-class="nav">详情页</router-link>
    <router-link to="/first">hello页</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
