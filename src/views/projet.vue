<template>
  <div id="projet" class="bg-projet">
    <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="onCancel"></loading>
    <div class="set-content container">
      <div class="hidden">{{$route.params.id}}</div>

      <div class="text-zone">
        <h1 v-if="post2" v-html="post2.Nom_travaux" class="blast-root"></h1>
        <span v-if="post2" v-html="post2.Logiciels_Travaux"></span>
        <p v-if="post2" class="blast-root" v-html="post2.Description_Travaux"></p>
    
      </div>

      <div v-if="post2" class="setprojet">
        <img :src="post2.img_travaux_2" />
        <img :src="post2.img_travaux_3" />
        <img :src="post2.img_travaux_4" />
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
import JQuery from "jquery";
let $ = JQuery;
import Loading from "../../node_modules/vue-loading-overlay/dist/vue-loading.js";
import "../../node_modules/vue-loading-overlay/dist/vue-loading.css";

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
  methods: {
    submit() {
      let loader = Vue.$loading.show({
        container: this.$refs.loadingContainer,
        canCancel: true,
        onCancel: this.post2,
        color: "#000000",
        loader: "spinner",
        width: 64,
        height: 64,
        backgroundColor: "transparent",
        opacity: 0.5,
        zIndex: 999
      });

      setTimeout(() => {
        loader.hide();
      }, 7000);
    },
    onCancel() {}
  },
mounted: function() {
    	(function () {
          document.body.style.overflow = "visible";
          document.getElementById("nav_bar").style.position = "fixed";
		})();
  },
  created: function() {
    this.isLoading = true;

    axios
      .get("https://carolinevanaerschot.be/php/travauxGlobal.php")
      .then(res => {
        this.isLoading = false;
        this.post2 = res.data[this.$route.params.id];
        console.log(this.post2);
 
      })
      .catch(err => {
        this.isLoading = false;
        this.error = err;
        console.log(res);
   
      });
  },
  components: {
    Loading
  }

  
};
</script>
<style scoped lang="scss" >
body {
  background: #252627;
  overflow: visible;
  display: block;
  height: 100%;
}
#nav_bar {
  background: #181818;
  width: 60px;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  min-height: 500px;
}
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
  width: 64%;
  vertical-align: middle;
  display: block;
  max-height: 90%;
  right: 0;
  margin: auto;
}
.setprojet {
  text-align: center;
  img {
    display: inline-block;
    text-align: center;
    max-width: 63%;
    width: 100%;
    margin-bottom: 10px;
  }
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
  .container{
        width: 100%;
    height: auto;
    padding-bottom: 58px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    top: 86px;
    height: 100vh;
  }
}
</style>