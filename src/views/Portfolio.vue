<template>
  <transition>
    <div class="accordion">
		  <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel" :is-full-page="post2" ></loading>
      <ul>
      
        <li v-for="(posts, key) in post"
          :style="{ backgroundImage: `url('${posts.img_travaux_1}')` }"
          v-bind:key="posts.id_travaux">
          <!-- <strong class="hidden">{{key}}</strong> -->
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
// import $ from "../node_modules/jquery/dist/jquery.js";

// Import component
import Loading from "../../node_modules/vue-loading-overlay/dist/vue-loading.js";
// Import stylesheet
import "../../node_modules/vue-loading-overlay/dist/vue-loading.css";

export default {
  data: function() {
    return {
      loading: false,
      post: null,
      isActive: true,
      error: "",
      post2: this.post2,
      isLoading: false
    };
  },
  mounted: function() {},
    methods: {
    submit() {
      let loader = Vue.$loading.show({
        // Pass props by their camelCased names
        container: this.$refs.loadingContainer,
        canCancel: true, // default false
        onCancel: this.post2,
        color: "#000000",
        loader: "spinner",
        width: 64,
        height: 64,
        backgroundColor: "transparent",
        opacity: 0.5,
        zIndex: 999
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 7000);
    },
    onCancel() {

    }
  },
   created: function() {
    this.isLoading = true;
 
    axios
      .get("http://carolinevanaerschot.be/php/travauxGlobal.php")
      .then(res => {
        this.isLoading = false;
        this.post = res.data;
       
      })
      .catch(err => {
        this.isLoading = false;
        this.error = err;
      
      });
  },
  components: {
    Loading
  },
};
</script>
<style scoped style="scss">

</style>