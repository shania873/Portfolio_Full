<template>
  <div id="app">
    <div id="page" class="en">
      <div id="nav_bar">
        <a class="logo" rel="index" href="https://jacekjeznach.com">
          <img src="../src/assets/img/logoCaro.svg" alt="logo" />
        </a>
        <nav id="navbar254">
          <router-link to="/" class="home-link">
            <i class="fas fa-home"></i>
            <!-- <img src="../src/assets/img/home.svg" alt="home" class="icon-hom" /> -->
          </router-link>
          <router-link to="/about" class>
            <i class="fas fa-user"></i>
            <!-- <img src="../src/assets/img/about.svg" alt="about" class="icon-prof" /> -->
          </router-link>
          <router-link to="/portfolio" class>
            <i class="far fa-eye"></i>
          </router-link>
          <router-link to="/contact" class>
            <i class="far fa-address-book"></i>
          </router-link>
        </nav>
        <ul>
          <li>
            <a href="https://twitter.com/JeznachJacek" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://pl.linkedin.com/pub/jacek-jeznach/40/9b6/a9" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <a id="mobile-link" class="burgerMenu" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    (function() {
      var element;
      function myFunction() {
        element = document.getElementById("navbar254");
        element.classList.toggle("open");
      }
      document.getElementById("mobile-link").onclick = function() {myFunction(); console.log(element);};   
     
    })();
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>