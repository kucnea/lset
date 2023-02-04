import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {PsyTestNaviTab} from 'app/routes/board/programs/psytest/PsyTestNaviTab';
import * as vars from "app/models/js/variable.js";

export function SimliTest() {
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
            <h1>심리평가</h1>
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
                <span>검사 프로그램</span>
                </h1>
                <p>
                {" "}
                <span className="home">
                    <span>HOME</span>
                </span>{" "}
                <span>검사 프로그램</span> <span className="fb">심리평가</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <PsyTestNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>심리평가</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    각 상황에 맞는 치료 프로그램을 위한 체계적인 검사 프로그램을 제공합니다.
                    </p>
                    <p className="text2">
                    적응에 어려움을 겪는 아동 및 청소년, 성인을 대상으로 <br/>
                    인지적 능력과 정서 상태, 성격 특성, 사회성, 가족관계 등 <br/>
                    전반적인 영역에 대한 객관적인 평가를 실시하여 부적응에 대한 원인을 밝혀내고, <br/>
                    개인의 강점과 약점을 파악하여 가장 적합하고 효율적인 상담방법을 모색하는 과정입니다.<br/>
                    <br/>
                    심리평가는 현재 적응에 특별한 어려움을 보이지 않더라도 <br/>
                    자기 이해 및 잠재력 개발, 진로 탐색, 부적응 행동의 예방을 위하여서도 실시됩니다.<br/>
                    특히 아동 및 청소년에게 인지적, 사회적, 심리적으로 <br/>
                    중요한 변화가 일어나는 시기(초등학교 취학 전, 초등학교 4~5학년, 중학교 3학년, 고등학교 1학년)에는 <br/>
                    원만한 학교생활 적응과 학업능력의 향상, 잠재력 개발, 진로 선택 등을 위해 <br/>
                    심리평가를 받아 보는 것이 바람직합니다.<br/>
                    </p>
                    {/* <p className="text2_img">
                    <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
                    </p> */}
                    <div className="line" />
                    <p className="text1">검사 대상</p>
                    <ul>
                    <li style={{fontWeight:"1000", fontSize:"1.2em"}}>아동</li>
                    <li>정서 조절의 어려움을 겪는 아동</li>
                    <li>학습에 어려움을 보이는 아동</li>
                    <li>또래 관계에서 어려움을 보이는 아동</li>
                    <li style={{paddingBottom:"21px"}}>공격성 조절이 어려운 아동</li>
                    
                    <li style={{fontWeight:"1000", fontSize:"1.2em"}}>청소년</li>
                    <li>학업이나 진로의 고민이 깊은 청소년</li>
                    <li>이성 문제나 친구관계에서 갈등을 겪거나 따돌림을 당하는 청소년</li>
                    <li>인터넷, 컴퓨터 게임 등에 빠져드는 청소년</li>
                    <li>가출, 비행, 폭행 등을 저지르는 청소년</li>
                    <li>우울하거나 매사에 무기력한 청소년</li>
                    <li style={{paddingBottom:"21px"}}>부모 혹은 형제와 지속적으로 심한 갈등을 겪는 청소년</li>

                    <li style={{fontWeight:"1000", fontSize:"1.2em"}}>성인</li>
                    <li>자신의 성격에 대하여 고민이 되는 성인</li>
                    <li>대인관계나 직장생활에 어려움이 있는 성인</li>
                    <li>심리적인 스트레스나 정서적으로 불안하고 우울감이 심한 성인</li>
                    <li>자녀 양육에서의 어려움을 혼자서 해결하기 어려운 성인</li>
                    <li>읽기 장애 아동</li>
                    </ul>
                    {/* <div className="line" />
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
                    </p> */}
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

export default SimliTest;
