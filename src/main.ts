import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.scss";
// import JQuery from "jquery";
// let $ = JQuery;
// import "bootstrap";
import "./all.js";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),

  mounted: function() {
    // $(document).ready(function() {
    //   $(".blast").on("mouseenter", function(e) {
    //     $(this).toggleClass("animated rubberBand");
    //   });
    //   $(".blast").on("mouseleave", function(e) {
    //     $(this).removeClass("animated rubberBand");
    //   });
    // });
  }
}).$mount("#app");
