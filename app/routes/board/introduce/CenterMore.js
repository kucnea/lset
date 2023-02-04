import React from 'react';
import { Link } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import { useState, useEffect } from "react";
import * as vars from "app/models/js/variable.js";
import $ from 'jquery';

export function IntroduceCenterMore() {
  const [idxNum,setIdxNum] = useState(0);
  const [idxStyle,setIdxStyle] = useState();
  
  const openFancybox = (setNum) => {
    if(setNum<1) setNum = 14;
    if(setNum>14) setNum = 1;
    setIdxNum(setNum);
    const imgFileNames = ["대기실1.jpg","대기실2.jpg","복도.jpg","언어치료실1.jpg","noticecurecenter1.jpg",
                          "인지학습치료실2.jpg","놀이치료실1.jpg","놀이치료실2.jpg","놀이치료실3.jpg",
                          "미술치료실.jpg","감각통합치료실1.jpg","감각통합치료실2.jpg",
                          "그룹치료실1.jpg","그룹치료실2.jpg",];
    
    document.getElementById('fancybox').style = "display: block;";
    document.getElementById('fancyboxImage').src = vars.REACT_APP_URL + '/image/centermoreImg/'+imgFileNames[setNum-1];
  }

  const closeFancybox = () => {
    document.getElementById('fancybox').style = "display: none;";
  }

  const clickOuter = (event) => {
    if(event.target.id === 'fancybox') closeFancybox();
  }

  useEffect(() => {      

    if(document.getElementById('cm_style')){
      var link = document.getElementById('fd_style');
      link.href = '/styles/css/cm_style.css';
    }else{
        var link = document.createElement('link');
        link.id = 'fd_style';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/cm_style.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
  
    return () => {};
  },[]);

  return (
<>
  {/* PC용 헤드카피*/}
  <div className="subtop">
    <div className="head_copy">
      <h2>
        00 소개
        <br />
        소개두번째줄
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //PC용 헤드카피*/}
  {/* 모바일용 헤드카피*/}
  <div className="mobile_subtop">
    <div className="head_copy">
      <h2>
        00 소개
        <br />
        00 소개
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //모바일용 헤드카피*/}
  <div className="subtop_140" />
  <div className="subtop_u"></div>
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    {<IntroduceSubMenu/>}
    {/* <div className="subtop_u" /> */}

    <div id="left_container_board">
      {/* 게시판 목록 시작 { */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #GNB ul li.gnb01 a {color:#a99808;}\n    #lnb>ul>li.lnb05 a {color:#a99808;}\n    .subNav ul li.lnb05 a {background-color: #89BCC1;}\n    "
        }}
      />
      <div className="hgroup">
        <h1>
          <span>센터 둘러보기</span>
        </h1>
        <p>
          {" "}
          <span className="home">
            <span>HOME</span>
          </span>{" "}
          <span>센터 소개</span> <span className="fb">센터 둘러보기</span>{" "}
        </p>
      </div>
      {/*<p className="bu1">안산점|대구점|성서점|목포점|광주점</p>*/}
      {/* 게시판 목록 시작 { */}
      <div id="bo_gall" style={{ width: "100%" }}>
        <div className="bo_fx"></div>
        <form
          name="fboardlist"
          id="fboardlist"
          action="./board_list_update.php"
          onSubmit="return fboardlist_submit(this);"
          method="post"
        >
          <input type="hidden" name="bo_table" defaultValue="gallery" />
          <input type="hidden" name="sfl" defaultValue="" />
          <input type="hidden" name="stx" defaultValue="" />
          <input type="hidden" name="spt" defaultValue="" />
          <input type="hidden" name="page" defaultValue={1} />
          <input type="hidden" name="sw" defaultValue="" />

          <ul id="gall_ul">
          <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">14 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(1)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/대기실1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(1)}>
                      대기실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">13 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(2)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/대기실2.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(2)}>
                      대기실2
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">12 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(3)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/복도.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(3)}>
                      복도
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">11 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(4)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/언어치료실1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(4)}>
                      언어치료실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">10 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(5)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/noticecurecenter1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(5)}>
                      인지학습치료실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">9 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(6)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/인지학습치료실2.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(6)}>
                      인지학습치료실2
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">8 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(7)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/놀이치료실1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(7)}>
                      놀이치료실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">7 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(8)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/놀이치료실2.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(8)}>
                      놀이치료실2
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">6 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(9)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/놀이치료실3.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(9)}>
                      놀이치료실3
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">5 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(10)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/미술치료실.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(10)}>
                      미술치료실
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">4 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(11)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/감각통합치료실1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(11)}>
                      감각통합치료실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">1 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(12)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/감각통합치료실2.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(12)}>
                      감각통합치료실2
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">3 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(13)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/그룹치료실1.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(13)}>
                      그룹치료실1
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="gall_li " style={{ width: 248 }}>
              <span className="sound_only">2 </span>
              <ul className="gall_con">
                <li className="gall_href">
                  <Link onClick={()=>openFancybox(14)}>
                    <img
                      src={vars.REACT_APP_URL + '/image/centermoreImg/그룹치료실2.jpg'}
                      alt=""
                      width="248px"
                      height={124}
                      style={{}}
                    />{" "}
                  </Link>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 25,
                      fontWeight: "bold"
                    }}
                  >
                    <Link onClick={()=>openFancybox(14)}>
                      그룹치료실2
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
      <input type="hidden" id="is_guest_check" defaultValue="" />
      {/* 페이지 */}
      {/* Add mousewheel plugin (this is optional) */}
      {/* Add fancyBox */}
      <link
        rel="stylesheet"
        href="http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/jquery.fancybox.css?v=2.1.5"
        type="text/css"
        media="screen"
      />
      {/* Optionally add helpers - button, thumbnail and/or media */}
      <link
        rel="stylesheet"
        href="http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/helpers/jquery.fancybox-buttons.css?v=1.0.5"
        type="text/css"
        media="screen"
      />
      <link
        rel="stylesheet"
        href="http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7"
        type="text/css"
        media="screen"
      />
      {/* } 게시판 목록 끝 */}
      {/* //게시판 목록 끝 */}
    </div>
  </div>
  {/*//콘텐츠 끝 */}
  <div
  id="fancybox"
  className="fancybox-overlay fancybox-overlay-fixed"
  style={{ width: "auto", height: "auto", display: "none" }}
  onClick={(event) => clickOuter(event)}
  >
    <div
      id="fancyboxinner"
      className="fancybox-wrap fancybox-desktop fancybox-type-image fancybox-opened"
      tabIndex={-1}
      style={{
        width: 810,
        height: "auto",
        position: "absolute",
        top: "20%",
        left: "30%",
        opacity: 1,
        overflow: "visible"
      }}
    >
      <div
        className="fancybox-skin"
        style={{ padding: 15, width: "auto", height: "auto" }}
      >
        <div className="fancybox-outer">
          <div
            className="fancybox-inner"
            style={{ overflow: "visible", width: 780, height: 585 }}
          >
            <img
              id="fancyboxImage"
              className="fancybox-image"
              src=""
              alt=""
            />
          </div>
          <Link
            title="Previous"
            className="fancybox-nav fancybox-prev"
            onClick={() => openFancybox(idxNum-1)}
          >
            <span />
          </Link>
          <Link
            title="Next"
            className="fancybox-nav fancybox-next"
            onClick={() => openFancybox(idxNum+1)}
          >
            <span />
          </Link>
        </div>
        <Link
          title="Close"
          className="fancybox-item fancybox-close"
          onClick={()=>closeFancybox()}
        />
      </div>
    </div>
  </div>
</>
  );
}


export default IntroduceCenterMore;

