<template>
    		<h1 class="homepage-h1">
							<span class="homepage-letter" style="opacity: 1;">H</span>
							<span class="homepage-letter" style="opacity: 1;">e</span>
							<span class="homepage-letter" style="opacity: 1;">l</span>
							<span class="homepage-letter" style="opacity: 1;">l</span>
							<span class="homepage-letter" style="opacity: 1;">o</span>
            				<span class="homepage-letter" style="opacity: 1;">,</span>
							<br>
							<span class="homepage-letter" style="opacity: 1;">J</span>
							<span class="homepage-letter" style="opacity: 1;">e</span>
              				<span class="spaceIndex"></span>
							<span class="homepage-letter" style="opacity: 1;">s</span>
							<span class="homepage-letter" style="opacity: 1;">u</span>
							<span class="homepage-letter" style="opacity: 1;">i</span>
							<span class="homepage-letter" style="opacity: 1;">s</span>
						 	 <span class="spaceIndex"></span>
							<span class="homepage-letter" style="opacity: 1;">C</span>
							<span class="homepage-letter" style="opacity: 1;">a</span>
							<span class="homepage-letter" style="opacity: 1;">r</span>
							<span class="homepage-letter" style="opacity: 1;">o</span>
							<span class="homepage-letter" style="opacity: 1;">l</span>
							<span class="homepage-letter" style="opacity: 1;">i</span>
							<span class="homepage-letter" style="opacity: 1;">n</span>
							<span class="homepage-letter" style="opacity: 1;">e</span>
        	    			<br>
			</h1>
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
 	mounted: function () {
   $(document).ready(function () {
			$(".particles").show();
			$('.homepage-letter').on('mouseenter', function (e) {
				$(this).toggleClass('animated flash');
			});
			$('.homepage-letter').on('mouseleave', function (e) {
				$(this).removeClass('animated flash');
			});
		});


  }
}
 
</script>