<template>
  <div id="page" class="fr">
    <div class="container about" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
      <div class="text-zone col-sm-6 col-xs-12">
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

      <div id="planetset" class="col-sm-6">
        <div class="planetPosition">
          <div class="mainPlanet">
            <div class="smallPlanet css">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-css.svg" />
            </div>
            <div class="smallPlanet html">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-html.svg" />
            </div>
            <div class="smallPlanet illustrator">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-illustrator.svg" />
            </div>
            <div class="smallPlanet javascript">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-javascript.svg" />
            </div>
            <div class="smallPlanet photoshop">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-photoshop.svg" />
            </div>
            <div class="smallPlanet svg">
              <img src="http://carolinevanaerschot.be/img/AboutIcon-svg.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="environment"></div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  mounted: function() {
    (function() {
      let i;
      let y = 10;
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