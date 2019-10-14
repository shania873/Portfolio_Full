

<template>
<div>
    <div class="container about" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
      <div class="about-text col-lg-4 col-md-5 col-sm-10 col-xs-12">
         <AboutTextIntro></AboutTextIntro>
      </div>

      <div class="about-planet col-lg-8 col-md-7 col-sm-10 col-xs-10">
      <AboutMainPlanet></AboutMainPlanet>
       
      </div>
    </div>
 <environementStars></environementStars>
</div>
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;

import environementStars from '../components/envirronementStars.vue';
import AboutTextIntro from '../components/AboutTextIntro.vue';
import AboutMainPlanet from '../components/AboutMainPlanet.vue';

export default {
  components: {
    environementStars,
    AboutTextIntro,
    AboutMainPlanet
  },
  mounted: function() {
 
  }
};
</script>
