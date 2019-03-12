$(document).ready(function() {

	$('a[href^="#"]').on('click', function(event) {
		var sm;
		event.preventDefault();
		if($(window).scrollTop() == 0){
			if($(window).width() < 768){
				sm = 160;
			}
			else{
				sm = 180;
			}
		}
		else{
			sm = 80;
		}
		var sc = $(this).attr("href"),
				dn = $(sc).offset().top - sm;
		$('html, body').animate({scrollTop: dn}, 1000);
	});

	$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('body').addClass('scr');
			}
			else {
				$('body').removeClass('scr');
			}
		});

	$('.sliderExampleWorks').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

});
