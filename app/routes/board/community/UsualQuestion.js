import React from "react";
import { Link } from 'react-router-dom';
import {CommunitySubmenu} from 'app/routes/board/community/CommunitySubmenu';
import { useState, useEffect } from "react";
import * as vars from "app/models/js/variable.js";

export function UsualQuestion() {
  const [idxNum,setIdxNum] = useState(0);
  const [idxStyle,setIdxStyle] = useState();
  
  const openpanel = (setNum) => {
    if(idxNum===setNum && (document.getElementById('panelm'+setNum).className!=="panel")){
      document.getElementById('panelm'+setNum).style = "display:none;";
      document.getElementById('panelm'+setNum).className = "panel";
      document.getElementById('listm'+setNum).className = "";
    }else{
      if(idxNum!==0) {
        document.getElementById('panelm'+idxNum).style = "display:none;";
        document.getElementById('panelm'+idxNum).className = "panel";
        document.getElementById('listm'+idxNum).className = "";
      }
      document.getElementById('panelm'+setNum).style = "display:block;";
      document.getElementById('panelm'+setNum).className = "panel open";      
      document.getElementById('listm'+setNum).className = "active";
    }
    setIdxNum(setNum);
  }

  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {      

    if(document.getElementById('usualcss')){
        var link = document.getElementById('usualcss');
        link.href = '/styles/css/usualcss.css';
    }else{
        var link = document.createElement('link');
        link.id = 'usualcss';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/usualcss.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }  

    if(document.getElementById('fd_style')){
      var link = document.getElementById('fd_style');
      link.href = '/styles/css/fd_style.css';
    }else{
        var link = document.createElement('link');
        link.id = 'fd_style';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/fd_style.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }      

    return () => {};
  },);

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
    <CommunitySubmenu/>
    {/* <div className="subtop_u" /> */}
    <div id="left_container_board">
      {/* 게시판 목록 시작 { */}
      {/* 상단서브타이틀 */}
      <div className="hgroup">
        <h1>
          <span>자주묻는질문</span>
        </h1>
        <p>
          {" "}
          <span className="home">
            <span>HOME</span>
          </span>{" "}
          <span>커뮤니티</span> <span className="fb">자주묻는질문</span>{" "}
        </p>
      </div>
      {/* //상단서브타이틀*/}
      <p className="bu1">자주 문의되는 내용들의 질문과 답변입니다.</p>
      <h2 id="container_title">
        자주묻는질문답변<span className="sound_only"> 목록</span>
      </h2>
      {/* 게시판 목록 시작 { */}
      <div id="bo_list" style={{ width: "100%" }}>
        {/* 게시판 카테고리 시작 { */}
        {/* } 게시판 카테고리 끝 */}
        {/* 게시판 페이지 정보 및 버튼 시작 { */}
        <div className="bo_fx">
          {/*<div id="bo_list_total">
          <span>Total 10건</span>
          1 페이지
      </div>*/}
        </div>
        {/* } 게시판 페이지 정보 및 버튼 끝 */}
        <form
          name="fboardlist"
          id="fboardlist"
          action="./board_list_update.php"
          onsubmit="return fboardlist_submit(this);"
          method="post"
        >
          <input type="hidden" name="bo_table" defaultValue="faq" />
          <input type="hidden" name="sfl" defaultValue="" />
          <input type="hidden" name="stx" defaultValue="" />
          <input type="hidden" name="spt" defaultValue="" />
          <input type="hidden" name="sca" defaultValue="" />
          <input type="hidden" name="page" defaultValue={1} />
          <input type="hidden" name="sw" defaultValue="" />
          {/*div className="list-title">
      <ul>
          <li className="fd_chk">
                      </li>
          <li className="fd_num">번호</li>
          <li className="fd_title">제목</li>
      </ul>
  </div>*/}
          <div className="tbl_head01 tbl_wrap">
            <ul id="fd_accordion" className="accordion">
              <li id="listm1">
                {/*<span className="fd_num">10</span>*/}
                <h3 onClick={() => openpanel(1)}>
                  <Link className="accordion-opener">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    전화예약이 필요한가요?{" "}
                  </Link>
                </h3>
                <div
                  id="panelm1"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>전화예약이 필요한가요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 전화예약이 필요한가요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    모든 상담은 예약제로 진행됩니다. 전화 주시면 가능한 날짜와
                    시간 친절히 상담해 드리며, 상담 날 맞는 시간에 방문하시면
                    됩니다. 방문일 하루 전 예약확인 문자 드립니다.
                    <br />
                    평일 10시~19시, 토요일 9시~15시(일요일,공휴일 휴무)
                  </div>
                </div>
              </li>
              <li id="listm2">
                {/*<span className="fd_num">9</span>*/}
                <h3 onClick={() => openpanel(2)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    상담시간은 어떻게 되나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm2"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>상담시간은 어떻게 되나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 상담시간은 어떻게 되나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    처음 센터를 방문할 때 초기상담을 진행합니다. 초기 상담
                    소요시간은 아동관찰 20~30분, 부모상담 20~30분, 평균 50분
                    소요된다고 생각하시면 됩니다. 모든 치료 소요시간은 40분,
                    부모상담 10분으로 총 50분입니다.
                  </div>
                </div>
              </li>
              <li id="listm3">
                {/*<span className="fd_num">8</span>*/}
                <h3 onClick={() => openpanel(3)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    주차장이용은 가능한가요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm3"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>주차장이용은 가능한가요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 주차장이용은 가능한가요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    센터 건물 입구 맞은편에 4공영주차장에 주차하시면 주차권을
                    발부해드립니다. <br />더 궁금하신 사항은 전화 주시면 친절히
                    상담 드리겠습니다.
                  </div>
                </div>
              </li>
              <li id="listm4">
                {/*<span className="fd_num">7</span>*/}
                <h3 onClick={() => openpanel(4)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    검사비용은 어떻게 되나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm4"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>검사비용은 어떻게 되나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 검사비용은 어떻게 되나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    아이마다 맞는 검사의 종류와 내용이 모두 달라집니다.
                    전화문의해주시면 자세히 안내해드리겠습니다.
                  </div>
                </div>
              </li>
              <li id="listm5">
                {/*<span className="fd_num">6</span>*/}
                <h3 onClick={() => openpanel(5)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    치료 소요시간은 어떻게 되나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm5"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>치료 소요시간은 어떻게 되나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 치료 소요시간은 어떻게 되나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    모든 치료 소요시간은 부모상담 포함 50분입니다. 단, 아동의
                    특성상 시간이 조절될 수도 있습니다.
                  </div>
                </div>
              </li>
              <li id="listm6">
                {/*<span className="fd_num">5</span>*/}
                <h3 onClick={() => openpanel(6)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    치료 교육과정은 어떻게 되나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm6"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>치료 교육과정은 어떻게 되나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 치료 교육과정은 어떻게 되나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    1. 상담예약 : 방문전 전화 상담을 통해 방문상담 일정을
                    예약합니다.
                    <br />
                    2. 초기상담 : 부모님과 아동이 센터에 함께 내원하여 상담을
                    통해 어떤 치료교육이 필요한지 결정합니다.
                    <br />
                    3. 치료교육 및 평가 : 아이에게 필요한 개인별 맞춤치료가
                    진행되며 동시에 평가를 진행합니다.
                  </div>
                </div>
              </li>
              <li id="listm7">
                {/*<span className="fd_num">4</span>*/}
                <h3 onClick={() => openpanel(7)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    어떤 치료를 받아야 하나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm7"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>어떤 치료를 받아야 하나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 어떤 치료를 받아야 하나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    원인에 따른 치료방법이 아이마다 달라질 수 있습니다.
                    <br />
                    맞춤검사를 진행한 후 원인을 파악하여 맞는 치료를 권유
                    드리거나, 행동관찰 후 상담을 통하여 치료를 권유 드립니다.
                  </div>
                </div>
              </li>
              <li id="listm8">
                {/*<span className="fd_num">3</span>*/}
                <h3 onClick={() => openpanel(8)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    부모도 함께 참여하나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm8"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>부모도 함께 참여하나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 부모도 함께 참여하나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    보통 아이와 선생님 1:1치료로 진행되고 있으나 아이의 분리가
                    불가능 한 경우, 부모님의 개선이 필요한 경우 함께 참여하여
                    진행하기도 합니다. 또한 치료 후 선생님과 부모님의 상담시간을
                    갖습니다.
                  </div>
                </div>
              </li>
              <li id="listm9">
                {/*<span className="fd_num">2</span>*/}
                <h3 onClick={() => openpanel(9)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    대기실이 있나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm9"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>대기실이 있나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 대기실이 있나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    휴게실과 대기실 공간이 마련되어 있으며, 비치된 도서를 이용하실 수 있습니다.
                  </div>
                </div>
              </li>
              <li id="listm10">
                {/*<span className="fd_num">1</span>*/}
                <h3 onClick={() => openpanel(10)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    상담 받은 기록이 남나요?{" "}
                  </a>
                </h3>
                <div
                  id="panelm10"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>상담 받은 기록이 남나요?</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* 상담 받은 기록이 남나요?*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    센터는 병원이 아니기 때문에 기록을 남기거나 저장할 의무도,
                    관련기관에 제공할 의무도 없습니다. 기록 때문에 불이익을
                    당하실 일은 전혀 걱정하지 않으셔도 됩니다.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
      {/* 페이지 */}
      {/* 게시판 검색 시작 { */}
      <div className="bo_sch" style={{ marginTop: 20 }}>
        <fieldset id="bo_sch">
          <legend>게시물 검색</legend>
          <form name="fsearch" method="get">
            <input type="hidden" name="bo_table" defaultValue="faq" />
            <input type="hidden" name="sca" defaultValue="" />
            <input type="hidden" name="sop" defaultValue="and" />
            <label htmlFor="sfl" className="sound_only">
              검색대상
            </label>
            <select name="sfl" id="sfl">
              <option value="wr_subject">제목</option>
              <option value="wr_content">내용</option>
              <option value="wr_subject||wr_content">제목+내용</option>
              {/*<option value="mb_id,1">회원아이디</option>
      <option value="mb_id,0">회원아이디(코)</option>
      <option value="wr_name,1">글쓴이</option>
      <option value="wr_name,0">글쓴이(코)</option>*/}
            </select>
            <label htmlFor="stx" className="sound_only">
              검색어<strong className="sound_only"> 필수</strong>
            </label>
            <input
              type="text"
              name="stx"
              defaultValue=""
              required=""
              id="stx"
              className="frm_input required"
              size={15}
              maxLength={20}
            />
            <input
              type="image"
              defaultValue="검색"
              src={vars.REACT_APP_URL +'/image/btn_sch.gif'}
              title="검색"
              className="btn_sch"
            />
          </form>
          {/*
  <form name="fsearch" method="get">
  <input type="hidden" name="bo_table" value="faq">
  <input type="hidden" name="sca" value="">
  <input type="hidden" name="sop" value="and">
  <label for="sfl" className="sound_only">검색대상</label>
  <select name="sfl" id="sfl">
      <option value="wr_subject">제목</option>
      <option value="wr_content">내용</option>
      <option value="wr_subject||wr_content">제목+내용</option>
      <option value="mb_id,1">회원아이디</option>
      <option value="mb_id,0">회원아이디(코)</option>
      <option value="wr_name,1">글쓴이</option>
      <option value="wr_name,0">글쓴이(코)</option>
  </select>
  <label for="stx" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
  <input type="text" name="stx" value="" required id="stx" className="frm_input required" size="15" maxlength="20">
  <input type="submit" value="검색" className="btn_submit">
  </form>*/}
        </fieldset>
      </div>
      {/* } 게시판 검색 끝 */}
      {/* } 게시판 목록 끝 */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #GNB ul li.gnb04 a {color:#a99808;}\n    #lnb>ul>li.lnb02 a {color:#a99808;}\n    .subNav ul li.lnb02 a {background-color: #89BCC1;}\n    .subNav ul li {width:33.3%;}\n    "
        }}
      />
      <br />
      {/* //게시판 목록 끝 */}
    </div>
  </div>
  {/*//콘텐츠 끝 */}
</>
  );
}

export default UsualQuestion;
