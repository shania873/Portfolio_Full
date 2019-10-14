<template>
<div>
		<div class="container homepage" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
				<div class="homepage-title">
					<titlePrincipal></titlePrincipal>
					<h2>Front End Developer / WordPress / Motion design / Infographie 2D</h2></br>
					<router-link rel="contact" to="/contact" class="homepage-button" target="_blank">CONTACTEZ MOI</router-link>
				</div>		
					<SpaceObjets></SpaceObjets>
				</div>
			<environementStars></environementStars>
</div>
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;
import environementStars from '../components/envirronementStars.vue';
import titlePrincipal from '../components/titleprincipal.vue';
import SpaceObjets from '../components/spaceObjets.vue'; 
export default {
components: {
	environementStars,
	titlePrincipal,
	SpaceObjets
  }
}
</script>
