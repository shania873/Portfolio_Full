<template>
  <transition>
    <div class="gallery-wrap">
      <div class="item item-1"></div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
      <div class="item item-4"></div>
      <div class="item item-5"></div>
      <div class="item item-3"></div>
      <div class="item item-4"></div>
      <div class="item item-5"></div>
      <div class="item item-3"></div>
      <div class="item item-4"></div>
      <div class="item item-5"></div>
    </div>
  </transition>
</template>
<script>
// import "../../node_modules/mysql/index.js";
// import "../db.js";
import axios from "axios";
import VueGallery from "../../node_modules/vue-gallery/src/index.js";
import { store, Photos, Theater } from "vuejs-carousel";
export default {
  data: function() {
    return {
      post: null
    };
  },
  components: {
    gallery: VueGallery
  },
  mounted: function() {},
  created: function() {
    this.loading = true;
    axios
      .get("http://www.carolinevanaerschot.be/assets/php/travauxGlobal.php")
      .then(res => {
        this.loading = false;
        this.post = res.data;

        console.log(this.post);
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
      });
  }
};
</script>
<style scoped style="scss">
</style>