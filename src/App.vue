<template>
  <div id="app">
    <!-- <img src="./assets/skyline.jpeg"> -->
    
    <router-view/>    
  </div>
</template>

<script>
//de unde randeaza router-view. Nu e importat nimic. Pagina e identica cu StartPage
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
