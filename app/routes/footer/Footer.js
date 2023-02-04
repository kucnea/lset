import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useState, useEffect } from "react";
import NoEmail from "app/routes/siteMap/SiteMap";
import ReactDOM from 'react-dom';
import * as vars from "app/models/js/variable.js";
import {smartskin_HomeButtonAdd} from "app/models/js/common.js";

// href="javascript:smartskin_HomeButtonAdd('구리언어심리상담센터','cm_id=bookmark');"

// onClick="javascript:window.open('http://www.gurislp.com/board/bbs/noemail.php','','width=640,height=300,scrollbars=auto,resizable=yes');"
export function Footer() {
    const newWindow = () =>{
        window.open("", "", "width=640,height=300");
        ReactDOM.render(<NoEmail />, document.getElementById("noEmail"));
    }

    const githubMin = "https://kucnea.github.io/";
    
    const goToTop = () => {
        window.pageYOffset = 0;
        document.getElementById('btn_top').style.display="block";
    }

    const introduceOpen = () => {
        if(document.getElementById('introLi').className==="sitemap_1li sitemap01 first show"){
            document.getElementById('introLi').className="sitemap_1li sitemap01 first hide";
            document.getElementById('sitemap_2dul').style.display="none";
        }else{
            document.getElementById('introLi').className="sitemap_1li sitemap01 first show";
            document.getElementById('sitemap_2dul').style.display="block";
        }
    }

    const communityOpen = () => {
        if(document.getElementById('commuLi').className==="sitemap_1li sitemap04 show"){
            document.getElementById('commuLi').className="sitemap_1li sitemap04 hide";
            document.getElementById('sitemap_2dulc').style.display="none";
        }else{
            document.getElementById('commuLi').className="sitemap_1li sitemap04 show";
            document.getElementById('sitemap_2dulc').style.display="block";
        }
    }

    const closeSiteMap = (event) => {
        if(event.target.id === 'sitemap_mobile_bg_t' || event.target.id === 'sitemap_close_i'){
            $('.sitemap_mobile').animate({'marginLeft':'0'},200);
            $('.sitemap_mobile2').animate({'marginLeft':'0'},200);
            $('.sitemap_close').slideDown('fast');
            $('.sitemap_close').css('display','none');
            $('.sitemap_mobile_bg').css('display','none');
        }
        
    }

    const forceCloseSiteMap = () => {
        $('.sitemap_mobile').animate({'marginLeft':'0'},200);
        $('.sitemap_mobile2').animate({'marginLeft':'0'},200);
        $('.sitemap_close').slideDown('fast');
        $('.sitemap_close').css('display','none');
        $('.sitemap_mobile_bg').css('display','none');
    }

    useEffect(()=>{
        $(function(){
          var menupos=$('#header').offset().top;
          $(window).scroll(function(){
          if($(window).scrollTop()>=menupos){
            $('#btn_top').css('display','block');
            $('#btn_top').fadeIn(300); /*상단이동후 btn이 fade-in 되는시간*/
          }
          else{
            $('#btn_top').css('display','none');
            $('#btn_top').fadeOut(300); /*상단이동후 btn이 fade-out 되는시간*/
          }
        });});
      },[]);    

  return (
    <>
    <div id="fotter_wrap">
        <hr />
        <div id="fotter_link">
        <div className="mobilev">
            {/*common.css에서 경로설정, 기본경로 /board/img/icon_mobile_screen.png --##>
        <a href="javascript:smartskin_HomeButtonAdd('구리언어심리상담센터','cm_id=bookmark');"><img src="http://www.gurislp.com/board/img/sns_btn_desktop_over.png" alt="바로가기 아이콘 등록"/></a> 
    <a href="m.blog.naver.com" ><img src="http://www.gurislp.com/board/img/sns_btn_blog_over.png" alt="네이버 블로그"/></a> 
    <!--<a href="m.cafe.naver.com" ><img src="http://www.gurislp.com/board/img/sns_btn_ncafe_over.png" alt="네이버 카페"/></a> --##>
    <a href="https://m.facebook.com/ihomet" ><img src="http://www.gurislp.com/board/img/sns_btn_facebook_over.png" alt="페이스북"/></a>*/}
        </div>
        <div className="address_quick">
            <Link to="/board/introduce/center">
            치료실소개
            </Link>
            {/*<a href="javascript:;" onclick="javascript:window.open('http://www.gurislp.com/board/bbs/privacy.php','','width=640,height=720,scrollbars=yes,resizable=yes');">개인정보취급방침</a>
            <a href="javascript:;" onclick="javascript:window.open('http://www.gurislp.com/board/bbs/term.php','','width=640,height=720,scrollbars=yes,resizable=yes');">이용약관</a>*/}
            <Link to="/board/introduce/comming">
            찾아오시는 길
            </Link>
            <Link
            onClick={() => newWindow}
            >
            <span
                title="본 웹사이트는 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단 수집되는 것을 거부합니다."
                alt="이메일주소 무단수집 거부"
            >
                이메일주소무단수집거부
            </span>
            </Link>
            {/*<dl className="pcv">
                <dt id="family_site">바로가기</dt>
                <dd>
                    <a href="http://naver.com" target="_blank">바로가기1</a>
                    <a href="http://daum.net" target="_blank">바로가기2</a>
                </dd>
            </dl>*/}
        </div>
        </div>
        <div id="fotter">
        <div id="fotter_in">
            <div id="fotter_logo">
            <img
                alt={vars.REACT_APP_CENTER_NAME}
                src={vars.REACT_APP_URL + '/image/toplogo.png'}
            />
            </div>
            <div id="fotter_copy">
            <address>
                <b>{vars.REACT_APP_CENTER_NAME}</b> <br />
                <br />
                <span>
                주소 : {vars.REACT_APP_CENTER_ADR_1} |
                대표 : {vars.REACT_APP_CENTER_CEO}
                </span>
                <br />
                <span>
                전화 : {vars.REACT_APP_CENTER_TEL} | 팩스 : {vars.REACT_APP_CENTER_FAX} | 사업자등록번호 :
                {vars.REACT_APP_CENTER_CODE}
                </span>
            </address>
            <span>
                COPYRIGHT © 2023 ALL RIGHTS RESERVED BY 이민호.
            </span>
            <span style={{ marginLeft: 10 }}>
                <Link
                title="이민호"
                to={() => {window.open(githubMin)}}
                >
                <img
                    alt="이민호"
                    src={vars.REACT_APP_URL + '/image/githubIcon.png'}
                    onClick={() => {window.open(githubMin)}}
                    style={{width:"54px",height:"15px"}}
                />
                </Link>
            </span>
            </div>
            <div id="fotter_sns">
            <Link to="/">
                <img
                alt={vars.REACT_APP_CENTER_NAME}
                src={vars.REACT_APP_URL + '/image/toplogo.png'}
                />
            </Link>
            {/* <a href="http://cafe.naver.com/" target="_blank" ><img src="http://www.gurislp.com/board/img/sns_btn_ncafe_over.png" alt="구리언어심리상담센터 카페"/></a> 
    <a href="https://facebook.com/" target="_blank" ><img src="http://www.gurislp.com/board/img/sns_btn_facebook_over.png" alt="구리언어심리상담센터 페이스북"/></a>*/}
            </div>
        </div>
        </div>
    </div>
    <div id="btn_top">
        <Link onClick={() => goToTop()} className="anchorLink">
        <img alt="Go to top" src={vars.REACT_APP_URL + '/image/btn_top.png'} />
        </Link>
    </div>
    <div id="sitemap_mobile_bg_t" className="sitemap_mobile_bg" onClick={(event) => closeSiteMap(event)} />
    <div className="sitemap_mobile" id="sitemap" style={{ marginRight: 0 }}>
        <div className="sitemap_in">
        <div className="sitemap">
            <h2 className="sound_only" id="sitemap_title">
            {vars.REACT_APP_CENTER_NAME} 사이트맵
            </h2>
            <ul>
            <li className="sitemap_1li tit hide">
                {" "}
                <Link to="/">
                <img
                    alt="구리언어심리상담센터"
                    src={vars.REACT_APP_URL + '/image/toplogo_w.png'}
                />
                </Link>
            </li>
            <li id="introLi" className="sitemap_1li sitemap01 first hide">
                <Link className="sitemap_1da" onClick={()=>introduceOpen()}>
                치료실 소개
                </Link>
                <Link id="introOpen" className="sitemap_2dli_open" onClick={()=>introduceOpen()}>
                <span className="sound_only">치료실소개 하위메뉴 열기</span>
                </Link>
                <ul
                className="sitemap_2dul"
                id="sitemap_2dul"
                style={{ display: "none" }}
                >
                <li>
                    <Link to="/board/introduce/center" onClick={() => forceCloseSiteMap()}>
                    <span>치료실 소개</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/introduce/teacher/teacher" onClick={() => forceCloseSiteMap()}>
                    <span>치료사 소개</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/introduce/centermore" onClick={() => forceCloseSiteMap()}>
                    <span>센터 둘러보기</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/introduce/comming" onClick={() => forceCloseSiteMap()}>
                    <span>찾아오시는 길</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/introduce/boucher/boucherbaldal" onClick={() => forceCloseSiteMap()}>
                    <span>바우처 안내</span>
                    </Link>
                </li>
                </ul>
            </li>
            <li className="sitemap_1li sitemap02 hide">
                <Link to="/board/programs/detail" className="sitemap_1da" onClick={() => forceCloseSiteMap()}>
                치료/검사 프로그램
                </Link>
            </li>
            <li className="sitemap_1li sitemap02 hide">
                <Link to="/board/introduce/boucher/boucherbaldal" className="sitemap_1da" onClick={() => forceCloseSiteMap()}>
                바우처 안내
                </Link>
            </li>
            <li className="sitemap_1li sitemap03 hide">
                <Link to="/board/consult/askanswer/detail" className="sitemap_1da" onClick={() => forceCloseSiteMap()}>
                상담/문의
                </Link>
            </li>
            <li id="commuLi" className="sitemap_1li sitemap04 hide">
                <Link className="sitemap_1da" onClick={()=>communityOpen()}>
                커뮤니티
                </Link>
                <Link className="sitemap_2dli_open" onClick={()=>communityOpen()}>
                <span className="sound_only">커뮤니티 하위메뉴 열기</span>
                </Link>
                <ul
                className="sitemap_2dul"
                id="sitemap_2dulc"
                style={{ display: "none" }}
                >
                <li>
                    <Link to="/board/community/notice/board">
                    <span>공지사항</span>
                    </Link>
                </li>
                <li>
                    <Link to="/board/community/usualquestion">
                    <span>자주 묻는 질문</span>
                    </Link>
                </li>
                </ul>
            </li>
            </ul>
            <div className="telnmail">
            <Link
                style={{
                background: "rgb(250, 250, 250)",
                padding: "15px 10px",
                borderRadius: 5,
                border: "1px solid rgb(239, 239, 239)",
                borderImage: "none",
                color: "rgb(51, 51, 51)",
                fontWeight: "bold"
                }}
                href="#"
                onClick={()=>window.location.href='tel:' + vars.REACT_APP_CENTER_TEL}
            >
                대표전화 : {vars.REACT_APP_CENTER_TEL}
            </Link>
            </div>
            <div className="mobilev_side">
            {/*common.css에서 경로설정, 기본경로 /board/img/icon_mobile_screen.png */}
            <a
                style={{
                background: "rgb(139, 186, 31)",
                padding: "15px 14px",
                borderRadius: 5,
                border: "1px solid rgb(139, 186, 31)",
                borderImage: "none",
                color: "rgb(255, 255, 255)",
                fontWeight: "bold"
                }}
                href={() => smartskin_HomeButtonAdd(vars.REACT_APP_CENTER_NAME,'cm_id=bookmark')}
            >
                <img
                style={{ width: "12%" }}
                alt="홈 화면에 바로가기 추가"
                src={vars.REACT_APP_URL + '/image/icon_mobile_screen.png'}
                />{" "}
                홈 화면 바로가기 추가{" "}
                <img src={vars.REACT_APP_URL + '/image/btn_desktop_down.png'}/>
            </a>
            {/*<br /><br />
            <a href="http://m.blog.naver.com/khydream7" target="_blank" style="font-weight:bold;  padding:15px 10px; border-radius:5px; border:solid 1px #000; background:#202020"><img src="http://www.gurislp.com/board/img/sns_btn_blog_over.png" alt="블로그 바로가기"  style="width:12%;"/> 블로그 바로가기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="http://www.gurislp.com/board/img/btn_site_go.png" /></a>
        <a href="http://m.cafe.naver.com" target="_blank" ><img src="http://www.gurislp.com/board/img/sns_btn_ncafe_over.png" alt="네이버 카페"/></a>  
        
        <!-- 카카오톡공유  
    <a id="kakao-link-btn" href="javascript:;"><img src="http://www.gurislp.com/board/img/sns_btn_kakao_over.png" alt="카카오톡" className="last"  /></a>  

        

    
    <!-- //카카오톡공유*/}
            </div>
            {/* <div className="telnmail">
            <a
                style={{
                background: "rgb(139, 186, 31)",
                padding: "15px 14px",
                borderRadius: 25,
                border: "1px solid rgb(139, 186, 31)",
                borderImage: "none",
                color: "rgb(255, 255, 255)",
                fontWeight: "bold"
                }}
                href={() => common.smartskin_HomeButtonAdd(vars.REACT_APP_CENTER_NAME,'cm_id=bookmark')}
            >
                블로그 바로가기
            </a>
            </div> */}
            <div className="go_admin">
            <Link to="/board/admin/adminpage" style={{ color: "rgb(112, 173, 221)" }}>
                관리자
            </Link>
            </div>
            <ul className="tnb" style={{ marginTop: 30 }}>
            {/*<li><a href="http://www.gurislp.com/board/bbs/register.php">Join</a></li>*/}
            <li>
                <Link id="goToHome" to="/" onClick={() => forceCloseSiteMap()}>홈</Link>
            </li>
            <li>
                <Link to="/" onClick={() => forceCloseSiteMap()}>
                로그인
                </Link>
            </li>
            </ul>
            {/* <div className="go_admin"><a href="http://www.gurislp.com/board/adm/">관리자</a></div>
            <ul className="tnb">
                <li><a href="http://www.gurislp.com/board/bbs/register.php">Join</a></li>
                <li><a href="http://www.gurislp.com/board/bbs/index.php"><b>홈</b></a></li>
                <li><a href="http://www.gurislp.com/board/bbs/login.php"><b>로그인</b></a></li> 
            </ul>*/}
        </div>
        <div
            className="sitemap_close"
            id="sitemap_close"
            style={{ display: "none" }}
            onClick={(event) => closeSiteMap(event)}
        >
            <Link>
            <img
                id="sitemap_close_i"
                onClick={(event) => closeSiteMap(event)}
                alt="사이트맵 닫기"
                src={vars.REACT_APP_URL + '/image/gnbclose.png'}
            />
            </Link>
        </div>
        </div>
    </div>
    </>
  );
}

export default Footer;