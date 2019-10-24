   
 <template>
 <div>
    <div id="environment"></div>
 </div>
</template>
<script>
export default {
 	mounted: function () {
    var env = document.getElementById("environment");
        let i;
        let y = 10;
        let x = 10;
        let PlanetSpeed;
        let pos;
        let delay;
        let delayStars;
        let StarsSpeed;
        let addStars;
        let particleItem;
        addPlanet(10);
        Stars(10);
        var interval = setInterval(Stars, 20000, 3);
        function Stars(y) {
            clearInterval(interval);
            for (y = 0; y < 25; y++) {
            addStars = document.createElement("div");
            addStars.className = "setstars";
            var posStarsY = Math.floor(Math.random() * window.innerWidth) + "px";
            var posStarsX = Math.floor(Math.random() * window.innerHeight) + "px";
            var opacityStars = Math.random();
            delayStars = Math.random() * 6000;
            addStars.style.animationDelay = delayStars + "ms";
            addStars.style.animationDuration = StarsSpeed;
            addStars.style.left = posStarsY;
            addStars.style.top = posStarsX;
            addStars.style.opacity = opacityStars;
            // console.log(env);
            env.appendChild(addStars);
            changeSpeed();
            }
        }
        function addPlanet(x) {
            for (i = 0; i < 8; i++) {
            particleItem = document.createElement("div");
            particleItem.className = "dust";
            pos = Math.floor(Math.random() * window.innerWidth) + "px";
            delay = Math.random() * 2000;
            particleItem.style.animationDelay = delay + "ms";
            particleItem.style.animationDuration = PlanetSpeed;
            particleItem.style.left = pos;
            particleItem.style.top = pos;
            env.appendChild(particleItem);
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
        document.body.style.overflow = "hidden";
        document.getElementById("nav_bar").style.position = "absolute";
        changeSpeed();
        addPlanet();
        Stars();


  }
}
 
</script>
  <style lang="scss" scoped>
 
  </style>
  