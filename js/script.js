$('.scrollku').on('click', function (e) {
	var ambilLink = $($(this).attr('href'));
	var elementAmbil = $(ambilLink);
	// perbedaan $ambilLink dengan $(ambilLink)

	// console.log(elementAmbil.offset().top);
	// console.log($('html').scrollTop());
	// $('html').scrollTop(ambilLink.offset().top);
	$('html').animate({
		scrollTop: ambilLink.offset().top - 100
	}, 700, 'swing')

	e.preventDefault();
});

// self invoking anonymous function
// (function()) {
	// 
// })(); supaya tidak bingung dengan variable lain



// Parallax
$(this).scroll(function() {
	var winScroll = $(window).scrollTop();
	console.log(winScroll)
	$('.foto-profile').css({
		'transform' : 'translate(0px, '+ winScroll/3 +'px)'
	});

	// Navbar 
	if (winScroll > 500 && winScroll < 1234 || winScroll > 1990 && winScroll < 2471) {
		$('.bg-navbar0').addClass('bg-navbar') ,
		$('.about a , .creation a , .skill a').css({
			'color' : 'rgba(255,255,255,1)'
		});
	} else {
		$('.bg-navbar0').removeClass('bg-navbar') ,
		$('.about a , .creation a , .skill a').css({
			'color' : 'rgba(230,230,230,0.5)'
		});
	};

	if (winScroll > 1600) {
		$('.proses-html .bar-proses').addClass('html-pro');
	} else {
		$('.proses-html .bar-proses').removeClass('html-pro');
	};

	if (winScroll > 1650) {
		$('.proses-css .bar-proses').addClass('css-pro');
	} else {
		$('.proses-css .bar-proses').removeClass('css-pro');
	};

	if (winScroll > 1700) {
		$('.proses-js .bar-proses').addClass('js-pro');
	} else {
		$('.proses-js .bar-proses').removeClass('js-pro');
	};

	if (winScroll > 1750) {
		$('.proses-phyton .bar-proses').addClass('phyton-pro');
	} else {
		$('.proses-phyton .bar-proses').removeClass('phyton-pro');
	};

	if (winScroll > 1800) {
		$('.proses-php .bar-proses').addClass('php-pro');
	} else {
		$('.proses-php .bar-proses').removeClass('php-pro');
	};

});

