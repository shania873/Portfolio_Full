<template>
  <div id="page" class="fr">
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
				
				
				</div>
					<div id="environment"></div>
				</div>
</template>


<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
	data: function () {
		return {}
	},
	mounted: function () {
		(function () {
			 document.body.style.overflow = "hidden";
			 document.getElementById("nav_bar").style.position = "absolute";
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

		})();

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
