$(document).ready(function(){
	/* Owlcarousel start */
	$('.testimonial-slider').owlCarousel({
		items: 3,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 30,
		autoplayTimeout: 3000,
		navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
		 responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items:3
            }
        }
		
	});


	/* -- magnific-popup js --*/
	$('.play-btn').magnificPopup({
		type:'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',

			patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v=',

					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			},
			srcAction: 'iframe_src',
		}
	});






});