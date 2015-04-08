$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      slideSpeed : 400,
      paginationSpeed : 400,
      singleItem:true,
      pagination : false,
      autoPlay: true,
//      navigation : true, // Show next and prev buttons

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
  //Sort random function
//    function random(owlSelector){
//    owlSelector.children().sort(function(){
//        return Math.round(Math.random()) - 0.5;
//    }).each(function(){
//      $(this).appendTo(owlSelector);
//    });
//  }//    function random(owlSelector){
//    owlSelector.children().sort(function(){
//        return Math.round(Math.random()) - 0.5;
//    }).each(function(){
//      $(this).appendTo(owlSelector);
//    });
//  }
 
 
      $("#owl-demo2").owlCarousel({
      pagination : false,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
//      navigation : true, // Show next and prev buttons
//      navigationText: [
//      "<i class='icon-chevron-left icon-white'></i>",
//      "<i class='icon-chevron-right icon-white'></i>"
//      ],
//    beforeInit : function(elem){
//      //Parameter elem pointing to $("#owl-demo")
//      random(elem);
//    }
  });

 
//  $("#owl-demo2").owlCarousel({
//    navigationText: [
//      "<i class='icon-chevron-left icon-white'></i>",
//      "<i class='icon-chevron-right icon-white'></i>"
//      ],
//    beforeInit : function(elem){
//      //Parameter elem pointing to $("#owl-demo")
//      random(elem);
//    }
// 
//  });
});