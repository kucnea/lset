import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function CurePlay() {
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
        <article id="ctt" className="ctt_program_3">
        <header>
            <h1>놀이치료</h1>
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
                <span>치료 프로그램</span> <span className="fb">놀이치료</span>{" "}
                </p>
            </div>
            {/* //상단서브타이틀 */}
            <CureNaviTab/>
            {/* 교육프로그램*/}
            <div className="cont_program_list">
                <h2>놀이치료</h2>
                <ul>
                <li className="L2">
                    <p className="text1">
                    다양한 놀이를 활용한 행동으로 창의적인 사고 및 의사소통을
                    촉진합니다.
                    </p>
                    <p className="text2">
                    자신의 생각이나 느낌을 언어로 전달하는데 제한이 있는 아동들에게 <br/>
                    행동표현을 통해서 정서,행동,발달상의 문제를 해결합니다. <br/>
                    아동의 불안감을 완화시키고 안정적으로 애착이 형성되도록 도우며 <br/>
                    사회적 상호작용 욕구와 자신감을 증진시켜 타인과 적절한 상호작용이 가능하도록 <br/>
                    전반적 발달을 가속화시키는 치료프로그램입니다.<br/>
                    </p>
                    <p className="text2_img">
                    <img alt="놀이치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_play.gif'} />
                    </p>
                    <div className="line" />
                    <p className="text1">놀이치료가 무엇인가요?</p>
                    <p className="text2" style={{ width: "100%" }}>
                    아이들의 놀이는 자기표현의 수단뿐 아니라 무한한 잠재력을 지니고 있습니다.<br/> 
                    어른은 언어로써 자신의 다양한 감정을 표현하지만 아동은 놀이가 바로 언어입니다. <br/>
                    따라서 놀이는 아동의 정서발달, 언어발달, 인지발달을 측정하는 하나의 도구이며 <br/>
                    다양한 문제를 해결하거나 성장을 촉진시키는 하나의 도구입니다.<br/>
                    <br />
                    <br />
                    놀이치료는 놀이치료 전문가가 아동의 놀이를 관찰하고 해석하여 <br/>
                    놀이에 함께 참여하여 지지하고 공감해주는 가운데 <br/>
                    아동의 갈등, 좌절, 분노, 슬픔, 불안 등이 놀이를 통해 자유롭게 발산되고 아동은 자신을 이해하고 수용하게 되며<br/> 
                    그 과정에서 사회성, 인지, 정서 발달을 도모하게 됩니다.<br/>
                    <br />
                    <br />
                    본 기관에서는 치료사와 아동 간 놀이를 통해 <br/>
                    애착 증진과 정서, 인지, 언어발달을 도모하는 치료 놀이적 접근, 게임의 규칙을 배우고 <br/>
                    주의 산만과 충동성을 조절할 수 있도록 하는 게임 놀이치료, 심리적인 문제를 해결하는 하나의 도구로 <br/>
                    미술이나 모래놀이를 이용한 미술 놀이치료, 모래 놀이 치료 등의 프로그램을 아동의 특성에 맞게 실시하고 있습니다.<br/>
                    </p>
                    <div className="line" />
                    <p className="text1">발달놀이치료</p>
                    <p className="text2" style={{ width: "100%" }}>
                    발달 단계의 초기에 있는 아동들은 거의 모든 활동에 놀이가 포함되어 있으며, <br/>
                    '아동의 놀이'가 아동을 지적, 사회적, 정서적, 신체적으로 발달시키는 중요한 방법을 인식하지 못할지도 모릅니다.<br/> 
                    어린 아동은 타고난 탐색가로 조용할 때가 없습니다. 놀고 경험하는 가운데 시행착오를 통해서 배우게 됩니다. <br/>
                    또한 성장하면서 놀이를 통해 자신의 경험과 감정, 소망을 표현하게 됩니다.<br/>
                    <br />
                    <br />
                    놀이치료는 발달지연이 있는 아동들에게는 즐겁고 자연스런 상황에서 놀이하면서 <br/>
                    신체 사용 능력을 숙달하고 언어를 습득하며, 다양한 것을 탐색하고 판단하면서 발달을 촉진시킬 수 있습니다.<br/>
                    <br />
                    <br />
                    또한 영유아기에 결핍되었던 부분을 놀이치료 과정 속에서 <br/>
                    아동에게 애정과 즐거운 감각, 접촉을 보충해 줌으로써 실제 어머니와 애착 증진과 아동 개인의 발달지연을 올려 줄 수
                    있습니다.
                    </p>
                    <div className="line" />
                    <p className="text1">정서놀이치료</p>
                    <p className="text2" style={{ width: "100%" }}>
                    아동들이 체험하는 현실세계의 경험은 종종 놀이를 통해 전달됩니다. <br/>
                    어른들은 언어라는 매개체로 감정, 좌절, 걱정, 개인적인 문제 등을 의사소통 하지만 <br/>
                    아동은 놀이와 활동으로 의사소통 합니다.<br/>
                    <br />
                    <br />
                    아동은 성장하면서 경험하는 불안, 두려움, 혼란, 좌절, 공격의 욕구 등을 놀이를 통해 표현하고 <br/>
                    아동과 함께 하는 전문적인 치료사가 이러한 과정을 도와 아동의 성장을 도모합니다.<br/>
                    <br />
                    <br />
                    따라서 지금 아동이 서있는 그 자리에서 새로운 자아상을 형성하여 건강한 발달을 촉진시키고 성장할 수 있도록 도와줄 수 있습니다.
                    </p>
                    {/*
        <div className="line"></div>
        <p className="text1">모래놀이치료</p>
        <p className="text2" style="width: 100%;">모래놀이치료는 모래상자와 물, 여러가지 소품을 이용하여 성장과 치료의 과정을 눈에 볼 수 있게 해주는 톡특한 방식의 놀이치료 전문 분야입니다.<br><br>
        모래상자 안에 만들어진 3차원의 세계는 전혀 표현되지 않았던 개개인의 경험과 생각들이 상징적으로 나타내고 아동의 시각과 촉감을 포함한 전체적인 감각요소를 통합하는 다차원적이고 역동적인 치료방법입니다. 언어와 논리보다는 감각과 감성을 통한 심리치료이며 창의적인 퇴행을 격려하며 마음의 깊은 수준으로 빨리 침투하여 강한 치유력을 발휘합니다.<br><br>
        모래놀이치료에서 아동은 언어와 논리보다는 감각과 감성으로 모래알의 움직인 하나하나까지도 모두 자기 자신을 담아내고 드러냅니다. 모래놀이치료는 단순한 모래장난이 아니며 자기 마음과 접촉하고 치료자와의 경험을 통해 자기를 새롭게 발견하고 새롭게 탄생할 수 있는 심리적 치유의 경험을 하게 하는 치료방법입니다.
        </p>*/}
                    <div className="line" />
                    <p className="text1">놀이치료는 어떤 아동들이 받나요?</p>
                    <p>&nbsp;</p>
                    <p className="text2">
                    <b>발달문제</b>
                    </p>
                    <p className="text2" style={{ width: "100%" }}>
                    - 지적장애, 자폐, 언어, 청각, 신체장애 등의 발달상의 어려움과
                    정서적인 어려움을 가진 아동
                    </p>
                    <p className="text2">
                    <b>정서문제</b>
                    </p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>반응이 별로 없고 무표정한 아이</li>
                        <li>고집이 센 아이</li>
                        <li>집 이외의 장소에서 말을 하지 않는 아이</li>
                        <li>손톱을 물어뜯는 아이</li>
                        <li>감정의 기복이 심한 아이</li>
                        <li>특정상황, 장소, 동물을 무서워하는 아이</li>
                        <li>피해의식이 있는 아이</li>
                        <li>멍하게 허공을 응시하고 우울해하는 아이</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>엄마와 떨어지기 힘들어하는 아이</li>
                        <li>신경질과 짜증이 심한 아이</li>
                        <li>걱정이나 불안이 많은 아이</li>
                        <li>특별한 이상없이 여기저기 아프다고하는 아이</li>
                        <li>지나치게 겁이 많은 아이</li>
                        <li>강박적 사고,집착,행동을 보이는 아이</li>
                        <li>불행하다고 생각하거나 슬퍼하고 우울해하는 아이</li>
                        <li style={{ listStyleType: "none" }}>&nbsp;</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
                    <p className="text2">
                    <b>학습문제</b>
                    </p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>공부하기 싫어하는 아이</li>
                        <li>시험에 대한 불안이 심한 아이</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>학교성적이 갑자기 떨어진 아이</li>
                        <li>숙제나 과제물을 느리게 하는 아이</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
                    <p className="text2">
                    <b>행동문제</b>
                    </p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>주의집중을 잘 못하는 아이</li>
                        <li>거짓말을 자주 하는 아이</li>
                        <li>화를 잘 내는 아이</li>
                        <li>어른에게 반항적이고 문제행동을 보이는 아이</li>
                        <li>사람이나 동물에게 잔인한 짓을 하거나 괴롭히는 아이</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>물건을 던지거나 부수는 아이</li>
                        <li>남의 물건을 훔치는 아이</li>
                        <li>고집이 세고 자기주장만 내세우는 아이</li>
                        <li>전자오락과 컴퓨터게임에 지나치게 빠져있는 아이</li>
                        <li>&nbsp;</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
                    <p className="text2">
                    <b>친구관계 문제</b>
                    </p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>또래와 잘 어울리지 못하는 아이</li>
                        <li>친구들을 왕따시키는 아이</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>친구들에게 놀림을 당하거나 왕따를 당하는 아이</li>
                        <li>친구를 때리거나 괴롭히는 아이</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
                    <p className="text2">
                    <b>기타</b>
                    </p>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>잠을 잘 못자거나 악몽을 꾸는 아이</li>
                        <li>
                        눈을 깜박이거나 콧소리를 내거나 어깨를 움찔거리는 등<br/>
                        틱행동을 나타내는 아이
                        </li>
                        <li>화를 잘 내는 아이</li>
                        <li>신체적 혹은 성적 학대를 받은 아이</li>
                    </ul>
                    </div>
                    <div style={{ width: "50%", float: "left" }}>
                    <ul>
                        <li>야뇨증과 같은 대소변 문제를 지닌 아이</li>
                        <li>형제간 심한 경쟁으로 싸움이 많은 아이</li>
                        <li>고집이 세고 자기주장만 내세우는 아이</li>
                        <li>유치원이나 학교생황에 적응을 잘 못하는 아이</li>
                    </ul>
                    </div>
                    <p>&nbsp;</p>
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

export default CurePlay;
