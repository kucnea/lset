import React from "react";
import { Link } from 'react-router-dom';
import {AskAnswerSubmenu} from 'app/routes/board/consult/askanswer/AskAnswerSubmenu';
import * as vars from "app/models/js/variable.js";

export function AskAnswerWrite() {
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
            궁금한 점을 문의해주세요. 신속하게 답변드리겠습니다.
        </p>
        {/* skin : basic_qna */}
        <section id="bo_w">
            <h2 id="container_title">상담/문의 글쓰기</h2>
            {/* 게시물 작성/수정 시작 { */}
            <form
            name="fwrite"
            id="fwrite"
            action="http://www.gurislp.com/board/bbs/write_update.php"
            onSubmit="return fwrite_submit(this);"
            method="post"
            encType="multipart/form-data"
            autoComplete="off"
            style={{ width: "100%" }}
            >
            <input type="hidden" name="uid" defaultValue={23012405234873} />
            <input type="hidden" name="w" defaultValue="" />
            <input type="hidden" name="bo_table" defaultValue="qna" />
            <input type="hidden" name="wr_id" defaultValue={0} />
            <input type="hidden" name="sca" defaultValue="" />
            <input type="hidden" name="sfl" defaultValue="" />
            <input type="hidden" name="stx" defaultValue="" />
            <input type="hidden" name="spt" defaultValue="" />
            <input type="hidden" name="sst" defaultValue="" />
            <input type="hidden" name="sod" defaultValue="" />
            <input type="hidden" name="page" defaultValue="" />
            <div className="tbl_frm01 tbl_wrap">
                <table>
                <tbody>
                    <tr>
                    <th scope="row">
                        <label htmlFor="wr_name">
                        이름<strong className="sound_only">필수</strong>
                        </label>
                    </th>
                    <td>
                        <input
                        type="text"
                        name="wr_name"
                        defaultValue=""
                        id="wr_name"
                        required=""
                        className="frm_input required"
                        size={10}
                        maxLength={20}
                        />
                    </td>
                    </tr>
                    <tr style={{ visibility: "hidden", display: "none" }}>
                    <th scope="row">
                        <label htmlFor="wr_email">이메일</label>
                    </th>
                    <td>
                        <input
                        type="text"
                        name="wr_email"
                        defaultValue="sendmail@naver.com"
                        id="wr_email"
                        className="frm_input email"
                        size={50}
                        maxLength={100}
                        />
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        <label htmlFor="wr_1">
                        연락처<strong className="sound_only">필수</strong>
                        </label>
                    </th>
                    <td>
                        <input
                        type="text"
                        name="wr_1"
                        defaultValue=""
                        id="wr_1"
                        className="frm_input"
                        size={20}
                        maxLength={20}
                        />
                    </td>
                    </tr>
                    {/*        <tr>
            <th scope="row"><label for="wr_homepage">홈페이지</label></th>
            <td><input type="text" name="wr_homepage" value="" id="wr_homepage" className="frm_input" size="50"></td>
        </tr>
        */}
                    <tr>
                    <th scope="row">옵션</th>
                    <td>
                        <input
                        type="checkbox"
                        id="secret"
                        name="secret"
                        defaultValue="secret"
                        />
                        <label htmlFor="secret">비밀글</label>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        <label htmlFor="wr_subject">
                        제목<strong className="sound_only">필수</strong>
                        </label>
                    </th>
                    <td>
                        <div id="autosave_wrapper">
                        <input
                            type="text"
                            name="wr_subject"
                            defaultValue=""
                            id="wr_subject"
                            required=""
                            className="frm_input required"
                            size={30}
                            maxLength={255}
                        />
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        <label htmlFor="wr_content">
                        내용<strong className="sound_only">필수</strong>
                        </label>
                    </th>
                    <td className="wr_content">
                        <span className="sound_only">웹에디터 시작</span>
                        <textarea
                        id="wr_content"
                        name="wr_content"
                        className=""
                        maxLength={65536}
                        style={{ width: "100%" }}
                        defaultValue={""}
                        />
                        <span className="sound_only">웹 에디터 끝</span>{" "}
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        <label htmlFor="wr_password">
                        비밀번호<strong className="sound_only">필수</strong>
                        </label>
                    </th>
                    <td>
                        <input
                        type="password"
                        name="wr_password"
                        id="wr_password"
                        required=""
                        className="frm_input required"
                        maxLength={20}
                        />
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">자동등록방지</th>
                    <td>
                        <fieldset id="captcha" className="captcha">
                        <legend>
                            <label htmlFor="captcha_key">자동등록방지</label>
                        </legend>
                        <img
                            src="http://www.gurislp.com/board/plugin/kcaptcha/kcaptcha_image.php?t=1674505429459"
                            alt=""
                            id="captcha_img"
                        />
                        <button
                            type="button"
                            id="captcha_mp3"
                            style={{ cursor: "pointer" }}
                        >
                            <span />
                            숫자음성듣기
                        </button>
                        <button type="button" id="captcha_reload">
                            <span />
                            새로고침
                        </button>
                        <input
                            type="text"
                            name="captcha_key"
                            id="captcha_key"
                            required=""
                            className="captcha_box required"
                            size={6}
                            maxLength={6}
                        />
                        <span id="captcha_info">
                            자동등록방지 숫자를 순서대로 입력하세요.
                        </span>
                        </fieldset>{" "}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="btn_confirm">
                <input
                type="submit"
                defaultValue="작성완료"
                id="btn_submit"
                accessKey="s"
                className="btn_submit"
                />
                <Link to="/board/consult/askanswer/board" className="btn_cancel">
                취소
                </Link>
            </div>
            </form>
        </section>
        {/* } 게시물 작성/수정 끝 */}
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

export default AskAnswerWrite;
