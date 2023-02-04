import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureArt() {
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
        <article id="ctt" className="ctt_program_6">
        <header>
            <h1>미술치료</h1>
        </header>
        <div id="ctt_con">
            <style
            dangerouslySetInnerHTML={{
                __html:
                "\n    #GNB ul li.gnb02 a {color:#3bb3c3;}\n    #lnb>ul>li.lnb01 a {color:#3bb3c3;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    "
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
                <span>치료 프로그램</span> <span className="fb">미술치료</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>미술치료</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    말로 자신을 충분히 표현하기에 어려움이 있는 아이들의 잠재력을
                    <br /> 최대한 발휘할 수 있도록 도와주는 프로그램입니다.
                    </p>
                    <p className="text2">
                    정서문제 및 말·언어장애를 가진 아동과 청소년에게 개인의 특성 및 발달수준을 고려하여 <br/>
                    미술매체를 활용한 적합한 치료기법을 제공합니다. <br/>
                    아동들이 좋아하는 미술놀이를 통해 정서적 관계를 형성하기 때문에 <br/>
                    편안하고 자연스럽게 아동 자신을 표현하도록 도와줍니다. <br/>
                    또한 다양한 미술재료를 만지고 느끼는 과정을 통해 <br/>
                    아동 내면에 잠재된 감정을 발견하고 조절할 수 있는 능력을 향상시켜줍니다.
                    &nbsp;
                    </p>
                    <p className="text2_img">
                    <img alt="미술치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_art.gif'} />
                    </p>
                    <div className="line" />
                    <p className="text1">치료 대상</p>
                    <p className="text2">&nbsp;</p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>주의력 결핍 및 과잉행동을 보이는 아동(ADHD)</li>
                        <li>자신감이 없고 위축된 아동</li>
                        <li>심리적으로 불안감을 느끼는 아동</li>
                        <li>발달이 지연되거나 늦되는 아동</li>
                        <li>자폐성향이 있는 아동</li>
                        <li>고집이 세고 짜증이 많거나 공격적인 아동</li>
                        <li>유치원이나 학교에 적응을 못하는 아동</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>심리 및 정서 문제로 행동에 문제를 보이는 아동</li>
                        <li>또래와 어울리지 못하고 사회성이 부족한 아동</li>
                        <li>정서 및 행동문제로 인하여 발달이 지체된 아동</li>
                        <li>선천적 요인으로 인해 지능이 낮은 아동</li>
                        <li>배설 문제나 수면 문제를 보이는 아동</li>
                        <li>공격성, 거짓말, 도벽 등의 행동문제를 보이는 아동</li>
                        <li>충동조절 및 욕구지연이 어려운 아동</li>
                        <li>모와의 분리가 어려운 아동</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
                    <div className="line" />
                    <p className="text1">기대 효과</p>
                    <p className="text2" style={{ width: "100%" }}>
                    미술치료는 형상을 통해서 주변의 세계에 대한 감정과 사고, 개념 등을 구조화하는 시각적 사고를 발달시키며, <br/>
                    말로 표현하기 불가능하거나 어려운 경험과 감정들을 표현할 수 있도록 도와줍니다.<br/>
                    <br />
                    <br />
                    감성과 지각을 자극할 수 있는 다양한 미술활동의 감각적 경험은 감성적 보상과 치유 및 스트레스를 감소키며, <br/>
                    자신의 감정을 미술로 표현하는 과정을 통해 카타르시스를 경험할 수 있습니다.<br/>
                    또한 미술작품의 창조과정은 자아개념을 형성하고 위험한 상황을 이겨낼 용기를 주고 <br/>
                    새로운 기술을 습득하여 삶을 풍요롭게 할 수 있습니다.<br/>
                    <br />
                    <br />
                    미술치료에 있어 치유, 보상, 회복의 중심인 치료사는 <br/>
                    내담자와 개인적 성장과 자존감을 북돋워주는 용기, 인정 및 긍정적 확신을 주는 관계를 맺게 되며 <br/>
                    이를 기반으로 상호관계를 발달시키며 의사소통을 증진시킵니다.<br/>
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

export default CureArt;
