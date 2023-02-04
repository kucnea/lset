import React from "react";
import { Link } from 'react-router-dom';
import {CommunitySubmenu} from 'app/routes/board/community/CommunitySubmenu';
import * as vars from "app/models/js/variable.js";

export function NoticeDetail() {
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
  {/*<div className="subtop_u"></div>*/}
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    <div className="subtop_u" />
    <CommunitySubmenu/>
    <div id="left_container_board">
      {/* 게시판 목록 시작 { */}
      {/* 상단서브타이틀 */}
      <div className="hgroup">
        <h1>
          <span>공지사항</span>
        </h1>
        <p>
          {" "}
          <span className="home">
            <span>HOME</span>
          </span>{" "}
          <span>커뮤니티</span> <span className="fb">공지사항</span>{" "}
        </p>
      </div>
      {/* //상단서브타이틀*/}
      <p className="bu1">새로운 소식과 정보를 알려드립니다.</p>
      {/* 게시물 읽기 시작 { */}
      <div id="bo_v_table">공지사항</div>
      <article id="bo_v" style={{ width: "100%" }}>
        <header>
          <h1 id="bo_v_title">신학기 종합 심리검사/발달 검사 10% 할인 </h1>
        </header>
        <section id="bo_v_atc">
          <h2 id="bo_v_atc_title">본문</h2>
          {/* 본문 내용 시작 { */}
          <div id="bo_v_con">
            안녕하세요.
            <br /><br />
            구리언어심리상담센터 신학기 <u>EVENT</u> 진행합니다.
            <br />
            검사 할인은 선착순으로 진행됩니다.
            <br />
            문의사항은 {vars.REACT_APP_CENTER_TEL}로 연락주시면
            <br/>
            자세한 상담 도와드리겠습니다.
            <br /><br />
            감사합니다.
          </div>
          {/* } 본문 내용 끝 */}
          <div id="bo_v_img"></div>
          {/* 스크랩 추천 비추천 시작 { */}
          {/* } 스크랩 추천 비추천 끝 */}
        </section>
        {/* 댓글 시작 { */}
        <section id="bo_vc" style={{ display: "none" }}>
          <h2>댓글목록</h2>
          <p id="bo_vc_empty">등록된 댓글이 없습니다.</p>
        </section>
        {/* } 댓글 끝 */}
        {/* } 댓글 쓰기 끝 */}
        {/* 링크 버튼 시작 { */}
        <div id="bo_v_bot"></div>
        {/* } 링크 버튼 끝 */}
      </article>
      {/* } 게시판 읽기 끝 */}
      {/* 게시물 상단 버튼 시작 { */}
      <div id="bo_v_top">
        <ul className="bo_v_nb">
          <li>
            <Link to="/board/community/notice/detail4" className="btn_b01">
              이전글
            </Link>
          </li>{" "}
          {/* <li>
            <Link to="/board/community/notice/deatil?idx=3" className="btn_b01">
              다음글
            </Link>
          </li>{" "}           */}
        </ul>
        <ul className="bo_v_com">
          {/*            */}
          <li>
            <Link to="/board/community/notice/board" className="btn_b01">
              목록
            </Link>
          </li>
        </ul>
      </div>
      {/* } 게시물 상단 버튼 끝 */}
      {/* } 게시글 읽기 끝 */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #GNB ul li.gnb04 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    .subNav ul li {width:33.3%;}\n    #bo_v_con { margin-top: 20px;}    \n"
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

export default NoticeDetail;
