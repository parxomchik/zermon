$(document).ready(function() {
	$('.check_box label').click(function() {
		$(this).prev('.check_box').toggleClass('active');
	});
    $('.check_box input').click(function() {
    	$(this).parent().toggleClass('active');
  	});
    $('.btn_reset_filters').click(function() {
    	$('.check_box input').prop( "checked", false );
    	$('.check_box').removeClass('active');
  	});



// var start = $('#ex2').slider()
//     .on('slide', inputChange)
//     .data('slider');

// var inputChange = function() {
//   $('#price_min').attr('value', start.getValue())
// };

});