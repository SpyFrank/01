$(document).ready(function() {
	$('.main-block__burger').click(function(event) {
		$('.main-block__burger, .main-block__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});