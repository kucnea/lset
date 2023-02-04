import React from "react";
import { Link } from 'react-router-dom';
import {AskAnswerSubmenu} from 'app/routes/board/consult/askanswer/AskAnswerSubmenu';
import * as vars from "app/models/js/variable.js";

export function AskAnswerBoard() {
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
    {/* <div className="subtop_u"></div> */}
    {/* 콘텐츠 시작*/}
    <div id="wrapper">
        <div className="subtop_u" />
        <AskAnswerSubmenu/>
        {/* 우측컨텐츠*/}
        <style
        dangerouslySetInnerHTML={{
            __html:
            "\n    \n    #GNB @media all and (min-width:981px) and (max-width:2000px){\n        #board_container {width:980px; margin:0 auto;}\n    \n            \n    }\n    @media all and (min-width:1px) and (max-width:980px){\n        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}\n    \n    }\n    "
        }}
        />
        {/* <style
        dangerouslySetInnerHTML={{
            __html:
            "\n    \n    #GNB .gnb {margin-top:-28px;}\n    @media all and (min-width:981px) and (max-width:2000px){\n        #board_container {width:980px; margin:0 auto;}\n    \n            \n    }\n    @media all and (min-width:1px) and (max-width:980px){\n        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}\n    \n    }\n    "
        }}
        /> */}
        {/* 모바일전용 서브메뉴 
    <div className="subNav">
    <h1>커뮤니티</h1>
    <ul>
        <li className="lnb01" style="width: 35%;"><a href="/board/bbs/board.php?bo_table=notice">공지사항</a></li>
        <li className="lnb02" style="width: 30%;"><a href="/board/bbs/board.php?bo_table=faq">자주묻는질문</a></li>
        <li className="lnb03 last" style="width: 35%;"><a href="/board/bbs/board.php?bo_table=data">자료실</a></li>
    </ul>
    </div>
    <!-- //모바일전용 서브메뉴*/}
        <div id="left_container_board">
        {/* 게시판 목록 시작 { */}
        {/* 상단서브타이틀 */}
        <div className="hgroup">
            <h1>
            <span>상담/문의</span>
            </h1>
            <p>
            {" "}
            <span className="home">
                <span>HOME</span>
            </span>{" "}
            <span className="fb">상담/문의</span>{" "}
            </p>
        </div>
        {/* //상단서브타이틀*/}
        <p className="bu1">
            문의가 많아 온라인 상담은 준비중에 있습니다. 감사합니다.
            {/* 궁금한 점을 문의해주세요. 신속하게 답변드리겠습니다. */}
        </p>
        <h2 id="container_title">
            상담/문의<span className="sound_only"> 목록</span>
        </h2>
        {/* 게시판 목록 시작 { */}
        <div id="bo_list" style={{ width: "100%" }}>
            {/* 게시판 카테고리 시작 { */}
            {/* } 게시판 카테고리 끝 */}
            {/* 게시판 페이지 정보 및 버튼 시작 { */}
            <div className="bo_fx">
            {/*<div id="bo_list_total">
            <span>Total 34건</span>
            1 페이지
        </div>*/}
            <ul className="btn_bo_user">
                <li>
                <Link to="/board/consult/askanswer/write" className="btn_b02">
                    문의하기
                </Link>
                </li>{" "}
            </ul>
            </div>
            {/* } 게시판 페이지 정보 및 버튼 끝 */}
            <form
            name="fboardlist"
            id="fboardlist"
            action="./board_list_update.php"
            onSubmit="return fboardlist_submit(this);"
            method="post"
            >
            <input type="hidden" name="bo_table" defaultValue="qna" />
            <input type="hidden" name="sfl" defaultValue="" />
            <input type="hidden" name="stx" defaultValue="" />
            <input type="hidden" name="spt" defaultValue="" />
            <input type="hidden" name="sca" defaultValue="" />
            <input type="hidden" name="page" defaultValue={1} />
            <input type="hidden" name="sw" defaultValue="" />
            <div className="tbl_head01 tbl_wrap">
                <table>
                <colgroup>
                    <col width="" />
                    <col width="18%" />
                    <col width="15%" align="center" />
                    <col width="1%" />
                    <col width="1%" />
                </colgroup>
                <caption>상담/문의 목록</caption>
                <thead>
                    <tr>
                    {/*<th scope="col">번호</th>*/}
                    <th scope="col">제목</th>
                    <th scope="col">글쓴이</th>
                    {/*<th scope="col"><a href="/board/bbs/board.php?bo_table=qna&amp;sop=and&amp;sst=wr_datetime&amp;sod=desc&amp;sfl=&amp;stx=&amp;page=1">날짜</a></th>*/}
                    <th scope="col">진행현황</th>
                    {/*<th scope="col"><a href="/board/bbs/board.php?bo_table=qna&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;page=1">조회</a></th>*/}
                    </tr>
                </thead>
                <tbody>
                    <tr className="bo_notice">
                    {/* <td className="td_num">
            <strong>공지</strong>              </td>*/}
                    <td className="td_subject">
                        {/* <Link to="/board/consult/askanswer/detail?idx=1">
                        글을 남겨주시면 성심껏 답변해 드립니다.{" "}
                        </Link> */}
                        <Link to="/board/consult/askanswer/detail?idx=1">
                        문의가 많아 온라인 상담은 준비중에 있습니다. 감사합니다.{" "}
                        </Link>
                    </td>
                    <td className="td_name sv_use">관리*</td>
                    {/* <td className="td_date">02-28</td>*/}
                    <td className="" style={{ width: 60 }}>
                        <div
                        style={{
                            padding: "4px 2px 0 10px",
                            width: 60,
                            height: 20,
                            background: "#5AD103",
                            color: "#fff",
                            fontWeight: "bold",
                            margin: "0 auto"
                        }}
                        >
                        확인중
                        </div>{" "}
                    </td>
                    {/*<td className="td_num">633</td>*/}
                    </tr>
                    {/* <tr className=""> */}
                    {/* <td className="td_num">
            33              </td>*/}
                    {/* <td className="td_subject">
                        <Link to="/board/consult/askanswer/detail?idx=2">
                        39개월 여아 언어발달지연 관련{" "}
                        </Link>
                        <img
                        src={vars.REACT_APP_URL + '/image/consult/icon_secret.gif'}
                        alt="비밀글"
                        />{" "}
                    </td> */}
                    {/* <td className="td_name sv_use">이종*</td> */}
                    {/* <td className="td_date">11-16</td>*/}
                    {/* <td className="" style={{ width: 60 }}>
                        <div
                        style={{
                            padding: "4px 2px 0 10px",
                            width: 60,
                            height: 20,
                            background: "#5AD103",
                            color: "#fff",
                            fontWeight: "bold",
                            margin: "0 auto"
                        }}
                        >
                        확인중
                        </div>{" "}
                    </td> */}
                    {/*<td className="td_num">1</td>*/}
                    {/* </tr> */}
                    {/* <tr className=""> */}
                    {/* <td className="td_num">
            31              </td>*/}
                    {/* <td className="td_subject">
                        <Link to="/board/consult/askanswer/detail?idx=3">
                        6세 여아 상담 <span className="sound_only">댓글</span>
                        <span className="cnt_cmt">1</span>
                        <span className="sound_only">개</span>{" "}
                        </Link>
                        <img
                        src={vars.REACT_APP_URL + '/image/consult/icon_secret.gif'}
                        alt="비밀글"
                        />{" "}
                    </td>
                    <td className="td_name sv_use">소병*</td> */}
                    {/* <td className="td_date">10-14</td>*/}
                    {/* <td className="" style={{ width: 60 }}>
                        <div
                        style={{
                            padding: "4px 2px 0 10px",
                            width: 60,
                            height: 20,
                            background: "#FF3061",
                            color: "#fff",
                            fontWeight: "bold",
                            margin: "0 auto"
                        }}
                        >
                        답변완료
                        </div>{" "}
                    </td> */}
                    {/*<td className="td_num">2</td>*/}
                    {/* </tr> */}
                </tbody>
                </table>
            </div>
            <div className="bo_fx">
                <ul className="btn_bo_user">
                <li>
                    {/* <Link to="/board/consult/askanswer/write" className="btn_b02">
                    문의하기
                    </Link> */}
                    <Link onClick={() => alert('현재는 문의가 어렵습니다. 죄송합니다.')}className="btn_b02">
                    문의하기
                    </Link>                    
                </li>{" "}
                </ul>
            </div>
            </form>
        </div>
        {/* 페이지 */}
        <nav className="pg_wrap">
            <span className="pg">
            <span className="sound_only">열린</span>
            <strong className="pg_current">1</strong>
            <span className="sound_only">페이지</span>
            {/* <Link to="/board/consult/askanswer/board?idx=2" className="pg_page">
                2<span className="sound_only">페이지</span>
            </Link> */}
            <Link to="/board/consult/askanswer/board?idx=3" className="pg_page pg_end">
                맨끝
            </Link>
            </span>
        </nav>
        {/* 게시판 검색 시작 { */}
        <div className="bo_sch" style={{ marginTop: 20 }}>
            <fieldset id="bo_sch">
            <legend>게시물 검색</legend>
            <form name="fsearch" method="get">
                <input type="hidden" name="bo_table" defaultValue="qna" />
                <input type="hidden" name="sca" defaultValue="" />
                <input type="hidden" name="sop" defaultValue="and" />
                <label htmlFor="sfl" className="sound_only">
                검색대상
                </label>
                <select name="sfl" id="sfl">
                <option value="wr_subject">제목</option>
                <option value="wr_content">내용</option>
                <option value="wr_subject||wr_content">제목+내용</option>
                {/*<option value="mb_id,1">회원아이디</option>
        <option value="mb_id,0">회원아이디(코)</option>
        <option value="wr_name,1">글쓴이</option>
        <option value="wr_name,0">글쓴이(코)</option>*/}
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
                src={vars.REACT_APP_URL + '/image/consult/btn_sch.gif'}
                title="검색"
                className="btn_sch"
                />
            </form>
            {/*
    <form name="fsearch" method="get">
    <input type="hidden" name="bo_table" value="qna">
    <input type="hidden" name="sca" value="">
    <input type="hidden" name="sop" value="and">
    <label for="sfl" className="sound_only">검색대상</label>
    <select name="sfl" id="sfl">
        <option value="wr_subject">제목</option>
        <option value="wr_content">내용</option>
        <option value="wr_subject||wr_content">제목+내용</option>
        <option value="mb_id,1">회원아이디</option>
        <option value="mb_id,0">회원아이디(코)</option>
        <option value="wr_name,1">글쓴이</option>
        <option value="wr_name,0">글쓴이(코)</option>
    </select>
    <label for="stx" className="sound_only">검색어<strong className="sound_only"> 필수</strong></label>
    <input type="text" name="stx" value="" required id="stx" className="frm_input required" size="15" maxlength="20">
    <input type="submit" value="검색" className="btn_submit">
    </form>*/}
            </fieldset>
        </div>
        {/* } 게시판 검색 끝 */}
        {/* } 게시판 목록 끝 */}
        <style
            dangerouslySetInnerHTML={{
            __html:
                "\n    #GNB ul li.gnb03 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    "
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

export default AskAnswerBoard;
