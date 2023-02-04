import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as vars from "app/models/js/variable.js";

export function IntroduceSubMenu() {
  return (
<>
  {/* 왼쪽메뉴*/}
  <div id="lnb_wrap">
    <div id="lnb">
      <h2>센터 소개</h2>
      <ul>
        <li className="lnb01">
          <Link to="/board/introduce/center">
            센터 소개
          </Link>
        </li>
        <li className="lnb02">
          <Link to="/board/introduce/teacher/advisor">
            자문위원
          </Link>
        </li>
        <li className="lnb03">
          <Link to="/board/introduce/teacher/ceo">
            센터장소개
          </Link>
        </li>                
        <li className="lnb04">
          <Link to="/board/introduce/teacher/teacher">
            치료사 소개
          </Link>
        </li>
        <li className="lnb05">
          <Link to="/board/introduce/centermore">
            센터 둘러보기
          </Link>
        </li>
        <li className="lnb06">
          <Link to="/board/introduce/comming">
            찾아오시는 길
          </Link>
        </li>
        <li className="lnb07">
          <Link to="/board/introduce/boucher/boucherbaldal">
            바우처안내
          </Link>
        </li>
      </ul>
    </div>
  </div>
  {/* //왼쪽메뉴*/}
  {/* 모바일전용 서브메뉴 */}
  <div className="subNav">
    <h1>센터 소개</h1>
    <ul>
      <li className="lnb01" style={{ width: "20%" }}>
        <Link to="/board/introduce/center">
          센터 소개
        </Link>
      </li>
      <li className="lnb02" style={{ width: "20%" }}>
        <Link to="/board/introduce/teacher/advisor">
          자문위원
        </Link>
      </li>
      <li className="lnb03" style={{ width: "20%" }}>
        <Link to="/board/introduce/teacher/ceo">
          센터장 소개
        </Link>
      </li>      
      <li className="lnb04" style={{ width: "20%" }}>
        <Link to="/board/introduce/teacher/teacher">
          치료사 소개
        </Link>
      </li>
      <li className="lnb05" style={{ width: "20%" }}>
        <Link to="/board/introduce/centermore">
          둘러보기
        </Link>
      </li>
      <li className="lnb06" style={{ width: "20%" }}>
        <Link to="/board/introduce/comming">
          오시는 길
        </Link>
      </li>
      <li className="lnb07 last" style={{ width: "20%" }}>
        <Link to="/board/introduce/boucher/boucherbaldal">
          바우처안내
        </Link>
      </li>
    </ul>
  </div>
  {/* //모바일전용 서브메뉴*/}
</>
  );
}


export default IntroduceSubMenu;

