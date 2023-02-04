const $ = require('jquery');
const jQuery = require('jquery');

export function openm(){
	$('.sitemap_mobile').animate({'marginLeft':'260'},200);
	$('.sitemap_mobile2').animate({'marginLeft':'260'},200);
	$('.sitemap_close').slideDown('fast');
		$('.sitemap_close').css('display','block');
		$('.sitemap_mobile_bg').css('display','block');
}
export function closem(){
	$('.sitemap_mobile').animate({'marginLeft':'0'},100);
	$('.sitemap_mobile2').animate({'marginLeft':'0'},100);
	$('.sitemap_close').slideUp('fast');
		$('.sitemap_close').css('display','none');
		$('.sitemap_mobile_bg').css('display','none');
}

$(document).ready(function(){
	$('.sitemap_mobile').animate({'marginRight':'0'},100);
	$('.sitemap_close').css('display','none');
});


$(function(){
	var article = $('.sitemap_1li');
		article.addClass('hide');
		article.find('.sitemap_2dul').slideUp(100);
	$('.sitemap_1li .sitemap_2dli_open').click(function(){
		var myArticle=$(this).parents('.sitemap_1li:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show');
			article.find('.sitemap_2dul').slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.sitemap_2dul').slideDown(100);
		}else{
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.sitemap_2dul').slideUp(100);
		}
	});
});

export function link_click2(index){
		if(index == 1){
			$('#select_link01').css('display','block');
			$('#select_link02').css('display','none');

		} else {
			$('#select_link01').css('display','none');
			$('#select_link02').css('display','block');
		}
}

export function select_tab(){
	if($('.pgtab').css('display')=='none'){
		$('.pgtab').slideDown('fast');
	} else {
		$('.pgtab').slideUp('fast');
	}
}

/* 메뉴고정 */
$(function(){
	var menupos=$('#header').offset().top;
	$(window).scroll(function(){
	if($(window).scrollTop()>=menupos){
	$('#header').css('position','fixed'); /* 스크롤시 고정 */
	$('#header').css('top','0px');
	$('#header #hd').css('height','60px');
	$('#header #logo').css('top','0px');
	$('#header #logo img').css('height','60px');
	$('#header .pcv').css('display','none');
	$('#header .pcv2').css('margin-top','10px');
	$('#header .gnb').css('display','block');
	$('#header #menuopen .menuopen').css('display','block');
	$('#btn_top').fadeIn(300);} /*상단이동후 btn이 fade-in 되는시간*/
	else{
	$('#header').css('position','absolute'); /* 스크롤전 기본 */
	$('#header').css('top','0px');
	$('#header #hd').css('height','105px');
	$('#header #logo').css('top','35px');
	$('#header #logo img').css('height','60px');
	$('#header .pcv').css('display','block');
	$('#header .pcv2').css('display','block');
	$('#header .pcv2').css('margin-top','54px');
	$('#header .gnb').css('display','block');
	$('#header #menuopen .menuopen').css('display','none');
	$('#btn_top').fadeOut(300); /*상단이동후 btn이 fade-out 되는시간*/
	}
});});