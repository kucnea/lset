import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureGroup() {
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
        <article id="ctt" className="ctt_program_8">
        <header>
            <h1>그룹치료</h1>
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
                <span>치료 프로그램</span> <span className="fb">그룹치료</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>그룹프로그램</h2>
                <ul>
                <li className="L2">
                    <p className="text1">그룹프로그램의 목표</p>
                    <p className="text2">
                    사회성 그룹 훈련 프로그램은 또래 및 타인과의 자연스러운 관계 맺기와 <br/>
                    다양한 상황에 적절하게 대처하는 기술이 부족하여<br/>
                    학교생활에 어려움이 있는 아동 및 청소년들에게 <br/>
                    대인 관계 능력을 향상시켜주는 프로그램입니다.<br/>
                    </p>
                    {/*<p className="text2_img"><img alt="" src="../image/cont_program_10.gif"></p>*/}
                    <div className="line" />
                    <p className="text1">
                    그룹프로그램의 종류 : 짝치료, 감각통합그룹, 사회성향상 그룹,
                    의사소통향상 그룹
                    </p>
                    <ul>
                    <li>또래들과 어울려 놀기 어려운 아동</li>
                    <li>대인관계에 어려움을 느끼는 아동</li>
                    <li>
                        지나치게 소극적이거나 다른 사람 앞에 나서기를 어려워하는
                        아동
                    </li>
                    <li>자기표현을 잘 못해서 집단 내에서 소외되는 아동</li>
                    <li>산만하고 충동적이어서 또래들로부터 비난을 받는 아동</li>
                    <li>공격적인 아동</li>
                    </ul>
                    <div className="line" />
                    <p className="text1">그룹프로그램의 목표</p>
                    <ul>
                    <li>규칙의 필요성을 인식하고 따를 수 있다</li>
                    <li>타인의 상황과 마음을 이해하는 공감능력을 기를 수 있다</li>
                    <li>긍정적인 자기 표현력을 향상시킬 수 있다</li>
                    <li>자신의 바람직하지 못한 행동을 통제할 수 있다</li>
                    <li>
                        또래 관계에 대해 이해하고, 조절하고 타협하는 과정을 통해서
                        문제 해결능력을 기를 수 있다
                    </li>
                    <li>훈련 과정을 통해 집단 활동의 즐거움을 경험할 수 있다</li>
                    <li>존중하고 배려하는 과정을 통해 자존감을 회복할 수 있다</li>
                    </ul>
                    <div className="line" />
                    <p className="text1">그룹의 운영</p>
                    <ul>
                    <li>60분 수업, 20분 학부모 상담</li>
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

export default CureGroup;
