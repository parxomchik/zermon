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

    //select made in sm sklipav

    $('.item_sort').click(function() {
    	$(this).children('.dropdown_sort').toggleClass('hidden');
    	$(this).children('.dropdown_sort').toggleClass('active');
    	// $('.item_sort .active_sort').css('border-bottom','1px solid #B47F31');	
    });
    $('.item_sort .dropdown_sort li a').click(function() {
    	$('.item_sort .dropdown_sort li a').removeClass('active');
    	$('.item_sort').children('.dropdown_sort').removeClass('active');
    	$(this).addClass('active');
    	var value = $(this).text();
    	$('#current_value').text(value);
    });
    // $('body:not(.item_sort)').click(function() {
    // 	$('.item_sort').children('.dropdown_sort').addClass('hidden');
    // });
// $(function(){
//   $('#ex2').slider({
//        formater: function(value) {
//          return 'Current value: '+value;
//        }
//   }).on('slideStop', function(ev){
//      $(this).val($(this).data('slider').getValue());
//   });

// var start = $('#ex2').slider()
//     .on('slide', inputChange)
//     .data('slider');

// var inputChange = function() {
//   $('#price_min').attr('value', start.getValue())
// };

});