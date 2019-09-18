<template>
  <transition>
    <section id="portfolio">
      <!-- {{post}} -->
      <!-- <div class="paddingzero  col-lg-3 col-md-3 col-sm-4 col-xs-12"  v-for="(posts, key) in post" v-bind:key="posts.id_travaux">
                     
            <strong class="hidden">{{key}}</strong>

                <router-link :to="{ name: 'projet', params:{id : key}}"> 
                  
                  <span class="titlePost">{{posts.Nom_travaux}}</span>       
                          <img :src="posts.img_travaux_1" class="img-fluid">         
                              
                </router-link>
      </div>-->
    </section>
  </transition>
</template>
<script>
import "../../node_modules/mysql/index.js";
// import "../db.js";
 import axios from 'axios';
export default {
  data: function() {
    return {
      todos: []
    };
  },
  mounted: function() {
  
  },
   created: function() {
    this.loading = true;
    axios.get("http://www.carolinevanaerschot.be/assets/php/travauxGlobal.php")
      .then(res => {
        this.loading = false;
        this.post = res.data;
     
        console.log(this.post);
      })
      .catch(err => {
        this.loading = false;
        this.error = err;
      });

  },git 
};
</script>