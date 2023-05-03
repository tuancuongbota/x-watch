$(document).ready( function(){
	var id =  $('#record_id').val();
	var cmt_module = $('#_cmt_module').val();
	var cmt_view = $('#_cmt_view').val();
	var cmt_return = $('#_cmt_return').val();
	change_rating();

	$('.btn-comment-mb-rep').click(function(){
		var id_cmt = $(this).parents().attr('id');
		id_cmt = id_cmt.replace('comment_reply_form','cmt_content')
		if(!notEmpty(id_cmt,"Bạn phải nhập nội dung"))
		return false;
		$(this).parent().find('.full-screen-mobile').toggleClass('display-open');
		$(this).parent().find('.wrap_r').toggleClass('display-open');
	});

	$('.btn-comment-mb').click(function(){
		if(!notEmpty("cmt_content","Bạn phải nhập nội dung"))
		return false;
		$('.full-screen-mobile').toggleClass('display-open');
		$('.wrap_r').toggleClass('display-open');
	});

	$('.close-md-comment').click(function(){
		$('.full-screen-mobile').removeClass('display-open');
		$('.wrap_r').removeClass('display-open');
	});

	$('.full-screen-mobile').click(function(){
		$('.full-screen-mobile').removeClass('display-open');
		$('.wrap_r').removeClass('display-open');
	});
    display_hidden_comment_form();
});
var width = $(window).width();
$(window).resize(function() {
	width = $(window).width();
	
});
function submit_comment()
{
	
	$('label.label_error').prev().remove();
	$('label.label_error').remove();
	if(!notEmpty("cmt_name","Bạn phải nhập họ tên"))
	{
		return false;
	}
	if(!notEmpty("cmt_email","Bạn phải email"))
		return false;
	if(!isPhone("cmt_email","Số điện thoại nhập không hợp lệ")){
		return false;
	}

	var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('#cmt_email').val();
    var length_phone = $('#cmt_email').vlength;
    

    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
            alert('Số điện thoại của bạn không đúng định dạng!');
            return false;
        }else{
        }
    }else{
        alert('Bạn chưa điền số điện thoại!');
        return false;
    }

 	url = $('#link_reply_form').val();
	var posting = $.post( url, { 
		name: $('#cmt_name').val(), 
		email: $('#cmt_email').val(), 
		rate: $('#rating_value').val(), 
		content: $('#cmt_content').val(), 
		record_id: $('#_cmt_record_id').val(), 
		parent_id: $('#parent_id').val(), 
		linkurlall: $('#linkurlall').val(), 
		"return": $('#_cmt_return').val()

	} );
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module').val();
	var cmt_view = $('#_cmt_view').val();
	var cmt_return = $('#_cmt_return').val();
	posting.done(function( data ) {
		alert('Cảm ơn bạn đã gửi comment, chúng tôi sẽ phê duyệt comment của bạn nhanh nhất !');
		$('#cmt_name').val('');
		$('#cmt_email').val('');
		$('#cmt_content').val('');
	});
}
function submit_reply(comment_id){
	if(!notEmpty2('cmt_content_'+comment_id,'Nội dung','Bạn phải nhập nội dung')){
		return false;
	}
	  url = $('#link_reply_form_'+comment_id).val();
	var posting = $.post( url, { 
		name: $('#cmt_name_'+comment_id).val(), 
		email: $('#cmt_email_'+comment_id).val(), 
		content: $('#cmt_content_'+comment_id).val(), 
		record_id: $('#_cmt_record_id_'+comment_id).val(), 
		parent_id: $('#parent_id_'+comment_id).val(), 
		cmt_module: $('#_cmt_module_'+comment_id).val(), 
		cmt_view: $('#_cmt_view_'.comment_id).val(),
		linkurlall: $('#linkurlall').val(), 
		"return": $('#_cmt_return_'+comment_id).val()

	} );
	var id = $('#record_id').val();
	var cmt_module = $('#_cmt_module_'+comment_id).val();
	var cmt_view = $('#_cmt_view_'+comment_id).val();
	var cmt_type = $('#_cmt_type_'+comment_id).val();
	var cmt_return = $('#_cmt_return_'+comment_id).val();


	console.log(id);
	console.log(cmt_module);
	console.log(cmt_view);
	console.log(cmt_type);
	console.log(cmt_return);
}
function display_hidden_comment_form(){
	$('.button_reply').click(function(){
		$(this).parent().next().removeClass('hide');
	});
	$('.button_reply_close').click(function(){
		$(this).parent().parent().parent().addClass('hide');
	});
}

function change_rating(){
	var rating_disable = $('#rating_disable').val();
	
		$('#ratings i').hover(function(){
			if(rating_disable == '0'){
				value = $(this).attr('value');
				for(var i = 1; i <= 5; i ++){
					if(i <= value){
						$('#rate_'+i).removeClass('star_off').addClass('star_on');
					}else{
						$('#rate_'+i).removeClass('star_on').addClass('star_off');
					}
				}
			}
		});	
	
	$('#ratings i').click(function(){
		if(rating_disable == '0'){
			value = $(this).attr('value');
			$('#rating_value').val(value);
			rating_disable = 1;	
			
		}
	});	
};
function notEmpty(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length == 0){
		invalid(elemid,helperMsg);
		elem.focus(); 
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function notEmpty2(elemid,txt_default, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length == 0){
		invalid(elemid,helperMsg);
		elem.focus(); 
		return false;
	}else if(elem.val() == txt_default){
		invalid(elemid,helperMsg);
		elem.focus(); 
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function notEmptyTextarea(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val().length==0){
		invalid(elemid,helperMsg);
		elem.focus();
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function isPhone(elemid, helperMsg){
	elem  = $('#'+elemid);
	var numericExpression = /^[0-9 .]+$/;
	if(elem.val().match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}

function isPhone2(elemid){
	var numericExpression = /^[0-9 .]+$/;
	if(elemid.match(numericExpression)){
		return true;
	}else{
		return false;
	}
}
function notValue(elemid, helperMsg){
	elem  = $('#'+elemid);
	if(elem.val()=='0'){
		invalid(elemid,helperMsg);
		elem.focus(); 
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
function isUsername(elemid, helperMsg){
	elem  = $('#'+elemid);
	var strExp = /^[0-9a-zA-Z_-]+$/;
	if(elem.val().match(strExp)){
		valid(elemid);
		return true;
	}else{
		invalid(elemid,helperMsg);
		return false;
	}
}

function valid(element){
	$("#"+element).removeClass("redborder");
	$("#"+element).parent().find('.label_error').prev().remove();
	$("#"+element).parent().find('.label_error').remove();
	$("#"+element).parent().find('.label_success').prev().remove();
	$("#"+element).parent().find('.label_success').remove();
}

function invalid(element,helperMsg){
	$("#"+element).parent().find('.label_error').prev().remove();
	$("#"+element).parent().find('.label_error').remove();
	$("#"+element).parent().find('.label_success').prev().remove();
	$("#"+element).parent().find('.label_success').remove();
	$("#"+element).addClass("redborder");
	$("#"+element).focus();
        alert(helperMsg);
}