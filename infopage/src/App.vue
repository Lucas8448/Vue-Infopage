<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
      <nav>
        <img src="../src/assets/logo.svg" class="logo"/>
        <div class="links">
          <RouterLink class="routerlink item-1" to="/">Home</RouterLink>
          <RouterLink class="routerlink item-2" to="/prevent">Prevent</RouterLink>
          <RouterLink class="routerlink item-3" to="/sources">Sources</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView class="routerview" />
</template>

<style scoped>
@font-face {
  font-family: "OsloSans";
  src: url('./assets/OsloSansOffice-Regular.ttf');
}
.navbar {
  background-color: #333;
  overflow: hidden;
  height: 8vh;
  width: 100vw;
}

.logo {
  height: 8vh;
  width: 8vw;
  float: left;
}
.links {
  float: center;
  height: 10vh;
}
.routerlink {
  font-family: "OsloSans";
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 2.5vh 2.5vh;
  text-decoration: none;
  font-size: 2vh;
  height: 8vh;
}
.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 1) ;
  cursor: pointer;
}
.routerview {
  height: 90vh;
  width: 100vw;
  background-color: #f2f2f2;
  color: black;
  text-align: center;
  background-image: url('../src/assets/laptop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
}
</style>
