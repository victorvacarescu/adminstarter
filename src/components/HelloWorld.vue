<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>      
      <li>
        <router-link tag="li" to="/newapp">
          <a target="_blank">New App</a>
        </router-link>                                    
      </li>
      <li>
        <router-link tag="li" to="/login">
            <a>Login</a>
        </router-link>
      </li>
      <li>
        <router-link tag='li' to='/users'>
          <a target="_blank">Users</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
