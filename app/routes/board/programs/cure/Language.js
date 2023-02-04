import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureLanguage() {
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
        <article id="ctt" className="ctt_program_1">
        <header>
            <h1>언어치료</h1>
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
                <span>치료 프로그램</span> <span className="fb">언어치료</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>언어치료</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    각 아동에게 맞는 체계적인 언어치료 프로그램을 제공합니다.
                    </p>
                    <p className="text2">
                    또래에 비해 언어 발달이 느린 아동, 단어 의미 이해가 부족한 아동, <br/>
                    조음 문제 또는 말더듬 문제를 가진 아동, 기타 말ㆍ언어 문제를 가진 아동 을 대상으로 하며, <br/>
                    아동의 현재 언어수준에 관한 자세한 평가를 바탕으로 <br/>
                    아동에게 맞는 체계적인 언어치료 프로그램을 제공합니다. <br/>
                    또한 부모님 상담을 통해 아동의 언어치료가 치료실 내의 상황에서 뿐만 아니라 <br/>
                    가정 환경에서도 연장될 수 있도록 하여 이루어질 수 있도록 도움을 주는 프로그램입니다.<br/>
                    </p>
                    <p className="text2_img">
                    <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
                    </p>
                    <div className="line" />
                    <p className="text1">치료 대상</p>
                    <ul>
                    <li>언어 발달이 지연된 아동</li>
                    <li>이해는 가능하지만 표현이 잘 되지 않는 아동</li>
                    <li>말에 대한 이해가 부족한 아동</li>
                    <li>발음이 부정확한 아동 및 성인(조음장애)</li>
                    <li>
                        말을 더듬거나 지나치게 빨리 이야기 하는 아동 및 성인
                        (유창성장애)
                    </li>
                    <li>읽기 장애 아동</li>
                    </ul>
                    <div className="line" />
                    <p className="text1">기대효과</p>
                    <p className="text2" style={{ width: "100%" }}>
                    언어치료는 언어만의 문제가 아닙니다. 이것은 언어가 인간의 가장 기본적인 의사소통 수단이라는 데에 기인합니다. <br/>
                    영유아기의 언어는 가족과 함께 발달합니다. 그러나 어린이집이나 유치원을 다니게 되면서 <br/>
                    또래집단과 선생님과 상호작용을 시작하게 되고, <br/>
                    부정확한 발음이나 말더듬 등의 언어장애는 아동의 사회성에 부정적인 영향을 미치게 되며 특히 자신감을 잃고 위축되기 쉽습니다. <br/>
                    언어치료를 통해 아동은 긍정적인 자아상을 회복하게 되고 <br/>
                    사회성이 발달하게 되며 언어가 아닌 나머지 분야에 대해 자신감을 가질 수 있습니다.<br/>
                    <br />
                    <br />
                    언어치료는 다른 심리치료분야와 달리 집중적인 교육을 통해 빠르게 효과를 확인할 수 있습니다. <br/>
                    그러므로 “애가 말이 늦을 수도 있지” 혹은 “별 거 아닌 문제로 호들갑이다”라며 <br/>
                    소극적으로 대응할 것이 아니라 조금이라도 아쉬운 부분이 있다면 빨리 전문가의 도움을 받는 것이 좋습니다.<br/>
                    </p>
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

export default CureLanguage;
