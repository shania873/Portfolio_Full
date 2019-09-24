<template>
  <div id="page" class="fr">
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

        <div class="contact-form">
          <form id="formulaire" action name="form" method="post" onsubmit="return validateForm()">
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
                <p id="alert_nom"></p>
                <label
                  class="input__label input__label--hoshi input__label--hoshi-color-2"
                  for="nom"
                ></label>
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
                <p id="alert_email"></p>
                <label
                  class="input__label input__label--hoshi input__label--hoshi-color-2"
                  for="email"
                ></label>
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
                <p id="alert_sujet"></p>
                <label
                  class="input__label input__label--hoshi input__label--hoshi-color-2"
                  for="sujet"
                ></label>
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
                <p id="alert_msg"></p>
                <label
                  class="input__label input__label--hoshi input__label--hoshi-color-2"
                  for="msg"
                ></label>
              </li>
              <button type="button" id="btn__contact" class="flat-button">ENVOYER</button>
              <div id="badresult">C'est pas renvoyée, essayez plus tard..</div>
              <div id="goodresult">Envoyé, merci beaucoup !</div>
            </ul>
          </form>
        </div>
      </div>
    </div>
    <div id="environment"></div>
  </div>
</template>
<script>
import axios from "axios";
import JQuery from "jquery";
let $ = JQuery;

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
  methods: {},
  created: function() {},
  mounted: function() {
    (function() {
      let i;
      let y = 10;
      let ship = document.querySelector("#ship");
      let x = 10;
      let PlanetSpeed;
      let pos;
      let delay;
      let posStars;
      let delayStars;
      let StarsSpeed;
      let addStars;
      addPlanet(10);
      Stars(10);
      var interval = setInterval(Stars, 20000, 3);

      function Stars(y) {
        clearInterval(interval);
        for (y = 0; y < 25; y++) {
          addStars = document.createElement("div");
          addStars.className = "setstars";
          let posStarsY = Math.floor(Math.random() * window.innerWidth) + "px";
          let posStarsX = Math.floor(Math.random() * window.innerHeight) + "px";
          let opacityStars = Math.random();
          delayStars = Math.random() * 6000;
          addStars.style.animationDelay = delayStars + "ms";
          addStars.style.animationDuration = StarsSpeed;
          addStars.style.left = posStarsY;
          addStars.style.top = posStarsX;
          addStars.style.opacity = opacityStars;

          document.getElementById("environment").appendChild(addStars);
          changeSpeed();
        }
      }
      function addPlanet(x) {
        for (i = 0; i < 8; i++) {
          let particleItem = document.createElement("div");
          particleItem.className = "dust";
          pos = Math.floor(Math.random() * window.innerWidth) + "px";
          delay = Math.random() * 2000;
          particleItem.style.animationDelay = delay + "ms";
          particleItem.style.animationDuration = PlanetSpeed;
          particleItem.style.left = pos;
          particleItem.style.top = pos;
          document.getElementById("environment").appendChild(particleItem);
          changeSpeed();
        }
      }

      function changeSpeed(x, y) {
        PlanetSpeed = "5000ms";
        StarsSpeed = "9000ms";
        if ((x, y)) {
          PlanetSpeed = x + "ms";
          StarsSpeed = y + "ms";
        }
      }

      changeSpeed();
      addPlanet();
      document.getElementById("badresult").style.display = "none";
      document.getElementById("goodresult").style.display = "none";

      document
        .getElementById("btn__contact")
        .addEventListener("click", function loadDoc(ev) {
          var form = document.getElementById("formulaire");

          var email = document.getElementById("email");
          var sujet = document.getElementById("sujet");
          var nom = document.getElementById("nom");
          var msg = document.getElementById("msg");

          if (!sujet.checkValidity()) {
            sujet.style.border = "solid 3px #ad0000";

            document.getElementById("alert_sujet").innerHTML =
              "Votre sujet est requis";
          } else {
            sujet.style.border = "solid 0px #ad0000";
            document.getElementById("alert_sujet").style.display = "none";
          }
          if (!nom.checkValidity()) {
            nom.style.border = "solid 3px #ad0000";
            document.getElementById("alert_nom").innerHTML =
              "Votre nom est requis";
          } else {
            nom.style.border = "solid 0px #ad0000";
            document.getElementById("alert_nom").style.display = "none";
          }
          if (!email.checkValidity()) {
            email.style.border = "solid 3px #ad0000";
            document.getElementById("alert_email").innerHTML =
              "Votre e-mail est requis";
          } else {
            email.style.border = "solid 0px #ad0000";
            document.getElementById("alert_email").style.display = "none";
          }
          if (!msg.checkValidity()) {
            msg.style.border = "solid 3px #ad0000";
            document.getElementById("alert_msg").innerHTML =
              "Votre message est requis";
          } else {
            msg.style.border = "solid 0px #ad0000";
            document.getElementById("alert_msg").style.display = "none";
          }
          if (!form.checkValidity()) {
            document.getElementById("alert_nom").innerHTML =
              "Votre nom est requis";
            document.getElementById("alert_email").innerHTML =
              "Votre  email est requis";
            document.getElementById("alert_sujet").innerHTML =
              "Votre sujet est requis";
            document.getElementById("alert_msg").innerHTML =
              "Votre msg est requis";
          } else {
            document.getElementById("alert_nom").style.display = "none";
            document.getElementById("alert_email").style.display = "none";
            document.getElementById("alert_sujet").style.display = "none";
            document.getElementById("alert_msg").style.display = "none";
            envoidata();
          }
          function envoidata() {
            const promise = new Promise((resolve, reject) => {
              var formElement = document.getElementById("formulaire");
              var request = new XMLHttpRequest();
              request.open(
                "POST",
                "http://carolinevanaerschot.be/php/contact.php"
              );
              request.onload = () => {
                console.log(formElement.checkValidity());
                if (request.status == 200) {
                  resolve(request.response);
                } else {
                  reject(Error(request.statusText));
                }
              };
              request.onerror = () => {
                reject(Error("Error fetching data."));
              };
              ev.preventDefault();
              request.send(new FormData(formElement));
      
            });

            promise.then(
              data => {
                document.getElementById("goodresult").style.display = "block";
              },
              error => {
                document.getElementById("badresult").style.display = "block";
            
              }
            );
          }
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
