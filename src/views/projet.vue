<template>
  <div id="projet" class="bg-projet">
    <div class="set-content container">
      <div v-if="isLoading">
        <div>Loading...</div>
      </div>
      <div class="hidden">{{$route.params.id}}</div>

      <div class="text-zone">
        <h1 v-if="post2" v-html="post2.Nom_travaux" class="blast-root"></h1>
        <span v-if="post2" v-html="post2.Logiciels_Travaux"></span>
        <p v-if="post2" class="blast-root" v-html="post2.Description_Travaux"></p>
        <span v-else>LOADING..</span>
      </div>

      <div v-if="post2">
        <img :src="post2.img_travaux_2" class="img-fluid" />
        <img :src="post2.img_travaux_3" class="img-fluid" />
        <img :src="post2.img_travaux_4" class="img-fluid" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import $ from "../node_modules/jquery/dist/jquery.js";
import VueLazyload from "../../node_modules/vue-lazyload/vue-lazyload.js";
export default {
  data() {
    return {
      loading: false,
      post2: null,
      isActive: true,
      error: "",
      post2: this.post2,
      isLoading: false
    };
  },
  methods: {},

  created: function() {
    this.isLoading = true;
   console.log(this.post2);
    axios
      .get("http://carolinevanaerschot.be/assets/php/travauxGlobal.php")
      .then(res => {
        this.isLoading = false;
        this.post2 = res.data[this.$route.params.id];
        console.log(this.post2);

        
      })
      .catch(err => {
        this.isLoading = false;
        this.error = err;
           console.log(this.post2);
      });
  },

  mounted: function() {}
};
</script>
<style scoped style="scss">
.container-fluid {
  color: white;
  left: auto;
}
h1,
span,
p {
  color: white;
}
a {
  color: #08fdd8;
}
span {
  font-weight: bold;
  margin-bottom: 15px;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.5px;
}
.bg-projet {
  height: 100%;
  background-color: #181818ba;
}
h1 {
  font-size: 53px;
  font-family: font-file-82132;
  color: #08fdd8;
  font-weight: 400;
  margin-top: 0;
  position: relative;
  margin-bottom: 40px;
}
.text-zone {
  position: relative;
  left: 0;
  /* top: 19%; */
  /* -webkit-transform: translateY(-50%);
    transform: translateY(-50%); */
  width: 64%;
  vertical-align: middle;
  display: block;
  max-height: 90%;
  right: 0;
  margin: auto;
}
img {
      max-width: 63%;
    width: 100%;
}
@media (max-width: 530px) {
  #nav_bar {
    position: relative;
  }
  .particles {
    display: none;
  }
}
@media (max-width: 960px) {
  .text-zone {
    width: 100%;
  }
}
</style>