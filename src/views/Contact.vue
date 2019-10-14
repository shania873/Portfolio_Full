<template>
  <div>
    <div
      id="contact"
      class="container contact"
      style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
    >
      <div class="text-zone">
        <h1 class="blast-root">
          <span class="blast" aria-hidden="true" style="opacity: 1;">C</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">o</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">n</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">t</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">a</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">c</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">t</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">e</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">z</span>
          <span class="spaceIndex"></span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">m</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">o</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">i</span>
        </h1>
        <p>Si vous avez des questions, ou autre ..</p>
        
        <div class="contact-form">
         <formContact></formContact>
        </div>
      </div>
    </div>
  <environementStars></environementStars>
  </div>
</template>
<script>
import axios from "axios";
import JQuery from "jquery";
let $ = JQuery;
import environementStars from '../components/envirronementStars.vue';
import formContact from '../components/form.vue'; 
export default {
	 components: {
    environementStars,
    formContact
  }, 
  mounted: function() {
    (function() {
 	 document.body.style.overflow = "hidden";
			 document.getElementById("nav_bar").style.position = "absolute"; 
    })();
    $(document).ready(function() {
      $(".particles").show();
      $(".blast").on("mouseenter", function(e) {
        $(this).toggleClass("animated flash");
      });
      $(".blast").on("mouseleave", function(e) {
        $(this).removeClass("animated flash");
      });
    });
    (function() {})();
  }
};
</script>
