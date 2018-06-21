 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });


 // nav fixed on scroll

 jQuery(document).ready(function() {
 	$(window).scroll(function() {
 		if($(this).scrollTop() > 137) {
 			$(".top-nav").addClass("sticky");
 		} else {
 			$(".top-nav").removeClass("sticky");
 		}
 	});
 

 // mmenu

  var $menu = $("#my-menu").mmenu({

    }, {
        clone: true
    });

    var API = $menu.data("mmenu");
    $("#menu-button").click(function() {
        API.open();
     });


    // lightbox
    
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
  
});
   



