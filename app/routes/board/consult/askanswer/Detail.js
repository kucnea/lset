import React from "react";
import { Link } from 'react-router-dom';
import {AskAnswerSubmenu} from 'app/routes/board/consult/askanswer/AskAnswerSubmenu';
import * as vars from "app/models/js/variable.js";

export function AskAnswerDetail() {
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
        <AskAnswerSubmenu/>
        <div id="left_container_board">
        {/* 게시판 목록 시작 { */}
        {/* 상단서브타이틀 */}
        <div className="hgroup">
            <h1>
            <span>상담/문의</span>
            </h1>
            <p>
            {" "}
            <span className="home">
                <span>HOME</span>
            </span>{" "}
            <span className="fb">상담/문의</span>{" "}
            </p>
        </div>
        {/* //상단서브타이틀*/}
        <p className="bu1">
            문의가 많아 온라인 상담은 준비중에 있습니다. 감사합니다.
        </p>
        {/* 게시물 읽기 시작 { */}
        <div id="bo_v_table">상담/문의</div>
        <article id="bo_v" style={{ width: "100%" }}>
            <header>
            {/* <h1 id="bo_v_title">글을 남겨주시면 성심껏 답변해 드립니다. </h1> */}
            <h1 id="bo_v_title">문의가 많아 온라인 상담은 준비중에 있습니다. 감사합니다. </h1>
            </header>
            {/* 게시물 상단 버튼 시작 { */}
            <div id="bo_v_top">
            <ul className="bo_v_nb">
                <li>
                <Link to="/consult/askbaord/detail?idx=1" className="btn_b01">
                    이전글
                </Link>
                </li>{" "}
                <li>
                <Link to="/consult/askbaord/detail?idx=1" className="btn_b01">
                    다음글
                </Link>
                </li>{" "}                
            </ul>
            <ul className="bo_v_com">
                {/*            */}
                <li>
                <Link to="/board/consult/askanswer/write" className="btn_b01">
                    수정
                </Link>
                </li>
                <li>
                <Link to="/board/consult/askanswer/board" className="btn_b01">
                    삭제
                </Link>
                </li>
                <li>
                <Link to="/board/consult/askanswer/board" className="btn_b01">
                    목록
                </Link>
                </li>
                {/**/}
                <li>
                <Link to="/board/consult/askanswer/write" className="btn_b02">
                    글쓰기
                </Link>
                </li>{" "}
            </ul>
            </div>
            {/* } 게시물 상단 버튼 끝 */}
            <section id="bo_v_atc">
            <h2 id="bo_v_atc_title">본문</h2>
            <div id="bo_v_img"></div>
            {/* 본문 내용 시작 { */}
            <div id="bo_v_con">
            {" "}문의가 많아 온라인 상담은 준비중에 있습니다. 감사합니다.<br/>
                <br/>
                대표번호 {vars.REACT_APP_CENTER_TEL}로 연락주시면 친절히 안내드리겠습니다.<br/>
                <br/>
                감사합니다!
            </div>
            {/* } 본문 내용 끝 */}
            {/* 스크랩 추천 비추천 시작 { */}
            {/* } 스크랩 추천 비추천 끝 */}
            </section>
            {/* 댓글 시작 { */}
            <section id="bo_vc">
            <h2>답변목록</h2>
            <p id="bo_vc_empty">등록된 댓글이 없습니다.</p>
            </section>
            {/* } 댓글 끝 */}
            {/* } 댓글 쓰기 끝 */}
            {/* 링크 버튼 시작 { */}
            <div id="bo_v_bot">
            <ul className="bo_v_nb">
                <li>
                <Link to="/consult/askbaord/detail?idx=1" className="btn_b01">
                    이전글
                </Link>
                </li>{" "}
                <li>
                <Link to="/consult/askbaord/detail?idx=1" className="btn_b01">
                    다음글
                </Link>
                </li>{" "}    
            </ul>
            <ul className="bo_v_com">
                {/*            */}
                <li>
                <Link to="/board/consult/askanswer/write" className="btn_b01">
                    수정
                </Link>
                </li>
                <li>
                <Link to="/board/consult/askanswer/board" className="btn_b01">
                    삭제
                </Link>
                </li>
                <li>
                <Link to="/board/consult/askanswer/board" className="btn_b01">
                    목록
                </Link>
                </li>
                {/**/}
                <li>
                <Link to="/board/consult/askanswer/write" className="btn_b02">
                    글쓰기
                </Link>
                </li>{" "}
            </ul>
            </div>
            {/* } 링크 버튼 끝 */}
        </article>
        {/* } 게시판 읽기 끝 */}
        {/* } 게시글 읽기 끝 */}
        <style
            dangerouslySetInnerHTML={{
            __html:
                "\n    #GNB ul li.gnb03 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    "
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

export default AskAnswerDetail;
