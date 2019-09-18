<template>
  <transition>
    <div class="container">
      <!-- {{post}} -->
      <!-- <div class="paddingzero  col-lg-3 col-md-3 col-sm-4 col-xs-12"  v-for="(posts, key) in post" v-bind:key="posts.id_travaux">
                     
            <strong class="hidden">{{key}}</strong>

                <router-link :to="{ name: 'projet', params:{id : key}}"> 
                  
                  <span class="titlePost">{{posts.Nom_travaux}}</span>       
                          <img :src="posts.img_travaux_1" class="img-fluid">         
                              
                </router-link>
      </div> -->

        <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex"  @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }"></div>
    </div>
  </transition>
</template>
<script>
// import "../../node_modules/mysql/index.js";
// import "../db.js";
 import axios from 'axios';
  import VueGallery from '../../node_modules/vue-gallery/src/index.js';
export default {
  data: function() {
    return {
       images: [
          'http://carolinevanaerschot.be/assets/img/Cuisine_Visuel1.png',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://carolinevanaerschot.be/assets/img/Final_Lettre_Dietetique.jpg',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff'
        ],
        index: null,
      todos: [],
      post: null,
    };
  },
  components: {
      'gallery': VueGallery
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

  },
};
</script>
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>