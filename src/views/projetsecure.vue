<template>
 <vue-page-transition name="overlay-left-full">
    <section id="projets">
           <div v-if="isLoading">
 
      <div>Loading... </div>
    </div>
      <div class="hidden">{{$route.params.id}}</div>
      <div  class="container">     
      <h1 v-if="post3" v-html="post3.Nom_travaux"></h1>
      <span v-if="post3" v-html="post3.Logiciels_Travaux"></span>
      <p v-if="post3" v-html="post3.Description_Travaux"></p>
<div v-if="post3">
  <div class="container">
    <div class="col-sm-9" style="margin:auto;">
        <img :src="post3.img_travaux_2" class="img-fluid">
        <img :src="post3.img_travaux_3" class="img-fluid">
        <img :src="post3.img_travaux_4" class="img-fluid">
    </div>
  </div>
</div>

  </div>
    </section>
 </vue-page-transition>
  
</template>
<script>
  import axios from "axios";
  import $ from '../node_modules/jquery/dist/jquery.js';

  export default {
   
    data() {
      return {
        loading: false,
        post: null,
        isActive: true,
        error: "",
        post3: this.post3,
        transition:"loading",
        isLoading: false
      };
    },
    created: function () {
       this.isLoading=true;
          console.log(this.isLoading);
      axios.get("http://carolinevanaerschot.be/assets/php/travauxprivee.php")
        .then(res => {
            this.isLoading=false;
          this.post3 = res.data[this.$route.params.id];
              console.log(this.isLoading);
        })
        .catch(err => {
            this.isLoading= false;
          this.error = err;
             console.log(this.isLoading);
        });
    },
  
   mounted: function(){

     (function() {
       $("nav").css("position", "fixed");
       $("html,body").css("height", "auto");
      })();

    },
       
      } 

</script>
