import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import { BoucherNavi } from 'app/routes/board/introduce/boucher/BoucherNavi';

import * as vars from "app/models/js/variable.js";

export function BoucherBaldal() {

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
    {<IntroduceSubMenu/>}
    {/* 우측컨텐츠*/}
    <article id="ctt" className="ctt_voucher1">
      <header>
        <h1>발달재활서비스</h1>
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
              <span>바우처안내</span> <span className="fb">발달재활서비스</span>{" "}
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
              <p>발달재활서비스 </p>
            </dt>
            <dd>
              <p>
                정신적ㆍ감각적 장애아동의 인지, 의사소통, 적응행동, 감각·운동
                등의 기능 향상과 행동 발달을 위한 적절한 발달재활서비스를
                지원합니다.{" "}
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
                    - 연령 : 만 18세 미만 장애아동
                    <br />
                    <span>
                      ※ 대상아동이 ｢초･중등교육법｣ 제2조에 따른 학교에 재학
                      중인(휴학생은 제외) 경우에는 만 20세가 되는 달까지 지원
                      연장가능(재학증명서 첨부)
                    </span>
                    <br />
                    <br />
                    - 장애유형 : 뇌병변, 지적, 자폐성, 청각, 언어, 시각 장애
                    아동
                    <br />
                    <br />
                    - 소득기준 : 전국가구 평균소득의 150% 이하인 가구
                    <br />
                    <span>
                      ※ 단, 장애아 2명 이상 가구, 부모 중 1명 이상이
                      중증장애인(1,2급 및 3급 중복장애) 가정은 소득기준이
                      전국가구평균소득 150%를 초과하는 경우라도 시ㆍ군ㆍ구청장이
                      인정하는 경우 예산범위 내에서 지원 가능
                    </span>
                    <br />
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
                    - 언어, 청능(聽能), 미술, 음악, 행동, 놀이,
                    심리운동ㆍ재활심리, 감각ㆍ운동 등 발달재활서비스 제공
                    <br />
                    <br />
                    - 장애 조기 발견 및 발달진단서비스 중재를 위한 부모 상담
                    서비스 등 지원
                    <br />
                    <span>
                      ※ 물리치료, 작업치료 등 의료기관에서 행해지는 의료지원은
                      지원 불가
                    </span>
                    <br />
                    <br />
                    - 지원금액
                    <br />
                    - 총 25만원
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      width="100%"
                      className="self_table2 "
                      style={{
                        borderTopColor: "rgb(142, 145, 159)",
                        borderTopWidth: 2,
                        borderTopStyle: "solid"
                      }}
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                    >
                      <colgroup>
                        <col width="" />
                        <col width="20%" />
                        <col width="15%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">소득기준</th>
                          <th scope="col">바우처 지원액</th>
                          <th scope="col">본인부담금</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">기초생활수급자(다형)</th>
                          <td>월 25만원</td>
                          <td>면제</td>
                        </tr>
                        <tr>
                          <th scope="row">차상위 계층(가형)</th>
                          <td>월 23만원</td>
                          <td>2만원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            차상위 초과 전국가구 평균 소득 50%이하(나형)
                          </th>
                          <td>월 21만원</td>
                          <td>4만원</td>
                        </tr>
                        <tr>
                          <th scope="row">전국가구평균소득 100%이하(라형)</th>
                          <td>월 19만원</td>
                          <td>6만원</td>
                        </tr>
                        <tr>
                          <th scope="row">전국가구평균소득 150%이하(마형)</th>
                          <td>월 17만원</td>
                          <td>8만원 </td>
                        </tr>
                      </tbody>
                    </table>
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
                    - 주소지 읍ㆍ면ㆍ동 주민센터
                    <br />
                    <br />
                    - 신청기간 : 매월 1일~27일까지 (익월 1일부터 서비스 개시)
                    <br />
                    <br />
                    - 제출서류
                    <br />
                    <span>
                      ㆍ신청서(읍ㆍ면ㆍ동 주민센터 비치)
                      <br />
                      ㆍ신분증과 소득증명 자료 <br />
                      ㆍ영유아(만6세미만)의 경우 의사진단서와 검사자료
                      제출(*최근 6개월 이내)
                      <br />
                      ㆍ바우처 카드 발급(재발급) 및 개인정보 제공‧이용 동의서
                      <br />
                    </span>
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
                    - 주소지 관할 주민센터, 보건복지콜센터 ☎129
                    <br />- 구리언어심리상담센터{" "}
                    <Link href="#" onClick={()=>window.location.href='tel:' + vars.REACT_APP_CENTER_TEL}>
                    ☎ {vars.REACT_APP_CENTER_TEL}
                    </Link>
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


export default BoucherBaldal;