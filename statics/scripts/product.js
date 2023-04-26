$(document).ready(function () {

var sync2 = $("#sync2");
sync2.on('initialized.owl.carousel', function() { 
    addClassCurrent( 0 );
}).owlCarousel({
    margin:3,
    items : 4,
    itemsDesktop      : [1199,1],
    itemsDesktopSmall     : [979,1],
    itemsTablet       : [768,1],
    itemsMobile       : [479,1],
    pagination:false,
    navText : ["‹","›"],
    loop: false,
    autoplay:false,
    responsive:{
        0:{
            items:3,
        },
        400:{
            items:4,
        },
        500:{
            items:4,
        },
        600:{
            items:3,
        },
        700:{
            items:3,
        },
        800:{
            items:4,
        },
        900:{
            items:4,
        },
        1000:{
            items:4,
        },
        1100:{
            items:4,
        }
    }
}).on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
     addClassCurrent( number );
    var img_current = sync2.find(".owl-item").eq(number).find("img").attr('src');
    img_current = img_current.replace('/small/','/large/');
     $("#Zoomer img").fadeTo(300,0.30, function() {
          $("#Zoomer img").attr("src",img_current);
          
          
      }).fadeTo(300,1);
     $("#Zoomer").attr("href",img_current);
     $("#Zoomer").attr("data-image",img_current);
     MagicZoom.refresh();
});
function syncPosition( index ) {
    addClassCurrent( index );
    var itemsNo = sync2.find(".owl-item").length; 
    var visibleItemsNo = sync2.find(".owl-item.active").length; 
    if (itemsNo === visibleItemsNo) {
        return "stayStill";
    }
    var visibleCurrentIndex = sync2.find(".owl-item.active").index( sync2.find(".owl-item.current") );
    if (visibleCurrentIndex == 0 && index != 0) {
            return index - 1;
    }
    if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
            return index - visibleItemsNo + 2;
    }

    return "stayStill";
}
function addClassCurrent( index ) {
    sync2.find(".owl-item").removeClass("current").eq( index ).addClass("current");
}
$('[data-fancybox="imagesProduct"]').fancybox({
    thumbs : {
      autoStart: true,
      axis: 'x'
    }
  });
  function slideshow_ordercart(){
    $('#products_orders').owlCarousel({
          loop: true,
          autoplay: true,
          items: 1,
          nav: false,
    });
  }
  slideshow_ordercart();
});