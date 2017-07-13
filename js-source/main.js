if (typeof(ymaps) !== "undefined") {
	ymaps.ready(init);
	var yaMap;
	function init() {
		ymaps.geocode(addr, {
			results: 1
		}).then(function (res) {

			var coords = res.geoObjects.get(0).geometry.getCoordinates(),
				myPlacemark = new ymaps.Placemark(coords);
			yaMap = new ymaps.Map("map",{
				center: coords,
				zoom: 15,
				controls: ['zoomControl', 'fullscreenControl']
			});

			yaMap.geoObjects.add(myPlacemark);
		});
	}
}

$(document).ready(function () {
	$('.popup').hide();
	$('[data-popup="btn"]').click(function () {
		$('.popup').fadeIn();
	})
	$('.popup').click(function (e) {
		if ($(e.target).hasClass('popup')) {
			$(this).fadeOut();
		}
	})
	$('.menu__item').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 100}, 'slow');
	})
	
	$('.section__btn').click(function (e) {
//		e.preventDefault();
		$('html, body').animate({scrollTop: $($(this).attr('data-anchor')).offset().top - 100}, 'slow');
	})
	$('.partners-slider').owlCarousel({
		loop:true,
		nav:false,
//		navText: [ '<img src="img/arrow-left.png" alt="Влево">', '<img src="img/arrow-right.png" alt="Вправо">' ],
		items:1
	//			autoplay:true,
	//			autoplayTimeout:5000,
	//			autoplayHoverPause:true
	})

	$('.gallery-slider').owlCarousel({
		loop:true,
		nav:false,
//		navText: [ '<img src="img/arrow-left.png" alt="Влево">', '<img src="img/arrow-right.png" alt="Вправо">' ],
		items: 5,
		center: true,
		margin: 30,
		autoWidth:true,
	})
	
	$('.slider-btn-right').click(function() {
		$('.' + $(this).attr('data-for')).trigger('next.owl.carousel');
	})
	$('.slider-btn-left').click(function() {
		$('.' + $(this).attr('data-for')).trigger('prev.owl.carousel');
	})
})