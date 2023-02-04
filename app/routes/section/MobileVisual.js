import React from 'react';
import * as vars from "app/models/js/variable.js";

function MobileVisual() {
  return (
    <>
    <div className="voucher_mobile">
        <b>발달재활, 우리아이심리지원, 교육청</b> 바우처 제공기관{" "}
        <span>
        <a href="http://www.gurislp.com/board/bbs/content.php?co_id=voucher1">
            바로가기 +
        </a>
        </span>
    </div>
    <div className="slidebox_mobile">
        <li className="slide02">
        <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=teacher">
            <ul className="cell">
            <li className="left">
                <h2>치료사 소개</h2>
                <span>영역별 전문 치료사를 소개합니다</span>
            </li>
            <li className="right">
                <span>
                <img src={vars.REACT_APP_URL + '/image/icon_plus.gif'} />
                </span>
            </li>
            </ul>
        </a>
        </li>
        <li className="slide03">
        <a href="http://www.gurislp.com/board/bbs/board.php?bo_table=gallery">
            <ul className="cell">
            <li className="left">
                <h2>센터 둘러보기</h2>
                <span>구리언어심리상담센터 둘러보기</span>
            </li>
            <li className="right">
                <span>
                <img src={vars.REACT_APP_URL + '/image/icon_plus.gif'} />
                </span>
            </li>
            </ul>
        </a>
        </li>
        <li className="slide04">
        <a href="http://www.gurislp.com/board/bbs/content.php?co_id=map">
            <ul className="cell">
            <li className="left">
                <h2>찾아오시는 길</h2>
                <span>교통편 및 위치 안내입니다</span>
            </li>
            <li className="right">
                <span>
                <img src={vars.REACT_APP_URL + '/image/icon_plus.gif'} />
                </span>
            </li>
            </ul>
        </a>
        </li>
        <div style={{ float: "left" }}>&nbsp;</div>
    </div>
    </>
  );
}

export default MobileVisual;