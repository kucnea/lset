import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import * as vars from "app/models/js/variable.js";

export function CureNaviTab() {
  const location = useLocation();
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    if (location.pathname === '/board/programs/cure/detail') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curedetail').className="on";
    }
    else if (location.pathname === '/board/programs/cure/language') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curelang').className="on";
    }
    else if (location.pathname === '/board/programs/cure/notice') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curenotice').className="on";
    }
    else if (location.pathname === '/board/programs/cure/play') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('cureplay').className="on";
    }
    else if (location.pathname === '/board/programs/cure/art') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('cureart').className="on";
    }
    else if (location.pathname === '/board/programs/cure/sense') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curesense').className="on";
    }
    else if (location.pathname === '/board/programs/cure/group') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curegroup').className="on";
    }
    else if (location.pathname === '/board/programs/cure/family') {
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curefamily').className="on";
    }
    else{
      document.getElementById('curelist').getElementsByTagName('li').className="off";
      document.getElementById('curedetail').className="on";      
    }
  }, [location]);

  return (
    <>
        {/* ???*/}
        <div className="tabgroup">
            <div className="tabnavi">
              <ul id="curelist">
                <li id="curedetail">
                  <Link to="/board/programs/cure/detail">
                    ??????
                  </Link>  
                </li>
                <li id="cureaba">
                  <Link to="/board/programs/cure/detail">
                    <span>ABA</span>
                  </Link>
                </li>
                <li id="cureesdm">
                  <Link to="/board/programs/cure/detail">
                    <span>ESDM</span>
                  </Link>
                </li>
                <li id="curechild">
                  <Link to="/board/programs/cure/detail">
                    <span>???????????????</span>
                  </Link>
                </li>
                <li id="cureadult">
                  <Link to="/board/programs/cure/detail">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="curelang">
                  <Link to="/board/programs/cure/language">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="curenotice">
                  <Link to="/board/programs/cure/notice">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="cureplay">
                  <Link to="/board/programs/cure/play">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="cureart">
                  <Link to="/board/programs/cure/art">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="curesense">
                  <Link to="/board/programs/cure/sense">
                    <span>??????????????????</span>
                  </Link>
                </li>
                <li id="curegroup">
                  <Link to="/board/programs/cure/group">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="curefamily">
                  <Link to="/board/programs/cure/family">
                    <span>????????????</span>
                  </Link>
                </li>
                <li id="curefamily">
                  <Link to="/board/programs/psytest/detail">
                    <span>??????????????????</span>
                  </Link>
                </li>                
              </ul>
            </div>
          </div>
          {/*// ???*/}
    </>
  );
}

export default CureNaviTab;
