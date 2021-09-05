
$('.product-nav__item').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.product__column').show();

	} else {
		$('.product__column').hide();
		$('.product__column.fil__' + i).show();
	}
	$('.product-nav__item').removeClass('active');
	$(this).addClass('active');


	return false;
});





