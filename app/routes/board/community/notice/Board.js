import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import {CommunitySubmenu} from 'app/routes/board/community/CommunitySubmenu';
import * as vars from "app/models/js/variable.js";

export function NoticeBoard() {
    
    useEffect(() => { 

        if(!document.getElementById('noticecss')){
            var link = document.createElement('link');
            link.id = 'noticecss';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/styles/css/noticecss.css';
            link.media='all';
            document.getElementsByTagName('head')[0].appendChild(link);
        }  

    },[]);

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
    {/*<div className="subtop_u"></div>*/}
    {/* 콘텐츠 시작*/}
    <div id="wrapper">
        <div className="subtop_u" />
        <CommunitySubmenu/>
        <div id="left_container_board">
        {/* 게시판 목록 시작 { */}
        {/* 상단서브타이틀 */}
        <div className="hgroup">
            <h1>
            <span>공지사항</span>
            </h1>
            <p>
            {" "}
            <span className="home">
                <span>HOME</span>
            </span>{" "}
            <span>커뮤니티</span> <span className="fb">공지사항</span>{" "}
            </p>
        </div>
        {/* //상단서브타이틀*/}
        <p className="bu1">새로운 소식과 정보를 알려드립니다.</p>
        <h2 id="container_title">
            공지사항<span className="sound_only"> 목록</span>
        </h2>
        {/* 게시판 목록 시작 { */}
        <div id="bo_list" style={{ width: "100%" }}>
            {/* 게시판 카테고리 시작 { */}
            {/* } 게시판 카테고리 끝 */}
            {/* 게시판 페이지 정보 및 버튼 시작 { */}
            <div className="bo_fx">
            {/* <div id="bo_list_total">
            <span>Total 7건</span>
            1 페이지
        </div>*/}
            <ul className="btn_bo_user">
                <li>
                {/* <Link to="/board/consult/askanswer/write" className="btn_b02"> */}
                <Link onClick={() => window.alert('로그인이 필요합니다.')} className="btn_b02">
                    작성하기
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
            <input type="hidden" name="bo_table" defaultValue="notice" />
            <input type="hidden" name="sfl" defaultValue="" />
            <input type="hidden" name="stx" defaultValue="" />
            <input type="hidden" name="spt" defaultValue="" />
            <input type="hidden" name="sca" defaultValue="" />
            <input type="hidden" name="sst" defaultValue="wr_num, wr_reply" />
            <input type="hidden" name="sod" defaultValue="" />
            <input type="hidden" name="page" defaultValue={1} />
            <input type="hidden" name="sw" defaultValue="" />
            <div className="tbl_head01 tbl_wrap">
                <table>
                <caption>공지사항 목록</caption>
                <thead>
                    <tr>
                    {/*<th scope="col">번호</th>*/}
                    <th scope="col">제목</th>
                    {/*<th scope="col">글쓴이</th>*/}
                    <th scope="col">
                        <a>
                        작성일
                        </a>
                    </th>
                    {/*<th scope="col"><a href="/board/bbs/board.php?bo_table=notice&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;page=1">조회</a></th>*/}
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="td_subject">
                            <Link to="/board/community/notice/detail5">
                            신학기 종합 심리검사/발달 검사 10% 할인{" "}
                            </Link>
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_hot.gif'}
                            alt="인기글"
                            />
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_file.gif'}
                            alt="첨부파일"
                            />{" "}
                        </td>
                        <td className="td_date">23-02-02</td>
                    </tr>
                    <tr className="">
                        <td className="td_subject">
                            <Link to="/board/community/notice/detail4">
                            구리언어심리상담센터 운영시간 안내{" "}
                            </Link>
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_hot.gif'}
                            alt="인기글"
                            />
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_file.gif'}
                            alt="첨부파일"
                            />{" "}
                        </td>
                        <td className="td_date">22-08-23</td>
                    </tr>
                    <tr className="">
                        <td className="td_subject">
                            <Link to="/board/community/notice/detail3">
                            사회적 거리두기 4단계 기간 정상 수업{" "}
                            </Link>
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_hot.gif'}
                            alt="인기글"
                            />
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_file.gif'}
                            alt="첨부파일"
                            />{" "}
                        </td>
                        <td className="td_date">22-07-13</td>
                    </tr>
                    <tr className="">
                        <td className="td_subject">
                            <Link to="/board/community/notice/detail2">
                            구리언어심리상담센터 OPEN EVENT{" "}
                            </Link>
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_hot.gif'}
                            alt="인기글"
                            />
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_file.gif'}
                            alt="첨부파일"
                            />{" "}
                        </td>
                        <td className="td_date">22-03-22</td>
                    </tr>
                    <tr className="">
                        <td className="td_subject">
                            <Link to="/board/community/notice/detail1">
                            홈페이지 오픈 안내{" "}
                            </Link>
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_hot.gif'}
                            alt="인기글"
                            />
                            <img
                            src={vars.REACT_APP_URL + '/image/community/icon_file.gif'}
                            alt="첨부파일"
                            />{" "}
                        </td>
                        <td className="td_date">22-02-24</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </form>
        </div>
        {/* 페이지 */}
        {/* 게시판 검색 시작 { */}
        <div className="bo_sch" style={{ marginTop: 20 }}>
            <fieldset id="bo_sch">
            <legend>게시물 검색</legend>
            <form name="fsearch" method="get">
                <input type="hidden" name="bo_table" defaultValue="notice" />
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
                alt="검색"
                src={vars.REACT_APP_URL + '/image/community/btn_sch.gif'}
                title="검색"
                className="btn_sch"
                />
            </form>
            {/*
    <form name="fsearch" method="get">
    <input type="hidden" name="bo_table" value="notice">
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
                "\n    #GNB ul li.gnb04 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    .subNav ul li {width:33.3%;}\n    "
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

export default NoticeBoard;
