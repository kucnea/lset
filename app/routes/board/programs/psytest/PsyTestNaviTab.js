import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import * as vars from "app/models/js/variable.js";

export function PsyTestNaviTab() {
  const location = useLocation();
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    if (location.pathname === '/board/programs/psytest/detail') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curedetail').className="on";
    }
    else if (location.pathname === '/board/programs/psytest/simlitest') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curelang').className="on";
    }
    else{
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curedetail').className="on";      
    }
  }, [location]);

  return (
    <>
        {/* 탭*/}
        <div className="tabgroup">
            <div className="tabnavi">
              <ul id="curelist">
                <li id="curedetail">
                  <Link to="/board/programs/psytest/detail">
                    전체
                  </Link>  
                </li>
                <li id="curelang">
                  <Link to="/board/programs/psytest/simlitest">
                    <span>심리평가</span>
                  </Link>
                </li>
                <li id="curenotice">
                  {/* <Link to="/board/programs/psytest/developtest"> */}
                  <Link>
                    <span>발달평가</span>
                  </Link>
                </li>
                <li id="cureplay">
                  {/* <Link to="/board/programs/psytest/autismtest"> */}
                  <Link>
                    <span>자폐검사</span>
                  </Link>
                </li>
                <li id="cureart">
                  {/* <Link to="/board/programs/psytest/temperamenttest"> */}
                  <Link>
                    <span>기질검사</span>
                  </Link>
                </li>
                <li id="curesense">
                  {/* <Link to="/board/programs/psytest/charactertest"> */}
                  <Link>
                    <span>성격검사</span>
                  </Link>
                </li>
                <li id="curegroup">
                  {/* <Link to="/board/programs/psytest/nurturetest"> */}
                  <Link>
                    <span>부모양육스트레스검사</span>
                  </Link>
                </li>
                <li id="curefamily">
                  {/* <Link to="/board/programs/psytest/mimtest"> */}
                  <Link>
                    <span>mim검사</span>
                  </Link>
                </li>
                <li id="curefamily">
                  {/* <Link to="/board/programs/psytest/attachtest"> */}
                  <Link>
                    <span>애착유형검사</span>
                  </Link>
                </li>
                <li id="curefamily">
                  {/* <Link to="/board/programs/psytest/behaviortest"> */}
                  <Link>
                    <span>행동평가</span>
                  </Link>
                </li>
                <li id="curefamily">
                  {/* <Link to="/board/programs/psytest/languagetest"> */}
                  <Link>
                    <span>언어평가</span>
                  </Link>
                </li>
                <li id="curefamily">
                  {/* <Link to="/board/programs/psytest/playtest"> */}
                  <Link>
                    <span>놀이평가</span>
                  </Link>
                </li>  
                <li id="curefamily">
                  <Link to="/board/programs/cure/detail">
                    <span>치료프로그램</span>
                  </Link>
                </li>                                                               
              </ul>
            </div>
          </div>
          {/*// 탭*/}
    </>
  );
}

export default PsyTestNaviTab;
