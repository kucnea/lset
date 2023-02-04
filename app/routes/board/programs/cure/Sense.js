import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CureSense() {
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
        <article id="ctt" className="ctt_program_4">
        <header>
            <h1>감각통합치료</h1>
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
                <span>치료 프로그램</span> <span className="fb">감각통합</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>감각통합치료</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    특별한 기능훈련( 연필 쥐기, 평균대 걷기 )이 아니라 <br/>
                    기능을 올바르게 수행할 수 있도록{" "}<br/>
                    <u>기초적인 감각기능과 운동능력을 발달</u>시키는 치료입니다.
                    </p>
                    <p className="text2">
                    감각통합치료는 작업치료의 치료접근법 중 하나로 주변환경에 적절하게 반응할 수 있도록, <br/>
                    뇌에서 감각을 조직화하는 것을 돕는 치료로, 특정 감각에 과민한 반응을 보이거나 <br/>
                    특정 자극에 과도하게 집착하여 일상생활에 심각한 제한을 받고 있는 <br/>
                    아동 및 전반적인 감각통합의 문제로 인해 <br/>
                    운동조절 및 행동의 조절, 발달의 지연을 보이는 아동을 대상으로 <br/>
                    다양한 감각도구를 이용하여 감각통합기능 향상을 도모하는 치료프로그램입니다.<br/>
                    (일대일 치료 혹은 소그룹으로 실시하고 있습니다.) <br/>
                    <br />
                    <br />
                    아이가 필요로 하는 감각을 적절히 제공해 주고, <br/>
                    뇌에서 조직화하도록 도와주며 아이가 어떤 감각이 필요한지, <br/>
                    지금 일상생활에서 어떤 점이 힘든지에 관한 정보를 보다 원활히 할 수 있도록 <br/>
                    치료 및 제언을 해드리는 프로그램입니다. <br/>&nbsp;
                    </p>
                    <p className="text2_img">
                    <img alt="감각통합치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_sense.gif'} />
                    </p>
                    <div className="line" />
                    <p className="text1">치료 대상</p>
                    <ul>
                    <li>
                        피부 접촉, 움직임, 빛 또는 소리에 과민 또는 과소 반응을
                        보이는 아동
                    </li>
                    <li>쉽게 산만해지거나 충동적이고 자아조절이 부족한 아동</li>
                    <li>사회적 또는 감정적 문제를 가진 아동</li>
                    <li>활동수준이 높거나 낮은 아동</li>
                    <li>신체적으로 둔하거나 주의부족을 보이는 아동</li>
                    <li>자신을 편안하게 하거나 가라앉히는 능력이 부족한 아동</li>
                    <li>자아개념이 부족한 아동</li>
                    </ul>
                    <div className="line" />
                    <p className="text1">감각통합치료는 어떻게하나요?</p>
                    <ul>
                    <li>감각 입력 조정하기</li>
                    <li>자세반응 향상하기</li>
                    <li>운동계획능력 향상하기</li>
                    <li>신체 이미지, 움직임, 위치에 대한 감각 통합</li>
                    <li>
                        환경에서의 공간 인식, 환경 내의 위치 관계에 대한 감각 통합
                    </li>
                    <li>동작의 순서나 리듬, 타이밍에 대한 감각 통합</li>
                    <li>신체 좌우를 협동적으로 움직이는 능력</li>
                    <li>
                        시각에 의한 감각-인지 능력, 청각에 의한 대화 능력 향상하기
                    </li>
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

export default CureSense;
