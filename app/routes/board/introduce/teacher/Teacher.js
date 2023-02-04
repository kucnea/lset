import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";

export function IntroduceTeacher() {

  useEffect(() => {      

    if(document.getElementById('teacher_css')){
      var link = document.getElementById('teacher_css');
      link.href = '/styles/css/teacher_css.css';
    }else{
        var link = document.createElement('link');
        link.id = 'teacher_css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/teacher_css.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }      

    return () => {};
  },);

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
              <span className="fb">치료사 소개</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀*/}
          <p className="bu1">영역별&nbsp;전문 치료사 선생님을 소개합니다</p>
          <h2 id="container_title_photo">
            <span className="sound_only"> 목록</span>
          </h2>
          <div id="bo_gall" style={{ width: "100%" }}>
            <form
              name="fboardlist"
              id="fboardlist"
              action="./board_list_update.php"
              onSubmit="return fboardlist_submit(this);"
              method="post"
            >
              <input type="hidden" name="bo_table" defaultValue="teacher" />
              <input type="hidden" name="sfl" defaultValue="" />
              <input type="hidden" name="stx" defaultValue="" />
              <input type="hidden" name="spt" defaultValue="" />
              <input type="hidden" name="page" defaultValue={1} />
              <input type="hidden" name="sw" defaultValue="" />
              <ul id="gall_ul">
                {/* <li className="gall_li_teacher ">
                  <span className="sound_only">11 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail" className="add_title">
                        한혜림
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>센터장/언어치료사</b>
                      <br />
                      <br />
                      <div
                        style={{
                          lineHeight: "22px",
                          display: "inline-block",
                          color: "#666"
                        }}
                      >
                        한림대학교 언어청각학부 언어병리학 학사
                        <br />
                        단국대학교 특수교육대학원 언어치료 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 삼전종합사회복지관 아동발달지원센터
                        <br />
                        前) 맑은 수 병원 재활의학과
                        <br />
                        前) 함께하는아동청소년센터
                        <br />
                        前) 중계종합사회복지관 아동발달지원센터
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail" />
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail" />
                      {" "}
                    </li>
                  </ul>
                </li> */}
                <li className="gall_li_teacher ">
                  <span className="sound_only">5 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail6">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail6">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail6" className="add_title">
                        최수연
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>심리검사 / 놀이치료 / 청소년상담 / 성인상담</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        이화여자대학교 일반대학원 발달 및 발달임상심리 석사
                        <br />
                        이화여자대학교 심리학과
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 중구아이존
                        <br />
                        前) 이화여자대학교 아동발달센터
                        <br />
                        前) 서울시 청소년 정신재활시설 푸른존
                        <br />
                        現) 경기도의료원 의정부병원
                        <br />
                        現) 인간발달복지연구소
                        <br />
                        現) 늘해랑인지심리연구소
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail6"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail6">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="gall_li_teacher ">
                  <span className="sound_only">10 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail1">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail1">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail1" className="add_title">
                        김혜진
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>언어치료사</b>
                      <br />
                      <br />
                      <div
                        style={{
                          lineHeight: "22px",
                          display: "inline-block",
                          color: "#666"
                        }}
                      >
                        한림대학교 언어청각학부 언어병리학 학사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 강남구 목련어린이집
                        <br />
                        現) 동대문장애인종합복지관
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail1"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail1">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="gall_li_teacher ">
                  <span className="sound_only">9 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail2">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail2">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail2" className="add_title">
                        최유림
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>언어재활사</b>
                      <br />
                      <br />
                      <div
                        style={{
                          lineHeight: "22px",
                          display: "inline-block",
                          color: "#666"
                        }}
                      >
                        한림대학교 언어병리학과 학사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 이화심리상담센터
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail2"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail2">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="gall_li_teacher ">
                  <span className="sound_only">8 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail3">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail3">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail3" className="add_title">
                        송은경
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>언어치료사</b>
                      <br />
                      <br />
                      <div
                        style={{
                          lineHeight: "22px",
                          display: "inline-block",
                          color: "#666"
                        }}
                      >
                        한림대학교 보건과학대학원 언어병리학 학사
                        <br />
                        한림대학교 언어청각학부 언어병리학 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 대전다문화가정지원센터 언어지도사
                        <br />
                        現) 서울중계사회복지관 아동발달지원센터 언어치료사
                        <br />
                        現) 구리언어심리상담센터 언어치료사
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail3"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail3">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="gall_li_teacher ">
                  <span className="sound_only">7 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail4">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail4">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <a
                        href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=134"
                        className="add_title"
                      >
                        박보람
                      </a>
                      <br />
                      <b style={{ color: "#333" }}>언어치료사</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        루터대학교 언어치료학 전공 학사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 한국언어치료연구소
                        <br />
                        前) 사랑나눔발달센터
                        <br />
                        前) 하람아동발달센터
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail4"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail4">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="gall_li_teacher ">
                  <span className="sound_only">6 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail5">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail5">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail5" className="add_title">
                        심성실
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>학습지도 / 가족상담 / 성인상담</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        서울여자대학교 사회복지․기독교대학원 가족상담 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 함께하는아동청소년센터
                        <br />
                        現) 구리언어심리상담센터
                        <br />
                        現) 도봉아동발달센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail5"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail5">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="gall_li_teacher ">
                  <span className="sound_only">4 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=123">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </a>
                    </li>
                    <li className="pr_btn">
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=123">
                        프로필 보기
                      </a>
                    </li>
                    <li className="gall_text_href">
                      <a
                        href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=123"
                        className="add_title"
                      >
                        이단비
                      </a>
                      <br />
                      <b style={{ color: "#333" }}>미술치료사</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        동국대학교 문화예술대학원 예술치료학과 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 수정 청소년 수련관
                        <br />
                        前) 레브하우스 교육상담센터
                        <br />
                        前) 도봉구 장애인 종합 복지관
                        <br />
                        現) 동대문 장애인 종합 복지관
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=123"></a>
                    </li>
                    <li>
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=123">
                        {" "}
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="gall_li_teacher ">
                  <span className="sound_only">3 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail7">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail7">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail7" className="add_title">
                        이혜진
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>미술치료사</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        차의과대학교 미술치료대학원 임상미술치료학 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 고려대학교 구로병원
                        <br />
                        前) 인천 프라임아동발달센터
                        <br />
                        現) 남양주 꿈자람 언어심리발달센터
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail7"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail7">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="gall_li_teacher ">
                  <span className="sound_only">2 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=122">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </a>
                    </li>
                    <li className="pr_btn">
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=122">
                        프로필 보기
                      </a>
                    </li>
                    <li className="gall_text_href">
                      <a
                        href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=122"
                        className="add_title"
                      >
                        김수정
                      </a>
                      <br />
                      <b style={{ color: "#333" }}>감각통합치료사</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        경복대학교 작업치료 학사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 예빛병원 외 다수 재활 병원 근무
                        <br />
                        前) 베트남 광찌성 여린현 재활센터
                        <br />
                        前) 브레이닝 아동 발달센터
                        <br />
                        前) 참사랑 아동 발달센터
                        <br />
                        前) 라임 아동 발달센터
                        <br />
                        前) 구리 하람 아동 발달센터
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=122"></a>
                    </li>
                    <li>
                      <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher&wr_id=122">
                        {" "}
                      </a>
                    </li>
                  </ul>
                </li> */}
                <li className="gall_li_teacher ">
                  <span className="sound_only">1 </span>
                  <ul className="gall_con">
                    <li className="gall_href">
                      <Link to="/board/introduce/teacher/teacherdetail8">
                        <div className="profile">
                          <img
                            src={vars.REACT_APP_URL + '/image/no_image.png'}
                            align="absmiddle"
                            border={0}
                          />
                        </div>{" "}
                      </Link>
                    </li>
                    <li className="pr_btn">
                      <Link to="/board/introduce/teacher/teacherdetail8">
                        프로필 보기
                      </Link>
                    </li>
                    <li className="gall_text_href">
                      <Link to="/board/introduce/teacher/teacherdetail8" className="add_title">
                        손정규
                      </Link>
                      <br />
                      <b style={{ color: "#333" }}>심리치료/심리검사</b>
                      <br />
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block", color: "#666" }}>
                        가톨릭대학교 사회과학부 심리/사회복지학과 학사
                        <br />
                        성신여자대학교 일반대학원 음악치료학과 음악치료 전공 석사
                      </div>
                      <br />
                      <div style={{ lineHeight: "22px", display: "inline-block" }}>
                        前) 국군수도병원
                        <br />
                        前) 분당상탑초등학교 특수반
                        <br />
                        前) 서울상담심리연구소
                        <br />
                        前) 서울까리따스알코올상담센터
                        <br />
                        前) 청소년희망재단
                        <br />
                        前) 두그루아동심리상담센터
                        <br />
                        現) 한신플러스케어
                        <br />
                        現) 전국음악치료사협회
                        <br />
                        現) 헬로스마일
                        <br />
                        現) 마음과 음악 치료커뮤니티
                        <br />
                        現) 성신여대 출강
                        <br />
                        現) 구리언어심리상담센터
                      </div>
                      <br />
                      <p />
                      <Link to="/board/introduce/teacher/teacherdetail8"/>
                    </li>
                    <li>
                      <Link to="/board/introduce/teacher/teacherdetail8">
                        {" "}
                      </Link>
                    </li>
                  </ul>
                </li>   
              </ul>
              <div className="bo_fx"></div>
            </form>
          </div>
          {/* 게시판 검색 시작 { */}
          <div className="bo_sch" style={{ marginTop: 20 }}>
            <fieldset id="bo_sch">
              <legend>게시물 검색</legend>
              <form name="fsearch" method="get">
                <input type="hidden" name="bo_table" defaultValue="teacher" />
                <input type="hidden" name="sca" defaultValue="" />
                <input type="hidden" name="sop" defaultValue="and" />
                <label htmlFor="sfl" className="sound_only">
                  검색대상
                </label>
                <select name="sfl" id="sfl">
                  <option value="wr_subject">제목</option>
                  <option value="wr_content">내용</option>
                  <option value="wr_subject||wr_content">제목+내용</option>
                </select>
                <label htmlFor="stx" className="sound_only">
                  검색어<strong className="sound_only"> 필수</strong>
                </label>
                <input
                  type="text"
                  name="stx"
                  defaultValue=""
                  required=""
                  id="stx"
                  className="frm_input required"
                  size={15}
                  maxLength={20}
                />
                <input
                  type="image"
                  defaultValue="검색"
                  src={vars.REACT_APP_URL + '/image/btn_sch.gif'}
                  title="검색"
                  className="btn_sch"
                />
              </form>
            </fieldset>
          </div>
          {/* } 게시판 검색 끝 */}
          {/* 페이지 */}
          {/* } 게시판 목록 끝 */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    #GNB ul li.gnb01 a {color:#a99808;}\n    #lnb>ul>li.lnb04 a {color:#a99808;}\n    .subNav ul li.lnb04 a {background-color: #89BCC1;}\n    "
            }}
          />
          <br />
          {/* //게시판 목록 끝 */}
        </div>
      </div>
      {/*//콘텐츠 끝 */}
    </>
  );
}


export default IntroduceTeacher;

