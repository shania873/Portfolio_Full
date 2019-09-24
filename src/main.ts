import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.scss";
import JQuery from "jquery";
let $ = JQuery;
import "bootstrap";
import "./all.js";
import "./pace.js";
// import "./particlesMyWork.js";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),

  mounted: function() {
    $(document).ready(function() {
    
    });
  }
}).$mount("#app");
