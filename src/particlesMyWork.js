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
 
})();
