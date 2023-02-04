import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureFamily() {
  return (
    <>
    {/* PC용 헤드카피*/}
    <div className="subtop3">
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
        <ProgSubMenu/>
        {/* 우측컨텐츠*/}
        <article id="ctt" className="ctt_program_2">
        <header>
            <h1>가족상담</h1>
        </header>
        <div id="ctt_con">
            <style
            dangerouslySetInnerHTML={{
                __html:
                "\n    #GNB ul li.gnb02 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    "
            }}
            />
            {/* 우측컨텐츠*/}
            <div id="left_container">
            {/* 게시판 또는 컨텐츠 */}
            {/* 콘텐츠 시작*/}
            {/* 상단서브타이틀 */}
            <div className="hgroup">
                <h1>
                <span>치료 프로그램</span>
                </h1>
                <p>
                {" "}
                <span className="home">
                    <span>HOME</span>
                </span>{" "}
                <span>치료 프로그램</span> <span className="fb">가족상담</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n     ul.dept  {margin-top:5px;}\n     .cont_program_list li.L2 li.dept {background-image:none;}\n     ul.dept li {list-style-type:none; background-image:none;}\n     "
                }}
            />
            <div className="cont_program_list">
                <h2>가족상담</h2>
                <ul>
                <li className="L2">
                    <p className="text2">
                    가족 구성원 간의 관계구조와 상호작용을 변화시켜 <br/>
                    대인관계 기술과 적응능력을 향상시킴으로써 개인과 가족이 건강하고<br/>
                    기능적인 생활을 하도록 도움을 주는 치료입니다.<br/>
                    </p>
                    <p className="text1">상담 대상</p>
                    <ul>
                    <li>
                        성격 및 가치관의 차이, 외도, 성적 문제, 의사소통의 부내
                        등으로 인한 부부 불화
                    </li>
                    <li>
                        별거, 이혼, 재혼 등 가족의 분리, 재결합으로 인한 가족원간의
                        갈등
                    </li>
                    <li>고부, 형제, 친인척간 갈등 등 가족관계상의 여러움</li>
                    <li>
                        배우자의 언어적, 신체적 폭력, 자녀학대, 알코올 남용 등으로
                        인한 가족 내 불화
                    </li>
                    <li>
                        장애아, 치매노인 등 특별한 보호를 요하는 가족원으로 인한
                        과중한 역할 부담과 갈등
                    </li>
                    <li>자녀와의 관계 회복을 원하는 가족</li>
                    <li>자녀 양육에 관해 의견충돌이 일어나는 가족</li>
                    </ul>
                    <p>&nbsp;</p>
                    {/*<p className="text2_img"><img alt="" src="../image/cont_program_09.gif"></p>*/}
                    {/*<div className="line"></div>
        <p className="text1">청소년상담은 어떤 도움을 주나요?</p>
        <ul>
            <li>청소년기 불확실하고 혼란스러운 자아정체감 및 가치관 형성에 도움을 줌. </li>
            <li>청소년의 적성이나 흥미, 심리상태를 파악하여 진로 및 학업에 대한 정보를 수집하고 자신에게 맞는 분야를 선택하는데 도움이 됨. </li>
            <li>청소년의 심리적 불편감을 최소화하여 긍정적이고 건강한 학업 및 대인관계를 유지할 수 있도록 도와줌. </li>
            <li>부모 및 가족과의 갈등을 완화시키고 원활한 의사소통을 할 수 있도록 도와줌. </li>
        
    </ul>*/}
                    <div className="line" />
                    <p className="text1">구성 및 치료시간</p>
                    <ul>
                    <li>가족 개별 및 집단상담 / 매회 50분 진행</li>
                    </ul>
                </li>
                </ul>
            </div>
            {/*//교육프로그램*/}
            {/*//콘텐츠 끝 */}
            {/* //게시판 또는 컨텐츠 */}
            </div>
            {/* 우측컨텐츠*/}{" "}
        </div>
        </article>
        {/*//우측 콘텐츠 끝 */}
    </div>
    {/*//콘텐츠 끝 */}
    </>
  );
}

export default CureFamily;
