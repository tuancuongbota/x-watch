$(document).ready(function () {
	$('.owl-slideshow-item').owlCarousel({
		loop:true,
		nav:false,
		navText:[ "‹","›"],
		dots:true,
		pagination:true,
      autoHeight:true,
		autoplay: true,
		autoplayTimeout:4000,
		items:1,
		lazyLoad: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});
   $('.owl-news-item').owlCarousel({
		loop:true,
		nav:false,
		navText:[ "‹","›"],
		dots:false,
      autoHeight:true,
		autoplay: false,
		autoplayTimeout:4000,
		items:3,
		margin:15,
		lazyLoad : true,
		responsive:{
			  0:{
	              items:1,
	          },
	          380:{
	              items:1,
	          },
	          500:{
	              items:2,
	              
	          },
	          1170:{
	              items:3,
	              
	          },  

	     }
	});
   function scroll_pos(element_id,rate_screen){
      if (st > ( element_id.offset().top - $(window).height()/rate_screen) ) {
         element_id.addClass('hello');      
      }else{ 
         if(st < element_id.offset().top )  {
            element_id.removeClass('hello');    
         }
      }
   }
   
   var lastScrollTop = 0;
      $(window).scroll(function () {
         st = $(this).scrollTop();
         Itid = $('#Itid').val();

         if ($(".bota_block_video_home").length > 0){
            scroll_pos($('.bota_block_video_mix_right'),2);
         }
         lastScrollTop = st;
      });
      ;$('#one_video_play_area .video_item_inner_has_img').click(function(){
         var img_video = $(this).find('img');
         var link_video = img_video.attr('link-video');
         
         var video = '<iframe src="'+ link_video +'"></iframe>';
         $(this).html('<iframe src="'+link_video+'?rel=0&autoplay=1" width="100%" height="307px" frameborder="0" allowfullscreen="false">');
         $(this).removeClass('video_item_inner_has_img');
      });
      
      
      function reload_video(link_video){
         var video = '<iframe src="'+ link_video +'"></iframe>';
         $('#one_video_play_area .video_item_inner').html('<iframe src="'+link_video+'?rel=0&autoplay=1" width="100%" height="200" frameborder="0" allowfullscreen="false">');
         $('#one_video_play_area .video_item_inner').removeClass('video_item_inner_has_img');
      };
      $('.block_address .tablinks').click(function(){
         var id = $(this).attr('data-id');
         $('.block_address .tablinks').removeClass('active');
         $(this).addClass('active');
     
         $('.block_address .tabcontent').removeClass('display_open');
         $('.block_address #region_'+id).addClass('display_open');
     
     });
     $(window).scroll(function(){
		if ($(this).scrollTop() > 138) {
			$('#nav-mainmenu').addClass("scroll-menu");
		}else{
			$('#nav-mainmenu').removeClass("scroll-menu");
		}
      });
      if ($(window).scrollTop() > 138) {
         $('#nav-mainmenu').addClass("scroll-menu");
      }else{
         $('#nav-mainmenu').removeClass("scroll-menu");
      }
      expand_filter();	
      function expand_filter(){
         $('.click-mobile').click(function(e){
            var id = $(this).attr('data-id');
               $( this ).toggleClass( "active" );
               $('#'+id).toggle("slow");
         });
      }
      $('nav#menu').mmenu();
});
$(function () {
	var width = $(window).width();
	$(window).resize(function() {
		width = $(window).width();
	});
	var lastScrollTop = 0;

	$(window).scroll(function () {
		st = $(this).scrollTop();
		Itid = $('#Itid').val();
    if(width > 1024){ 
    	if (st >80) {
    		if(st <  lastScrollTop) {
    			$(".bota_header_menu").removeClass("slide-down").addClass("slide-up").css({position:'fixed',top:'0px'});
    		}
    		else {
    			$(".bota_header_menu").removeClass("slide-up").addClass("slide-down").css({position:'initial'});
    		}

    	} else {
    		$(".bota_header_menu").css({position:'initial'}).removeClass("slide-up").removeClass("slide-down");
    	}
    }else{ 
    	if (st >150) {

    		if(st <  lastScrollTop) {
    			$(".bota_header_menu").removeClass("m-slide-down").addClass("m-slide-up").css({position:'fixed',top:'0px',width:'100%'});
                        if(Itid == 1)
                        	$('body').css('margin-top','113px');                
                        else
                        	$('body').css('margin-top','93px');                
                    }
                    else {
                    	$(".bota_header_menu").removeClass("m-slide-up").addClass("m-slide-down").css({position:'initial'});
                $('body').css('margin-top','0px');
            }
            
        } else {
            $(".bota_header_menu").css({position:'initial'}).removeClass("m-slide-up").removeClass("m-slide-down");
            $('body').css('margin-top','0px');
        }
    }
    lastScrollTop = st;

});
});