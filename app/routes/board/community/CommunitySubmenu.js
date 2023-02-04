import React from "react";
import { Link } from 'react-router-dom';
import * as vars from "app/models/js/variable.js";

export function CommunitySubmenu() {
  return (
    <>
        {/* 왼쪽메뉴*/}
        <div id="lnb_wrap">
        <div id="lnb">
            <h2>커뮤니티</h2>
            <ul>
            <li className="lnb01">
                <Link to="/board/community/notice/board">
                공지사항
                </Link>
            </li>
            <li className="lnb02 last">
                <Link to="/board/community/usualquestion">
                자주묻는질문
                </Link>
            </li>
            </ul>
        </div>
        </div>
        {/* //왼쪽메뉴*/}
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
        {/* 모바일전용 서브메뉴 */}
        <div className="subNav">
        <h1>커뮤니티</h1>
        <ul>
            <li className="lnb01">
            <Link to="/board/community/notice/board">
                공지사항
            </Link>
            </li>
            <li className="lnb02">
            <Link to="/board/community/usualquestion">
                자주묻는질문
            </Link>
            </li>
        </ul>
        </div>
        {/* //모바일전용 서브메뉴*/}
    </>
  );
}

export default CommunitySubmenu;
