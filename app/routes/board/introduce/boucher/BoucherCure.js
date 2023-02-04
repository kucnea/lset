import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import { BoucherNavi } from 'app/routes/board/introduce/boucher/BoucherNavi';

import * as vars from "app/models/js/variable.js";

export function BoucherCure() {

  return (
<>
  {/* PC용 헤드카피*/}
  <div className="subtop">
    <div className="head_copy">
      <h2>
        000 소개
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
        000 소개
        <br />
        000 소개
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //모바일용 헤드카피*/}
  <div className="subtop_140" />
  <div className="subtop_u" />
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    <IntroduceSubMenu/>
    {/* 우측컨텐츠*/}
    <article id="ctt" className="ctt_voucher4">
      <header>
        <h1>치료지원서비스</h1>
      </header>
      <div id="ctt_con">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    #GNB ul li.gnb01 a {color:#a99808;}\n    #lnb>ul>li.lnb07 a {color:#a99808;}\n    .subNav ul li.lnb07 a {background-color: #89BCC1;}\n    \n    .tabgroup li {width:25%;}\n    "
          }}
        />
        {/* 우측컨텐츠*/}
        <div id="left_container">
          {/* 게시판 또는 컨텐츠 */}
          {/* 콘텐츠 시작*/}
          {/* 상단서브타이틀 */}
          <div className="hgroup">
            <h1>
              <span>바우처 안내</span>
            </h1>
            <p>
              {" "}
              <span className="home">
                <span>HOME</span>
              </span>{" "}
              <span>바우처안내</span> <span className="fb">치료지원서비스</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀 */}
          <BoucherNavi/>
          {/*<div className="tit">ㆍ발달장애아 부모상담서비스ㆍ 특수교육지원센터 협력 치료지원 ㆍ방과후 특수교육 지원 협력기관 ㆍ용인시,성남시 교육청 Wee 센터 협력기관 ㆍ지역사회 특수교육과, 언어치료학과 임상관찰 위촉기관 ㆍ지역사회 종합복지관, 언린이집 현력기관</div>*/}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .tit {background: #fafafa; padding: 10px 10px; border-bottom: solid 1px #ddd; border-top: solid 1px #ddd; line-height: 18px;}\n    \n    dl.TopBoxBlue { position:relative; border:1px solid #ddd; background:#fbfbfb; padding:25px 55px 25px 0; display:inline-block;}\n    dl.TopBoxBlue dt { float:left; color:#ddd; font-family:'SeoulNamsanCEB', Sans-serif; font-size:23px; width:265px; margin-right:-265px; border-right:1px solid #999; text-align:center;}\n    dl.TopBoxBlue dt p{display:table-cell; width:inherit; vertical-align:middle; line-height:120%; height:70px;  color:#777;}\n    dl.TopBoxBlue dd { margin-left:305px; color:#666;}\n    dl.TopBoxBlue dd p{ display:table-cell; height:80px; vertical-align:middle; line-height:160%; font-family:'Nanum Gothic', serif; font-size:16px; color:#999; }\n    \n    @media screen and (max-width:700px) { \n    /* 회사소개 */\n    dl.TopBoxBlue {padding:20px 5px 45px 0;}\n    dl.TopBoxBlue dt {border-right:none;}\n    dl.TopBoxBlue dt p {height:20px;}\n    dl.TopBoxBlue dd p {display:inline-block;}\n    dl.TopBoxBlue dd  {display:inline-block; margin-left:20px; margin-top:50px; color:#666;}\n    \n    .tabgroup li {width:50%;}\n    }\n    \n    "
            }}
          />
          <dl className="TopBoxBlue">
            <dt>
              <p>치료지원서비스</p>
            </dt>
            <dd>
              <p>
                특수교육대상자의 장애 교정, 장애 경감 및 2차 장애 예방과 장애
                개선을 통한 사회적응력 향상. 교육을 효율적으로 실시 하기 위한
                서비스{" "}
              </p>
            </dd>
          </dl>
          {/* 내용삽입*/}
          <div id="ctt_con">
            <table
              className="self_table "
              border={0}
              cellSpacing={0}
              cellPadding={0}
            >
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    <span>
                      <b>▶</b>지원대상
                    </span>
                  </th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    - 유,초,중,고 교육과정에 재학하는 <u>특수교육대상자</u> 중,
                    치료지원이 필요한 학생 및 <u>만 3세 미만의 장애 영아</u>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;* 특수교육기관이 아닌 어린이집 등의 기관에 재원 중인 원아 및
                    취악 연기.유예자는 제외
                    <br />
                    - 경기도교육청 소속 특수교육대상자 중 <u>치료지원, 방과후 서비스 대상 학생</u>
                    <br /> <br />
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    <span>
                      <b>▶</b>지원내용
                    </span>
                  </th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    - 물리, 작업, 언어, 청능, 음악, 미술, 행동, 감각통합,
                    심리운동 (수영, 승마 불가)
                    <br />
                    <br />
                    - 지원금액
                    <br />
                    - 월 150,000원{/* 으로, 1일 3만원 이내에서 횟수에 제한 없이
                    실비지원 */}
                    <br />
                    {/* - 등급별상이 */}
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    <span>
                      <b>▶</b>신청방법
                    </span>
                  </th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    - 교육청, 특수교육지원센터(031-334-7552), 특수학교 학생은
                    해당 학교
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left" }}>
                    <span>
                      <b>▶</b>문의
                    </span>
                  </th>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    - 구리언어심리상담센터{" "}
                    <Link href="#" onClick={()=>window.location.href='tel:' + vars.REACT_APP_CENTER_TEL}>
                    ☎ {vars.REACT_APP_CENTER_TEL}
                    </Link>
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .self_table th {font-family:"맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size:13px; line-height:18px; padding:20px 0;}\n    .self_table th span {font-size:15px; font-weight:bold;}\n    .self_table th span b {color: rgb(140, 178, 29);}\n    .self_table td {font-family:"맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size:13px; line-height:22px;}\n    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}\n    \n    \n    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}\n    .self_table2 th, .boardList td {padding: 9px 3px;}\n    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}\n    '
              }}
            />
            {/* //내용삽입*/}
            {/*//콘텐츠 끝 */}
            {/* //게시판 또는 컨텐츠 */}
          </div>
          {/* 우측컨텐츠*/}
        </div>{" "}
      </div>
    </article>
    {/*//우측 콘텐츠 끝 */}
  </div>
  {/*//콘텐츠 끝 */}
</>
  );
}


export default BoucherCure;