import React from 'react';
import { Route, Link } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";

export function IntroduceCenter() {
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
        <article id="ctt" className="ctt_company">
        <header>
            <h1>센터 소개</h1>
        </header>
        <div id="ctt_con">
            <style
            dangerouslySetInnerHTML={{
                __html:
                "\n#GNB ul li.gnb01 a {color:#a99808;}\n#lnb>ul>li.lnb01 a {color:#a99808;}\n.subNav ul li.lnb01 a {background-color: #89BCC1;}\n"
            }}
            />
            {/* 우측컨텐츠*/}
            <div id="left_container">
            {/* 게시판 또는 컨텐츠 */}
            {/* 콘텐츠 시작*/}
            <div className="hgroup">
                <h1>
                <span>센터 소개</span>
                </h1>
                <p>
                {" "}
                <span className="home">
                    <span>HOME</span>
                </span>
                <span className="fb">센터 소개</span>{" "}
                </p>
            </div>
            {/*<p className="bu1">문구</p>*/}
            {/* 회사소개*/}
            <style
                dangerouslySetInnerHTML={{
                __html:
                    '\n\n.container_block_history {float:left;}\n.container_block_history h2 {float:left; text-align: center; text-align: justify; color: rgb(102, 102, 102); line-height: 60px; letter-spacing: -2px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 35px; font-weight: bold; color:#949494;}\n.container_block_history p {float:left;  margin-left:40px;  padding-top:10px; text-align: justify; color: rgb(102, 102, 102); line-height: 23px; letter-spacing: -1px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 13px;}\n\n.sub_tit {margin-bottom:10px;}\n.cont_company_fotter {float:right; margin-top:30px; padding-right:20px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 13px;}\n.cont_company_fotter span {font-size:20px; font-weight:bold; color:#333;}\n.container_block_left {width:45%;}\n@media screen and (max-width:700px) { \n/* 회사소개 */\n.container_block_left {width:100%; float:left; text-align:left;}\n.container_block_right {width:100%; float:left;}\n}\n\n\n  '
                }}
            />
            {/* title*/}
            <div className="cont_company_tit">
                <div className="tit">
                마음을 나누는 따뜻한 세상&nbsp;<b>{vars.REACT_APP_CENTER_NAME}</b>
                </div>
                {/*  <div className="sub"></div>*/}
            </div>
            {/* //title*/}
            {/* cont*/}
            <div className="container_box_left">
                <div className="tit">
                <h2>상담시간</h2>
                <p>
                    평일 : {vars.REACT_APP_CENTER_NORMAL_TIME} / 토 {vars.REACT_APP_CENTER_SATURDAY_TIME} <br />
                    (일,공휴일 휴무){" "}
                </p>
                </div>
            </div>
            <div className="container_box_right">
                <div>
                <img alt="" src={vars.REACT_APP_URL + '/image/sub_tmp_img.jpg'} border={0} />
                </div>
            </div>
            <div className="container_block" />
            <div className="container_block_left">
                <div className="sub_block">
                <div className="sub_tit">하나. 문제해결을 위한 노력</div>
                <div className="sub_txt">
                    아이들의 발달과정 중 나타날 수 있는 다양한 문제를 함께 고민하고
                    해결 해 나가도록 노력 하겠습니다.
                </div>
                </div>
                <div className="sub_block">
                <div className="sub_tit">하나. 체계적인 치료교육</div>
                <div className="sub_txt">
                    아이와의 인격적 관계를 바탕으로, 적절한 상호작용을 통해 올바른
                    운동기능 습득뿐만 아니라 언어, 인지, 사회성 발달 등 포괄적인
                    발달과정을 고려하여 재활치료교육을 해 나가겠습니다.
                </div>
                </div>
            </div>
            <div className="container_block_right">
                <div className="sub_block">
                <div className="sub_tit">하나. 잠재능력 극대화</div>
                <div className="sub_txt">
                    아이의 미래 가능성을 바탕으로 아이 눈높이에 맞춰 아이의
                    잠재능력을 최대한 이끌어 내어 치료실 뿐 아니라 가정 및
                    사회활동으로 이어지도록 하는데 최선을 다하겠습니다.
                </div>
                </div>
                <div className="sub_block">
                <div className="sub_tit">하나. 밝은 웃음이 넘치는 센터</div>
                <div className="sub_txt">
                    부모님의 입장에서 부모님의 마음으로, 아이의 행복과 성장을 위하여
                    최선을 다하겠습니다.
                </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                __html:
                    '\n\n.container_block_history {float:left;}\n.container_block_history h2 {float:left; text-align: center; text-align: justify; color: rgb(102, 102, 102); line-height: 60px; letter-spacing: -2px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 35px; font-weight: bold; color:#949494;}\n.container_block_history p {float:left;  margin-left:40px;  padding-top:10px; text-align: justify; color: rgb(102, 102, 102); line-height: 23px; letter-spacing: -1px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 13px;}\n\n\n.cont_company_fotter {float:right; margin-top:30px; padding-right:20px; font-family: "맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size: 13px;}\n.cont_company_fotter span {font-size:20px; font-weight:bold; color:#333;}\n.sub_txt {line-height:22px;}\n  '
                }}
            />
            <div className="container_block_bottom">
                <div className="sub_tit">아이는 건강한 미래의 주인입니다!</div>
                <div className="sub_txt">
                아이들의 마음 속에 더 크고 아름다운 세상을 꿈꿀 수 있도록 항상
                노력할 것을 약속 드립니다.
                </div>
            </div>
            <div className="cont_company_fotter"></div>
            <div className="cont_company_fotter"></div>
            </div>
            {/* //cont*/}
            {/*//콘텐츠 끝 */}
            {/* //게시판 또는 컨텐츠 */}
            {/* 우측컨텐츠*/}{" "}
        </div>
        </article>
        {/*//우측 콘텐츠 끝 */}
    </div>
    {/*//콘텐츠 끝 */}
    </>


  );
}


export default IntroduceCenter;

