import React from "react";
import { Link } from 'react-router-dom';
import * as vars from "app/models/js/variable.js";

export function AskAnswerSubmenu() {
  return (
    <>
        {/* 왼쪽메뉴*/}
        <div id="lnb_wrap">
        <div id="lnb">
            <h2>상담/문의</h2>
            <ul>
            <li className="lnb01">
                <Link to="/board/consult/askanswer/board">
                상담/문의
                </Link>
                {/*<ul className="lnb_sub">
        <li className="on"><a href="">메뉴11</a></li>
        <li><a href="">메뉴12</a></li>
        <li><a href="">메뉴13</a></li>
        <li><a href="">메뉴14</a></li>
        </ul>
    </li>
    <li className="lnb02"><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=faq">자주묻는질문</a></li>
    <li className="lnb03"><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=data">자료실</a></li>*/}
            </li>
            </ul>
        </div>
        </div>
        {/* //왼쪽메뉴*/}
    </>
  );
}

export default AskAnswerSubmenu;
