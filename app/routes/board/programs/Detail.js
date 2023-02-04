import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import {PsyTestNaviTab} from 'app/routes/board/programs/psytest/PsyTestNaviTab';
import * as vars from "app/models/js/variable.js";

export function Detail() {
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
    <article id="ctt" className="ctt_program">
      <header>
        <h1>치료/검사 프로그램</h1>
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
              <span>치료/검사 프로그램</span>
            </h1>
            <p>
              {" "}
              <span className="home">
                <span>HOME</span>
              </span>{" "}
              <span>치료 프로그램</span> <span className="fb">전체</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀 */}
          <span>치료 프로그램</span>
          <CureNaviTab/>
          <span>검사 프로그램</span>
          <PsyTestNaviTab/>
          {/* 교육프로그램*/}
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">치료 프로그램</p>
                <p className="text2">
                아동 및 성인의 건강한 발달과 심리적 자원을 위한 다양한 프로그램 확인<br/> 
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/programs/cure/detail">
                      치료 프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">검사 프로그램</p>
                <p className="text2">
                개인에 맞춘 다양한 검사 프로그램 확인 <br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/programs/psytest/detail">
                      검사 프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
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

export default Detail;
