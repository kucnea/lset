import React from 'react';
import { Link } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";

export function TeacherDetail() {
  return (
<>
  {/* PC용 헤드카피*/}
  <div className="subtop">
    <div className="head_copy">
      <h2>
        00 소개
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
        00 소개
        <br />
        00 소개
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //모바일용 헤드카피*/}
  <div className="subtop_140" />
  <div className="subtop_u"></div>
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    {<IntroduceSubMenu/>}
    {/* <div className="subtop_u" /> */}
    {/* 왼쪽메뉴*/}
    <div id="left_container_board">
      {/* 게시판 목록 시작 { */}
      {/* 상단서브타이틀 */}
      <div className="hgroup">
        <h1>
          <span>치료사 소개</span>
        </h1>
        <p>
          {" "}
          <span className="home">
            <span>HOME</span>
          </span>
          <span className="fb">치료사 소개</span>
          <span className="fb">심성실</span>{" "}
        </p>
      </div>
      {/* //상단서브타이틀*/}
      <p className="bu1">영역별&nbsp;전문 치료사 선생님을 소개합니다</p>
      {/* 탭    <div className="tabgroup">
     <div className="tabnavi">
<ul>
  <li className="on"><a href="../bbs/board.php?bo_table=teacher">치료사</a></li>
  <li><a href="../bbs/content.php?co_id=teacher2">자문위원</a></li>
    
</ul>
    </div>
    </div>
    <!--// 탭*/}
      {/* 게시물 읽기 시작 { */}
      <article id="bo_v" style={{ width: "100%" }}>
        {/*<header>
      <h1 id="bo_v_title">
          <font style="font-size:19px;font-weight:bold;font-family:'bongothic'">한혜림</font> &nbsp; <font style="font-size:12px;font-family:'bongothic'"> | 한혜림 </font>
      </h1>
  </header>*/}
        {/*<header>
      <h1 id="bo_v_title" style="margin-bottom:10px;">"한혜림 "</h1>
  </header>*/}
        {/*<section id="bo_v_info">
      <h2>페이지 정보</h2>
      작성자 <strong><span className="sv_member">관리자</span></strong>
      <span className="sound_only">작성일</span><strong>17-03-08 19:58</strong>
      조회<strong>562회</strong>
      댓글<strong>0건</strong>
  </section>*/}
        {/* 게시물 상단 버튼 시작 { 
  <div id="bo_v_top">
                      <ul className="bo_v_nb">
                      <li><a href="./board.php?bo_table=teacher&amp;wr_id=136" className="btn_b01">다음글</a></li>        </ul>
      
      <ul className="bo_v_com">
                                                                      <li><a href="./board.php?bo_table=teacher&amp;page=" className="btn_b01">목록</a></li>
                              </ul>
          </div>*/}
        {/* } 게시물 상단 버튼 끝 */}
        <section id="bo_v_atc" style={{fontFamily: "'나눔고딕','Nanum Gothic'"}}>
          <h2 id="bo_v_atc_title">본문</h2>
          <div id="gall_ul">
            <div className="td_web_img" style={{}}>
              <div id="bo_v_img"></div>
              <a href="">
                <div className="profile" style={{ margin: "0 auto" }} />{" "}
              </a>
            </div>
            <div style={{ float: "left" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div
              width="100%"
              id="sub_11"
              style={{ float: "left", maxWidth: 550 }}
            >
              <table width="100%">
                <tbody>
                  <tr>
                    <td>
                      <span 
                        className="add_title"
                        style={{ marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" }}>
                        심성실
                      </span>
                      {/* <span className="add_title_slogun"></span>*/}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        paddingTop: "1.000em",
                        textAlign: "left",
                        color: "#333"
                      }}
                    >
                      <i
                        className="fa fa-chevron-circle-right"
                        style={{ marginRight: "0.250em", color: "#7d9d4e" }}
                      />
                      치료분야
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingTop: 5,
                        paddingLeft: 5,
                        color: "#666",
                        lineHeight: "1.750em"
                      }}
                    >
                      {" "}
                      학습지도 / 가족상담 / 성인상담
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        paddingTop: "1.000em",
                        textAlign: "left",
                        color: "#333"
                      }}
                    >
                      <i
                        className="fa fa-chevron-circle-right"
                        style={{ marginRight: "0.250em", color: "#7d9d4e" }}
                      />
                      학력 및 교육
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingTop: 5,
                        paddingLeft: 5,
                        color: "#666",
                        lineHeight: "1.750em"
                      }}
                    >
                      {" "}
                      서울여자대학교 사회복지.기독교대학원 가족상담 석사
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        paddingTop: "1.000em",
                        textAlign: "left",
                        color: "#333"
                      }}
                    >
                      <i
                        className="fa fa-chevron-circle-right"
                        style={{ marginRight: "0.250em", color: "#7d9d4e" }}
                      />
                      경력사항
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingTop: 5,
                        paddingLeft: 5,
                        color: "#666",
                        lineHeight: "1.750em"
                      }}
                    >
                      {" "}
                      前) 함께하는아동청소년센터
                      <br />
                      現) 도봉아동발달센터
                      <br />
                      現) 구리언어심리상담센터                      
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        paddingTop: "1.000em",
                        textAlign: "left",
                        color: "#333"
                      }}
                    >
                      <i
                        className="fa fa-chevron-circle-right"
                        style={{ marginRight: "0.250em", color: "#7d9d4e" }}
                      />
                      면허 및 자격사항
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        paddingTop: 5,
                        paddingLeft: 5,
                        color: "#666",
                        lineHeight: "1.750em"
                      }}
                    >
                      {" "}
                      인지학습지도사 자격증(한국인지학습치료학회)
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ clear: "both", height: 30 }} />
          {/* 본문 내용 시작 { */}
          {/* } 본문 내용 끝 */}
          <div id="bo_v_img"></div>
          {/* 스크랩 추천 비추천 시작 { */}
          {/* } 스크랩 추천 비추천 끝 */}
        </section>
        {/* 링크 버튼 시작 { */}
        <div id="bo_v_bot">
          <ul className="bo_v_nb">
            <li>
              <Link to="/board/introduce/teacher/teacherdetail3" className="btn_b01">
                이전글
              </Link>
            </li>
            <li>
              <Link to="/board/introduce/teacher/teacherdetail7" className="btn_b01">
                다음글
              </Link>
            </li>{" "}
          </ul>
          <ul className="bo_v_com">
            <li>
              <Link to="/board/introduce/teacher/teacher" className="btn_b01">
                목록
              </Link>
            </li>
          </ul>
        </div>
        {/* } 링크 버튼 끝 */}
      </article>
      {/* } 게시판 읽기 끝 */}
      {/* } 게시글 읽기 끝 */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #GNB ul li.gnb01 a {color:#a99808;}\n    #lnb>ul>li.lnb04 a {color:#a99808;}\n    .subNav ul li.lnb04 a {background-color: #89BCC1;}\n    "
        }}
      />
      <br />
      <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .self_table th {font-family:"맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size:13px; line-height:18px; padding:20px 0;}\n    .self_table th span {font-size:15px; font-weight:bold;}\n    .self_table th span b {color: rgb(140, 178, 29);}\n    .self_table td {font-family:"맑은 고딕", Malgun Gothic, "나눔고딕", NanumGothic, "돋움", dotum; font-size:13px; line-height:22px;}\n    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}\n    \n    \n    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}\n    .self_table2 th, .boardList td {padding: 9px 3px;}\n    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}\n    '
              }}
            />      
      {/* //게시판 목록 끝 */}
    </div>
  </div>
  {/*//콘텐츠 끝 */}
</>
  );
}


export default TeacherDetail;

