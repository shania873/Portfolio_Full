<template>
  <div class="bg-space">
    <div class="stars">
      <div class="objects">
        <div class="earth-moon">
          <img class="object_earth" src="http://carolinevanaerschot.be/img/earth.svg" width="100px" />
          <img class="object_moon" src="http://carolinevanaerschot.be/img/moon.svg" width="80px" />
        </div>
        <div class="objects_Caro"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    (function() {
      var el;
      var degrees;
      for (var i = 0; i < 5; i++) {
        el = document.createElement("div");
        el.className = "box_astronaut";
        var boxastro = document.createElement("img");
        boxastro.className = "object_astronaut" + i;
        boxastro.src = "";
        el.appendChild(boxastro);
        el.style.left = Math.floor(Math.random() * 1000 + 100) + "px";
        el.style.top = Math.floor(Math.random() * 600 + 1) + "px";
        document.querySelector(".objects_Caro").appendChild(el);
        var degrees = Math.floor(Math.random() * 360 + 1);
        el.style.transform = "rotate(" + degrees + "deg)";
      }
      document.querySelector(".object_astronaut0").src = "http://carolinevanaerschot.be/img/starbucks.png";
      document.querySelector(".object_astronaut1").src = "http://carolinevanaerschot.be/img/ecran.png";
      document.querySelector(".object_astronaut2").src = "http://carolinevanaerschot.be/img/chaise.png";
      document.querySelector(".object_astronaut3").src = "http://carolinevanaerschot.be/img/plante.png";
    })();
  }
};
</script>