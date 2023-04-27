$(document).ready(function(){
    $('.bota_all_summary .bota_viewmore').click(function(){
        $('.bota_summary_content_filter').toggleClass('bota_remove_height_smr');
    });
    $('.bota_field_item .bota_field_name .dropdow-svg').click(function(e){
		$('.bota_filters_in_field').addClass('display_off');
		$('.dropdow-svg').removeClass('rotate-drop-dow');
		if($(this).parent().parent().find('.bota_filters_in_field').hasClass('display_open')){
			$(this).parent().parent().find('.bota_filters_in_field').removeClass('display_open');
			$(this).removeClass('rotate-drop-dow');
		}else{
			$(this).parent().parent().find('.bota_filters_in_field').removeClass('display_off').addClass('display_open');
			$(this).addClass('rotate-drop-dow');
		}
		
	});
});