<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <ul>
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/about">About</a></li>
        <li><a href="/#/register">Register</a></li>
      </ul>
    </header>
    <router-view/>
    <footer>
      <p>
        &copy; 2018 Anthony Mellem
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    font-family: Arial, Helvetica, sans-serif;
    margin:0;
  }
  header{
    position: fixed;
    top:0;
    width: 100%;
  }
  header ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: darkslategrey;
  }
  header ul li{
    float: left;
  }
  header ul li:hover{
    background-color: black;
    cursor: pointer;
  }
  header ul li a{
    display: block;
    margin: 0;
    text-align: center;
    color:antiquewhite;
    padding: 1em 2em;
    text-decoration: none;
  }
  footer{
    position:relative;
    background-color: darkslategrey;
    color:antiquewhite;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  header ul li:last-child{
    float:right;
  }
  header::after{
    float:none;
  }
  h1{
    font-size: 4em;
    color:coral;
    text-align: center;
    margin-top: 1em;
  }
</style>
