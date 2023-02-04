/* ==============================================================================
# 홈버튼 탭 추가 (적용하여 사용중)
* 사용방법 : onClick='smartskin_HomeButtonAdd("스마트스킨","cm_id=bookmark")'
============================================================================== */
const $ = require('jquery');
const jQuery = require('jquery');
var sm_HomeButtonTitle;

export function smartskin_HomeButtonAdd(title,code){
	var sm_LogAnalysisCode = code;
	
	var sm_HomeButtonTitle = encodeURI(sm_HomeButtonTitle);
	var sm_HomePageUri = document.domain;
	var sm_WebRootPathUri = "http://"+document.domain;

    var iconurl = '';
    // var  = '';
    // var  = '';    
    // var  = '';
    // var  = '';
    // var  = '';
    // var  = '';
    // var  = '';
	if(sm_HomePageUri.indexOf("smartskin")>=0){
		sm_HomePageUri = "http://"+document.domain+"/";
	}else{
		if(sm_HomePageUri.indexOf(".")>=0){
			//cafe24
		 alert(sm_HomePageUri);
			sm_HomePageUri = "http://"+document.domain+"/";
		}else{
			//makeshop
			sm_HomePageUri = "http://"+document.domain;
		}
	}
		iconurl="http://"+document.domain+"/board/image/icon_mobile_screen.png";
		
	
	//alert(iconurl);
	var sm_HomeButtonIconUri = sm_WebRootPathUri+$('link[rel="apple-touch-icon-precomposed"]').attr("href");
	var sm_naver_customUrlScheme= "intent://addshortcut?url="+sm_HomePageUri+"%3F"+sm_LogAnalysisCode+"&icon="+iconurl+"&title="+sm_HomeButtonTitle+"&oq="+sm_HomeButtonTitle+"&serviceCode=nstore&version=7#Intent;scheme=naversearchapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.search;end";
	
	var sm_UserAgent = navigator.userAgent.toLowerCase();
	var sm_BlockDevice1 = sm_UserAgent.indexOf("iphone");
	var sm_BlockDevice2 = sm_UserAgent.indexOf("ipad");
	var sm_BlockDevice = sm_BlockDevice1 + sm_BlockDevice2;
	if(sm_BlockDevice == -2){
		//alert(title+'을(를) 홈화면에 추가합니다.\n\n네이버앱이 없는 고객님께서는 네이버앱 설치페이지로 이동됩니다.');
		window.open(sm_naver_customUrlScheme);
	}else{
		alert("아이폰, 아이패드 계열은 직접 홈버튼추가를 사용하셔야합니다.");
	}
}