import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import { BoucherNavi } from 'app/routes/board/introduce/boucher/BoucherNavi';

import * as vars from "app/models/js/variable.js";

export function BoucherChild() {

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
    <article id="ctt" className="ctt_voucher2">
      <header>
        <h1>우리아이심리지원</h1>
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
              <span>바우처안내</span>{" "}
              <span className="fb">우리아이심리지원</span>{" "}
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
              <p>우리아이심리지원</p>
            </dt>
            <dd>
              <p>
                문제행동의 조기 발견과 개입을 통하여 문제행동을 감소시키고,
                정서행동장애로의 발전을 막아 정상적 성장을 지원 합니다.{" "}
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
                    - 소득 및 연령 : 기준 중위소득 140% 이하 가정의 만 18세 이하
                    범위 내에서 지역 여건에 따라 설정
                    <br /> <br />
                    - 다음 중 어느 하나를 충족하는 문제행동 위험군 아동 중
                    서비스 지원이 우선적으로 필요하다고 판단되는 아동
                    <br />
                    &nbsp;&nbsp;&nbsp;(단, 장애아동의 경우 발달재활서비스에서
                    제외되는 9개 유형)
                    <br />
                    <span>
                      ㆍ지체, 정신, 신장, 심장, 호흡기, 간장, 안면, 장루 및
                      요루, 간질만 포함
                      <br />
                      ㆍ발급일로부터 1년 이내의 의사 진단서·소견서,
                      임상심리사소견서, 청소년상담사소견서
                      <br />
                      ㆍ정신보건센터장이 추천한 아동·청소년
                      <br />
                      ㆍ초·중등교육법에 의한 정교사, 전문상담교사, 보건교사,
                      유치원 장, 어린이집 원장이 추천한 아동
                      <br />
                    </span>
                    <br />
                    - 추천시에는 추천자가「정신보건사업안내」의 아동·청소년
                    심층사정평가도구 중 어느 하나를 활용하여 검사한 후 절단점
                    이상인 경우
                    <br />
                    - 추천서, 검사결과는 3개월 이내 작성된 것만 인정
                    <br />
                    - 우선순위 : ① 문제행동의 수준,② 다문화·조손·한부모 가정
                    <br />
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
                    - 심리상담, 놀이, 언어, 인지, 미술, 심리운동 등 제공
                    <br />
                    - 부가서비스 : 심리검사, 사회성향상프로그램, 부모훈련 등
                    <br />
                    <br />
                    - 지원금액
                    <br />
                    - 월 112,000원 ~ 144,000원 (본인 부담금 : 월
                    16,000원~48,000원)
                    <br />
                    - 등급별상이
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={{ textAlign: "right" }}>
                      월16만원(본인부담금 30%까지 차등부과) / 기간 : 12개월 /
                      재판정 : 1회(최대2년)
                    </div>
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
                          <th scope="row">
                            수급자, 차상위∼평균소득50%이하
                            <br />
                            (1등급)
                          </th>
                          <td>월 144,000원</td>
                          <td>월 16,000원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            평균소득50%초과∼120%이하
                            <br />
                            (2등급)
                          </th>
                          <td>월 128,000원</td>
                          <td>월 32,000원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            평균소득100초과∼140%이하
                            <br />
                            (3등급)
                          </th>
                          <td>월 112,000원</td>
                          <td>월 48,000원</td>
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
                      ㆍ신분증
                      <br />
                      ㆍ건강보험증, 건강보험료 납부확인서류 <br />
                      ㆍ의사진단서.소견서, 임상심리사 소견서, 청소년상담사
                      소견서, 학교 교사 또는 학교장 추천서, 정신보건센터
                      추천의뢰서(택1) <br />
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


export default BoucherChild;