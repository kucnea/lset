import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useState, useEffect } from "react";
import * as vars from "app/models/js/variable.js";
import * as basic from "app/models/js/browser_basic.js";
import SiteMap from "app/routes/siteMap/SiteMap";


export function Header() {  
  // const newWindow = () =>{
  //   window.open("", "", "width=600,height=400");
  //   ReactDOM.render(<SiteMap />, document.getElementById("sitemap_title"));
  // }
  const newWindow = () => {
    $('.sitemap_mobile').animate({'marginLeft':'260'},200);
    $('.sitemap_mobile2').animate({'marginLeft':'260'},200);
    $('.sitemap_close').slideDown('fast');
    $('.sitemap_close').css('display','block');
    $('.sitemap_mobile_bg').css('display','block');

    document.getElementById('sitemap_title').tabIndex = -1;
    document.getElementById('sitemap_title').focus();
    return false;
  }
  

  const addFavorite = useCallback(() => {
    // window.favorite();
  
    // const title = document.title;
    // const url = window.location.href;
    // const message = `Press Ctrl+D to add "${title}" to your favorites`;

    // window.prompt(message, url);
    var url = vars.REACT_APP_REAL_URL;
    var title = vars.REACT_APP_CENTER_NAME;

    if(document.all) {
      //IE
      window.external.AddFavorite(url, title);
      } else if(window.chrome) {
      //Chrome
      var message = title+'를 즐겨찾기에 추가하시겠습니까?';
      window.prompt(message, url);
      } else if (window.sidebar)  {
      //firefox
      window.sidebar.addPanel(title, url, "");
      }

  },[]);  
  
  
  const [naviNum, setNaviNum] = useState(0);  

  const menuNavi = (setNum) => {
    if(setNum !== 0 ) setNaviNum(setNum);
    document.getElementById('menu'+setNum).className = "gnb1d gnb0"+setNum+" first active";
    // document.getElementById('menusub'+setNum).style = "display:block; overflow:hidden; max-height:52px; margin-top:0px; padding-bottom:0px; margin-bottom:0px transition:max-height 0.5s ease-in-out;";
    document.getElementById('menusub'+setNum).style = "display:block;";
    // if(setNum === 2 ) document.getElementById('menusubsub'+setNum).style = "display:block;";
    
  }

  const menuNaviOut = (setNum) => {
    if(setNum !== 0 ) setNaviNum(0);

    document.getElementById('menu'+setNum).className = "gnb1d gnb0"+setNum;
    document.getElementById('menusub'+setNum).style = "display:none;";
    // if(setNum === 2 ) document.getElementById('menusubsub'+setNum).style = "display:none;";
  }

  useEffect(()=>{
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
      $('#header .gnb').css('margin-top','-28px');
      $('#header #menuopen .menuopen').css('display','block');
      }
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
      $('#header .gnb').css('margin-top','-28px');
      $('#header #menuopen .menuopen').css('display','none');
      }
    });});


  },[]);

  return (
    <div id="header">
        <div id="hd">
          <h1 id="hd_h1">{vars.REACT_APP_CENTER_NAME}</h1>
          <div id="hd_wrapper">
            <ul id="tnb" className="pcv" style={{ marginTop: "0", right : "5px" }}>
              <li>
                <Link to="/">HOME</Link> |{" "}
              </li>
              <li>
                <Link
                  title="즐겨찾기 추가"
                >
                  <div href="#" onClick={()=>addFavorite()}>
                  <span style={{ color: "#f3c71d" }}>★</span> 즐겨찾기
                  </div>
                </Link>
                ㅣ
              </li>
              {/*<li><a href="http://blog.naver.com" target="_blank">블로그</a> | </li>-*/}
              {/*<li><a href="http://www.gurislp.com/board/bbs/login.php">로그인</a>ㅣ</li> */}
              <li>
                <Link to="/board/admin/adminpage">
                  <b>관리자</b>
                </Link>
              </li>
              {/*<li><a href="http://www.gurislp.com/board/bbs/faq.php">FAQ</a></li>
                  <li><a href="http://www.gurislp.com/board/bbs/qalist.php">1:1문의</a></li>
                  <li><a href="http://www.gurislp.com/board/bbs/new.php">새글</a></li> */}
            </ul>
            {/* <ul id="tnb2" className="pcv">
              <li>
                <Link to="/">
                  블로그
                </Link>
              </li>
            </ul> */}
            <div id="gnb_wrap">
              <div id="logo">
                  
                  <Link to="/">
                    <img
                      src={vars.REACT_APP_URL + '/image/toplogo.png'}
                      alt={vars.REACT_APP_CENTER_NAME}
                    />
                  </Link>  

              </div>
              <nav id="GNB" className="pcv2" style={{ marginTop: 28 }}>
                <ul className="gnb">
                  <li id="menu1" className="gnb1d gnb01 first" onMouseOver={() => menuNavi(1)} onMouseOut={() => menuNaviOut(1)}>
                    <Link to="/board/introduce/center" className="gnb1d">
                      치료실 소개
                    </Link>
                    <div id="menusub1" className="submenu menu01">
                      <ul>
                        <li>
                          <Link to="/board/introduce/center">
                            <span>치료실 소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/introduce/teacher/teacher">
                            <span>치료사 소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/introduce/centermore">
                            <span>센터 둘러보기</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/introduce/comming">
                            <span>찾아오시는 길</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/introduce/boucher/boucherbaldal">
                            <span>바우처안내</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li id="menu2" className="gnb1d gnb02">
                    <Link to="/board/programs/detail" className="gnb1d" onMouseOver={() => menuNavi(2)} onMouseOut={() => menuNaviOut(2)}>
                      치료/검사프로그램
                    </Link>
                    <div id="menusub2" className="submenu menu02">
                      <ul>
                        <li>
                          <Link to="/board/programs/cure/detail">
                            <span>치료 프로그램</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/programs/psytest/detail">
                            <span>검사 프로그램</span>
                          </Link>
                        </li>
                      </ul>  
                    </div>
                    {/* <div id="menusub2" className="submenu menu02">
                      <ul>
                        <li>
                          <Link to="/board/cureprogram/language">
                            <span>언어치료</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/notice">
                            <span>인지학습</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/play">
                            <span>놀이치료</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/art">
                            <span>미술치료</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/sense">
                            <span>감각통합치료</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/group">
                            <span>그룹치료 </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>가족상담</span>
                          </Link>
                        </li>
                      </ul>
                      <ul style={{paddingTop:"10px"}}>
                      <li>
                          <Link to="/board/cureprogram/family">
                            <span>심리평가</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>발달평가</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>자폐검사</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>기질검사</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>성격검사</span>
                          </Link>
                        </li> 
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>부모양육스트레스검사</span>
                          </Link>
                        </li>
                      </ul>
                      <ul style={{paddingTop:"10px"}}>   
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>mim검사</span>
                          </Link>
                        </li> 
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>애착유형검사</span>
                          </Link>
                        </li> 
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>행동평가</span>
                          </Link>
                        </li> 
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>언어평가</span>
                          </Link>
                        </li> 
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>놀이평가</span>
                          </Link>
                        </li>                                                                                                
                      </ul>
                    </div> */}
                    {/* <div id="menusubsub2" className="submenu menu02">
                      <ul>
                        <li>
                          <Link to="/board/cureprogram/family">
                            <span>검사</span>
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li id="menu3" className="gnb1d gnb03">
                    <Link to="/board/consult/askanswer/board" className="gnb1d" onMouseOver={() => menuNavi(3)} onMouseOut={() => menuNaviOut(3)}>
                      상담/문의
                    </Link>
                    <div id="menusub3" className="submenu menu03">
                      <ul>
                        <li>
                          <Link to="/board/consult/askanswer/board">
                            <span>상담/문의</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li id="menu4" className="gnb1d gnb04">
                    <Link to="/board/community/notice/board" className="gnb1d" onMouseOver={() => menuNavi(4)} onMouseOut={() => menuNaviOut(4)}>
                      커뮤니티
                    </Link>
                    <div id="menusub4" className="submenu menu04">
                      <ul>
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
                    </div>
                  </li>
                  {/*<li className="gnb1d gnb05">
                    <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=notice" className="gnb1d">고객센터</a>
                    <div className="submenu">
                      <ul>
                        <li><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=notice" ><span>공지사항</span></a></li>
                        <li><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=faq" ><span>자주 묻는 질문</span></a></li>
                        <li><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=qna" ><span>Q &amp; A</span></a></li>
                      </ul>
                    </div>
                  </li>*/}
                </ul>
              </nav>
            </div>
            <div id="menuopen">
              <Link
                // onClick="javascript:openm();document.getElementById('sitemap_title').tabIndex = -1;document.getElementById('sitemap_title').focus();return false;"
                onClick={() =>newWindow()}
              >
                <img
                  src={vars.REACT_APP_URL + '/image/sitemap_gnbopen.gif'}
                  alt="사이트맵 열기"
                />
              </Link>
            </div>
            <div id="mapopen">
              <Link to="/board/introduce/comming">
                <img
                  src={vars.REACT_APP_URL + '/image/mapopen.gif'}
                  alt="오시는길"
                />
              </Link>
            </div>
            <div id="callopen">
              <Link href="#" onClick={()=>window.location.href='tel:' + vars.REACT_APP_CENTER_TEL}>
                <img src={vars.REACT_APP_URL + '/image/callopen.gif'} alt="전화" />
              </Link>
            </div>
            <hr />
            <div className="clb" />
          </div>
        </div>
    </div>
  );
}


export default Header;

