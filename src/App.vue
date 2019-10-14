<template>
  <div id="app">
    <div id="page">
           <SiteHeader></SiteHeader>      
      <template>
              <transition name="fade" mode="out-in">
                  <router-view />
              </transition>
      </template>
    </div>
  </div>
</template>
<script>

import SiteHeader from '../src/components/header.vue';

export default {
 components: {
  	SiteHeader
  },
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>