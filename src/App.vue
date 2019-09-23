<template>
  <div id="app">
    <div id="page" class="en">
      <div id="nav_bar">
        <a class="logo" rel="index" href="https://carolinevanaerschot.be">
          <img src="../src/assets/img/logoCaro.svg" alt="logo" />
        </a>
        <nav id="navbar">
          <router-link to="/" class="home-link">
            <i class="fas fa-home"></i>
          </router-link>
          <router-link to="/about" class>
            <i class="fas fa-user"></i>
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
            <a href="https://github.com/shania873/Portfolio_Full" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caroline-v-65b750113/" target="_blank">
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
        element = document.getElementById("navbar");
        element.classList.toggle("open");
      }
      document.getElementById("mobile-link").onclick = function() {
        myFunction();
       };
    })();
  }
};
</script>
<style lang="scss">

</style>