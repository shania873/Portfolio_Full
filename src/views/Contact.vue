<template>
  <div id="page" class="en">
    <div
      id="contact"
      class="container contact"
      style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"
    >
      <div class="text-zone">
        <h1 aria-label=" Contact me" class="blast-root">
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
        <!-- <h1>The XMLHttpRequest Object</h1> -->

        <!-- <button type="button" id="btndemoncil">Request data</button> -->
         
        <p id="demo"></p>
        <div class="contact-form">
          <form id="formulaire" action="" name="form" method="post" onsubmit="return validateForm()">
             
            <ul>
              <li class="half animated fadeInUp">
                <input
                  class="input__field input__field--hoshi"
                  placeholder="Nom"
                  type="text"
                  name="nom"
                  required
                  id="nom"
                  v-model="nom"
                />
                <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="nom"></label>
              </li>
              <li class="half animated fadeInUp">
                <input
                  class="input__field input__field--hoshi"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                  v-model="email"
                />
                <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="email"></label>
              </li>
              <li class="animated fadeInUp">
                <input
                  class="input__field input__field--hoshi"
                  placeholder="Sujet"
                  type="text"
                  required
                  id="sujet"
                  name="sujet"
                  v-model="sujet"
                />
                <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="sujet"></label>
              </li>
              <li class="animated fadeInUp">
                <textarea
                  class="input__field input__field--hoshi"
                  placeholder="Message"
                  name="msg"
                  required
                  v-model="msg"
                  id="msg"
                ></textarea>
                <label class="input__label input__label--hoshi input__label--hoshi-color-2" for="msg"></label>
              </li>
              <button  type="button" id="btndemoncil">Request data</button>
              <div id="badresult">C'est pas renvoyée, essayez plus tard..</div>
              <div id="goodresult">Envoyé, merci beaucoup !</div>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "../../node_modules/particles.js/particles.js";
import "../particle.js";
import $ from "../../node_modules/jquery/dist/jquery.js";
export default {
  data: function() {
    return {
      error: false,
      msg: null,
      sujet: null,
      email: null,
      nom: null,
      send: false
      
    };
  },
methods: {

},
created: function() {},
  mounted: function () {
      (function () {
      
      
        document.getElementById("badresult").style.display = "none";
        document.getElementById("goodresult").style.display = "none";
        document.getElementById("btndemoncil").addEventListener("click", function loadDoc(ev) { 
     
          const promise = new Promise((resolve, reject) => {
            var formElement;
         function myFunction() {
            var inpObj = document.getElementById("nom");
            if (inpObj.checkValidity()) {
                document.getElementById("demo").innerHTML = "Input OK";
            } else {
              
                document.getElementById("demo").innerHTML = inpObj.validationMessage;
            } 
             console.log(inpObj.checkValidity())
          } 
         
          myFunction();
            var request = new XMLHttpRequest();
            request.open("POST", "http://carolinevanaerschot.be/php/contact.php");
            request.onload = () => {
                 var inpObj = document.getElementById("msg");
              if (request.status === 200 && inpObj.checkValidity() == true && inpObj.checkValidity() == true) {                 
                resolve(request.response); 
              } else {
                reject(Error(request.statusText));
              }
            };
              request.onerror = () => {
                reject(Error('Error fetching data.')); 
              };            
            ev.preventDefault();
            request.send(new FormData(formElement));
          });
          console.log('Asynchronous request made.');

          promise.then((data) => {
         
            document.getElementById("goodresult").style.display = "block";
         
            this.error=true;
            }, (error) => {
            
             document.getElementById("badresult").style.display = "block";
            console.log("erreur");
           
             
          });
        });
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
