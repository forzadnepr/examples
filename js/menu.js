(function ($) {
    var menuIcon = $(".icon-min-menu");
    var navMenuMin = $(".nav-menu-min");
    var body = document.body;
    menuIcon.click(function(){
        navMenuMin.toggle();
    });
    function updateDimensions(){
    var width = window.innerWidth;
    if(width >= 640 ){
        navMenuMin.css('display', 'none');
    }
    }
    window.addEventListener('resize', updateDimensions, false);
})(jQuery);