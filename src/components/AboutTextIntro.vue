<template>
    <div>
        <h1 class="about-h1">
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">A</span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">b</span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">o</span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">u</span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">t</span>
          <span class="spaceIndex"></span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">m</span>
          <span class="about-letter" aria-hidden="true" style="opacity: 1;">e</span>
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
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
    mounted: function(){
           $(document).ready(function() {
      $(".blast").on("mouseenter", function(e) {
        $(this).toggleClass("animated flash");
      });
      $(".blast").on("mouseleave", function(e) {
        $(this).removeClass("animated flash");
      });
    });
    }
}
</script>