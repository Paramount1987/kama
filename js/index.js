///nprogress
NProgress.configure({ showSpinner: false });
NProgress.start();

$(window).load(function(){
NProgress.done();
setTimeout("$('#loader-progress').fadeOut()",500);
setTimeout("document.getElementById('video').play()",600);

});

$(document).ready(function(){

//////////////////////////////map
  function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 55.7164556, lng: 52.4359725},
        zoom: 14,
        scrollwheel: false
      });

  var marker = new google.maps.Marker({
	    position: map.getCenter(),
	    icon: 'i/icons/marker.svg',
	    map: map
  	});
  }

  initMap();
///////////////////////// scroll
var scrolled = false;
var heightFront = $(".front-main").height();
var scrollFront = function(){
		if(!scrolled){
		$('html body').animate({scrollTop: heightFront},1000);
		scrolled = true;
		$(".down-page").css('z-index', '7');
	}
};

$(document).scroll(function(){	
	var topLogo = $('.logo-wrap').offset();
	var scrollTop = $('body').scrollTop();
	if(scrollTop > topLogo.top + 50){
		$('.logo-inner').addClass('fixed');
	}else{
		$('.logo-inner').removeClass('fixed');
	}
	scrollFront();

});
	$(".down-page").click(function(){scrollFront();});
/////////////////////////////////////////////////////set for mobile height
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var heightViewport = window.height;
	 	$(".front-main").css('height', heightViewport);
	}
});