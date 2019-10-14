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
Vue.component('environementStars', { 
  mounted: function() {
    (function() {})();     
  }
 });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount("#app");
