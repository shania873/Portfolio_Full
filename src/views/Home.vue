<template>


			<div class="container home-page" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
					<div class="text-zone">
						<h1 aria-label=" Hi, I’m ack,web developer." class="blast-root">
							<span class="blast" aria-hidden="true" style="opacity: 1;">H</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">e</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">l</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">l</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">o</span>
            				<span class="blast" aria-hidden="true" style="opacity: 1;">,</span>
							<br>
							<span class="blast" aria-hidden="true" style="opacity: 1;">J</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">e</span>
              				<span class="spaceIndex"></span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">s</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">u</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">i</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">s</span>
						 	 <span class="spaceIndex"></span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">C</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">a</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">r</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">o</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">l</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">i</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">n</span>
							<span class="blast" aria-hidden="true" style="opacity: 1;">e</span>
        					<!-- <span class="blast" aria-hidden="true" style="opacity: 1;">,</span> -->
							<br>
					  	</h1>
						<h2>Front End Developer / WordPress / Motion design / Infographie 2D</h2></br>
						 <router-link rel="contact" to="/contact" class="flat-button" target="_blank">CONTACTEZ MOI</router-link>
					</div>
				
						   
 
		  
<div class="bg-purple">
	<div class="stars">
		<div class="objects">
			<div class="earth-moon">
				<img class="object_earth" src="http://carolinevanaerschot.be/img/earth.svg" width="100px">
				<img class="object_moon" src="http://carolinevanaerschot.be/img/moon.svg" width="80px">
			</div>
			<div class="boxset">		
			</div>

		</div>
	</div>
</div>

<div class="bg" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
</div>

</template>


<script>
import "../../node_modules/particles.js/particles.js";
import "../particle.js";
import JQuery from "jquery";
let $ = JQuery;
export default {
	data: function () {
		return {}
	},
	mounted: function () {
		$(document).ready(function () {
			$(".particles").show();
			$('.blast').on('mouseenter', function (e) {
				$(this).toggleClass('animated flash');
			});
			$('.blast').on('mouseleave', function (e) {
				$(this).removeClass('animated flash');
			});
		});
		(function () {
			var el;
			var degrees;
			for (var i = 0; i < 5; i++) {
				el = document.createElement("div");
				el.className = "box_astronaut";
				var boxastro = document.createElement("img");
				boxastro.className = 'object_astronaut' + i;
				boxastro.src = "";
				var cul = el.appendChild(boxastro);
				el.style.left = Math.floor((Math.random() * 1000) + 100) + "px";
				el.style.top = Math.floor((Math.random() * 600) + 1) + "px";
				document.querySelector(".boxset").appendChild(el);
				var degrees = Math.floor((Math.random() * 360) + 1);
				el.style.transform = 'rotate(' + degrees + 'deg)';
			}
			document.querySelector(".object_astronaut0").src = "http://carolinevanaerschot.be/img/starbucks.png";
			document.querySelector(".object_astronaut1").src = "http://carolinevanaerschot.be/img/ecran.png";
			document.querySelector(".object_astronaut2").src = "http://carolinevanaerschot.be/img/chaise.png";
			document.querySelector(".object_astronaut3").src = "http://carolinevanaerschot.be/img/plante.png";
		})();
	}
}
</script>
<style scoped lang="scss">


</style>
