import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureNotice() {
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
        <article id="ctt" className="ctt_program_5">
        <header>
            <h1>인지학습</h1>
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
                <span>치료 프로그램</span> <span className="fb">인지학습</span>
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>인지학습</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    친구들과 함께 학습에 참여하고 <br/>
                    잠재력을 최대한 발휘할 수 있도록 도와줍니다.
                    </p>
                    <p className="text2">
                    인지발달과 학습능력 면에서 부진이나 지체를 보이는 <br/>
                    아동 및 청소년의 인지학습 수준과 개별 특성을 평가하여 <br/>
                    어려움을 보이는 인지영역 및 학습능력의 발달을 돕는 치료프로그램입니다.<br/>
                    <br />
                    <br />
                    &nbsp;
                    </p>
                    <p className="text2_img">
                    <img alt="인지치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_notice.gif'} />
                    </p>
                    <div className="line" />
                    <p className="text1">치료 대상</p>
                    <ul>
                    <li>인지발달에 어려움을 가진 아동</li>
                    <li>취학 전 아동으로 기초적인 사물개념 이해가 어려운 아동</li>
                    <li>수, 개념, 시간, 공간개념 등에 어려움이 있는 아동</li>
                    <li>글자 읽기, 쓰기에 어려움이 있는 학령기 아동</li>
                    <li>지능은 정상이나 학습장애로 학습에 어려움을 가진 아동</li>
                    <li>학습이 부진한 아동</li>
                    </ul>
                    <div className="line" />
                    <p className="text1">기대 효과</p>
                    <p className="text2" style={{ width: "100%" }}>
                    {" "}
                    인지학습치료를 통해 아동은 기본적으로 학습할 태도를 갖추는 훈련을 받게 됩니다. <br/>
                    인지치료는 집중력이 높아지고 앉아있는 시간이 점차 늘어나는 효과가 있습니다. <br/>
                    필기구 및 학습도구를 사용하는 능력이 개발되며, 수준별 학습지도를 통해 기초학습능력을 기르게 됩니다.<br/>
                    <br />
                    <br />
                    학령기 이전의 아이들에게는 수와 한글을, 학령기 아이들은 읽기, 쓰기, 말하기는 물론 <br/>
                    수학 등의 과목들을 지도하게 되는데, 이를 통해 아동들은 의사소통 능력이 확장되고 자기표현 능력이 늘어나게 됩니다. <br/>
                    이를 통해 아동은 문제행동을 조절하는 힘이 생기고 자신감을 회복하게 됩니다.<br/>
                    {" "}
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

export default CureNotice;
