// $(document).ready(function() {
    //for zoom

    //Gallery
    jQuery(function(){
        jQuery(".gallery_big").lightBox({
            overlayBgColor: '#FFF',
            overlayOpacity: 0.6,
            imageLoading: 'img/item_slider/lightbox-ico-loading.gif',
            imageBtnClose: 'img/item_slider/lightbox-btn-close.gif',
            imageBtnPrev: 'img/item_slider/lightbox-btn-prev.gif',
            imageBtnNext: 'img/item_slider/lightbox-btn-next.gif',
            containerResizeSpeed: 350,
            txtImage: 'Изображение',
            txtOf: 'из'
        });
    });

  // function changer(){
            $src = $(".gallery.active>div>img").attr("src"); 
            $("#zoom_01").attr({"src": $src, "data-zoom-image": $src});             
    $(".gallery").on('mouseover', function(){
        $(".gallery").removeClass("active");
        $(this).addClass("active");
            $src = $(".gallery.active>div>img").attr("src"); 
            $("#zoom_01").attr({"src": $src, "data-zoom-image": $src});         
    });

    $('#zoom_01').elevateZoom({
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 300,
        lensFadeOut: 300,
    });    
  // }  
  // changer();
// });