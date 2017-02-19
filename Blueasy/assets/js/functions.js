(function ($) {
	'use strict';

	$(document).ready(function () {
		var menuTrigger = $('.main-nav-trigger');
		var minMenu = $('.site-nav .top-menu');
		menuTrigger.click(function(){
			minMenu.toggle('slow');
		});

		function updateDimensions(){
			var width = window.innerWidth;
			if(width >= 992 ){
				/*minMenu.css('display', 'block');*/
				minMenu.removeAttr('style');

			}
		}
		window.addEventListener('resize', updateDimensions, false);
  }); //end ready
}(jQuery));