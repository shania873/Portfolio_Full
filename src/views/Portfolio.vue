<template>
  <transition>
    <div class="accordion">
      <ul>
        <div v-if="isLoading" class="loading">
          <div>Loading...</div>
        </div>
        <li v-for="(posts, key) in post"
          :style="{ backgroundImage: `url('${posts.img_travaux_1}')` }"
          v-bind:key="posts.id_travaux">
          <strong class="hidden">{{key}}</strong>
          <router-link :to="{ name: 'projet', params:{id : key}}">
            <div></div>
          </router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import axios from "axios";
import VueGallery from "../../node_modules/vue-gallery/src/index.js";
import { store, Photos, Theater } from "vuejs-carousel";
export default {
  data: function() {
    return {
      post: null,
      key: "",
      isLoading: false
    };
  },
  mounted: function() {},
  created: function() {
	this.isLoading = true;
	console.log(this.isLoading);
    axios
      .get("http://www.carolinevanaerschot.be/assets/php/travauxGlobal.php")
      .then(res => {
        this.isLoading = false;
        this.post = res.data;

        console.log(res.data);
      })
      .catch(err => {
        this.isLoading = false;
        this.error = err;
      });
  }
};
</script>
<style scoped style="scss">
.loading{
	background-color: red;
}
</style>