import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.scss";
import JQuery from "jquery";
let $ = JQuery;
import "bootstrap";
import TREE from "three";
import "./fusee.js";
import "./all.js";
import "mysql";
import VueLazyload from 'vue-lazyload';
Vue.config.productionTip = false;
// or with options

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/img/logoCaro.b4b4da9d.svg',
  loading: 'dist/img/logoCaro.b4b4da9d.svg',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App),

  mounted: function() {
    $(document).ready(function() {
      $(".blast").on("mouseenter", function(e) {
        $(this).toggleClass("animated rubberBand");
      });
      $(".blast").on("mouseleave", function(e) {
        $(this).removeClass("animated rubberBand");
      });
    });
  }
}).$mount("#app");
