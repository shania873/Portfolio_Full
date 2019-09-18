<template>
 <transition>
    <section id="portfolio">
        <div id="portfolio2">
            <div>
                <div class="container-fluid">
                    <div class="row">
                      <div class="paddingzero col-lg-3 col-md-3 col-sm-4 col-xs-12" :class="posts.id_travaux" v-for="(posts,key) in post" v-bind:key="posts.id_travaux">
                         <strong class="hidden">{{key}}</strong>
                 
                              <router-link :to="{ name: 'projetsecure', params:{id : key}}"> 
                                <span class="titlePost">{{posts.Nom_travaux}}</span>   
                                <img :src="posts.img_travaux_1" class="img-fluid">
                                <span class="loading">
                                 
                                <img v-if="loading" src="/assets/img/loading.gif" alt="loading">
                                </span>
                            </router-link>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 </transition>
</template>

<script>
import $ from '../node_modules/jquery/dist/jquery.js';
import axios from "axios";

    export default {
        
        name: 'Secure',
        data() {
             return {
                loading: false,
                post: null,
                error: "",
                props:['id'],
                userId: this.$route.params.id_travaux
            };
        },
         created: function() {
                this.loading = true;
                axios.get("http://carolinevanaerschot.be/assets/php/travauxprivee.php")
                .then(res => {
                    this.loading = false;
                    this.post = res.data;
                    console.log(this.post);
                    console.log("essai");
                })
                .catch(err => {
                    this.loading = false;
                    this.error = err;
                });

            },
        mounted: function(){
                    (function() {                
                            $("nav").css("position", "fixed");
                            $("html,body").css("height", "auto");          
                            $(".grid").css("display", "none");               
                    })();            
            },
    }
</script>

<style scoped>
    #secure {
       
    }
</style>