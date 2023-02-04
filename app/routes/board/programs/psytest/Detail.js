import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
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
        <h1>검사 프로그램</h1>
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
              <span>검사 프로그램</span> <span className="fb">전체</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀 */}
          <PsyTestNaviTab/>
          {/* 교육프로그램*/}
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">심리평가</p>
                <p className="text2">
                적응에 어려움을 겪는 아동 및 청소년, 성인을 대상으로  <br/>
                인지적 능력과 정서 상태, 성격 특성, 사회성, 가족관계 등  <br/>
                전반적인 영역에 대한 객관적인 평가를 실시하여  <br/>
                부적응에 대한 원인을 밝혀내고, 개인의 강점과 약점을 파악하여  <br/>
                가장 적합하고 효율적인 상담방법을 모색하는 과정입니다. <br/>
                 <br/>
                심리평가는 현재 적응에 특별한 어려움을 보이지 않더라도  <br/>
                자기 이해 및 잠재력 개발, 진로 탐색, 부적응 행동의 예방을 위하여서도 실시됩니다. <br/>
                특히 아동 및 청소년에게 인지적, 사회적, 심리적으로  <br/>
                중요한 변화가 일어나는 시기(초등학교 취학 전, 초등학교 4~5학년, 중학교 3학년, 고등학교 1학년) <br/>
                에는 원만한 학교생활 적응과 학업능력의 향상, 잠재력 개발, 진로 선택 등을 위해  <br/>
                심리평가를 받아 보는 것이 바람직합니다. <br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/programs/psytest/simlitest">
                      프로그램 자세히보기
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
                <p className="text1">발달평가 (K-Bayley-Ⅲ)</p>
                <p className="text2">
                영유아의 발달 수준을 각 영역(인지, 언어, 정서, 사회성)별로 평가하는 과정으로, <br/>
                실제 발달 연령 및 영역별 세부 특성을 객관적인 지표로 알려주어 <br/>
                아동의 발달적 강점과 약점을 파악할 수 있도록 합니다.<br/>
                특히 발달이 지연되거나 이상이 의심되는 아동을 조기에 발견하여, <br/>
                이를 예방하거나 최소화하는데 도움을 줄 수 있습니다.<br/>
                <br/>
                발달평가는 아동에 대한 정보 뿐 아니라 부모 및 부모-자녀 관계, <br/>
                적절한 양육 방법에 대한 정보도 제공합니다. <br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
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
                <p className="text1">자폐검사 (ADOS-2)</p>
                <p className="text2">
                의사소통, 사회적 상호작용, 놀이, 그리고 제한되고 상동적인 행동을 검사하는 <br/>
                표준화된 검사 도구입니다. <br/>
                ADOS-2는 자폐로 인해 나타나는 행동들을 이끌어낼 수 있는 다양한 활동으로 구성되어 있습니다. <br/>
                검사 대상자의 치료 계획 그리고 교육적 배치와 관련된 정보를 얻을 수 있습니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
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
                <p className="text1">기질검사</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
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
                <p className="text1">성격검사</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
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
                <p className="text1">부모양육스트레스검사</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/play">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="놀이치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_play.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">mim검사</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/art">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="미술치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_art.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">애착유형검사</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/sense">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="미술치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_sense.gif'} />
              </li> */}
            </ul>
          </div>          
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">행동평가</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/notice">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="인지치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_notice.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">언어평가</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/group">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="그룹치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_group.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">놀이평가</p>
                <p className="text2">
                  자세한 내용은 전화문의 바랍니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/family">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/*  <li className="R"><img alt="" src="../image/cont_program_08.gif"></li>*/}
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
