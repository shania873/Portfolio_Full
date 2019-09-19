<template>
  <div id="page" class="en">
    <div class="container about" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
      <div class="text-zone">
        <h1 aria-label=" About me" class="blast-root">
          <span class="blast" aria-hidden="true" style="opacity: 1;">A</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">b</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">o</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">u</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">t</span>
          <span class="spaceIndex"></span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">m</span>
          <span class="blast" aria-hidden="true" style="opacity: 1;">e</span>
        </h1>
        <p align="LEFT" class="blast-root">
          Passionnée par tout ce qui touche à la conception graphique et à la programmation. J’ai terminé mes études en
          infographie finalité web à la Haute Ecole Francisco Ferrer à Bruxelles. Constamment à la recherche de nouveaux
          défis, j’ai pu travailler pour différentes boites comme des start ups et des multi nationales, J’ai pu
          également travailler pour différentes marques telles que Peugeot, Citroën, Maytea et Luminus qui m’a permis de
          donner le meilleur de moi-même.
        </p>
        <div class="clear"></div>
      </div>
      <div id="environment"></div>
      <section id="planetset">
        <div class="planetPosition">
          <div class="far-orbit"></div>
          <div class="near-orbit"></div>
          <div class="mainPlanet">
            <div class="smallPlanet mars">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-css.svg" />
            </div>
            <div class="smallPlanet saturn">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-html.svg" />
            </div>
            <div class="smallPlanet planet-x">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-illustrator.svg" />
            </div>
            <div class="smallPlanet mars2">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-javascript.svg" />
            </div>
            <div class="smallPlanet saturn2">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-photoshop.svg" />
            </div>
            <div class="smallPlanet planet-x2">
              <img src="http://carolinevanaerschot.be/assets/img/AboutIcon-svg.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
import "../../node_modules/particles.js/particles.js";
import "../particle.js";
import "../fusee.js";
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  mounted: function() {
    (function() {
      let gameArea = document.getElementById("environment");
      let i;
      let y;
      let ship = document.querySelector("#ship");
      let x = 1200;
      let PlanetSpeed = 10;
      let pos;
      let delay;
      //   let posFusee;
      //  let delayFusee;
      addPlanet(10);
      //  addFusee(10);
      // function addFusee(x) {
      //   for (y = 0; y < 2; y++) {
      //     let FuseeItem = document.createElement("div");
      //     FuseeItem.id = "ship";
      //     FuseeItem.className = "USSEnterprise";
      //     posFusee = Math.floor(Math.random() * $(window).width()) + "px";
      //     delayFusee = Math.random() * 2000;
      //     FuseeItem.style.animationDelay = delay + "ms";
      //     FuseeItem.style.animationDuration = PlanetSpeed;
      //     FuseeItem.style.left = posFusee;
      //     FuseeItem.style.top = posFusee;
      //     // el.style.top = Math.floor((Math.random() * 600) + 1) + "px";
      //     //  FuseeItem.appendTo('#environment');
      //     document.getElementById("environment").appendChild(FuseeItem);
      //     changeSpeed();
      //     console.log(FuseeItem);
      //   }
      // }
      function addPlanet(x) {
        for (i = 0; i < 8; i++) {
          let particleItem = document.createElement("div");
          particleItem.className = "dust";
          pos = Math.floor(Math.random() * $(window).width()) + "px";
          delay = Math.random() * 2000;
          particleItem.style.animationDelay = delay + "ms";
          particleItem.style.animationDuration = PlanetSpeed;
          particleItem.style.left = pos;
          particleItem.style.top = pos;
          document.getElementById("environment").appendChild(particleItem);
          changeSpeed();
        }
      }

      function changeSpeed(x) {
        PlanetSpeed = "1900ms";
        if (x) {
          PlanetSpeed = x + "ms";
        }
        //  document.querySelector('div.planet').style.animationDuration = PlanetSpeed;
      }

      changeSpeed();
      addPlanet();
      // addFusee();
      //  playGame();
    })();
    $(document).ready(function() {
      $(".blast").on("mouseenter", function(e) {
        $(this).toggleClass("animated flash");
      });
      $(".blast").on("mouseleave", function(e) {
        $(this).removeClass("animated flash");
      });
    });
  }
};
</script>
<style lang="scss">
@media (max-width: 530px) {
  .container.about {
    #environment .dust {
      -webkit-animation: dust 0.9s infinite ease-in;
      animation: dust 0.9s infinite ease-in;
      background: rgba(211, 211, 211, 0.36);
      border-radius: 50%;
      -webkit-box-shadow: 0 0 0.5rem 0 rgba(128, 128, 128, 0.5);
      box-shadow: 0 0 0.5rem 0 rgba(128, 128, 128, 0.5);
      height: 12px;
      position: fixed;
      width: 6px;
      left: 50%;
    }
    #planetset {
      //   position: fixed;
      // right: 20%;
      // top: -100%;
      // bottom: 0;
      // opacity: 0.2;
      // z-index: 1;
      display: none;
    }
    #particles-js2 {
      position: relative;
      top: 9px;
      height: 365px;
    }
    .particles{
      display: none;
    }
  }
}
</style>
