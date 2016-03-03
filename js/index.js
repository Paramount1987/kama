///nprogress
NProgress.configure({ showSpinner: false });
NProgress.start();
var scrolled = {is: false};
var run = {is:false}

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
var heightFront = $(".front-main").height();
var scrollFront = function(e){

			if(!run.is){
				run.is = true;
				$('html body').animate({scrollTop: heightFront},1000,function(){scrolled.is = true; });
				$(".down-page").fadeOut();				
		}
};

$('body').on('mousewheel  touchmvoe',function(e){	
	scrollFront();

	if(!scrolled.is){
		e.stopPropagation();
		e.preventDefault();
	}

});
	$(".down-page").click(function(){scrollFront();});
/////////////////////////////////////////////////////set for mobile height
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var heightViewport = window.height;
	 	$(".front-main").css('height', heightViewport);
	 	$('.poster-video').css('display', 'block');
	 	$('#video').css('display','none');
	}
});