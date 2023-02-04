import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";

export function BoucherNavi() {
  const location = useLocation();
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    if (location.pathname === '/board/introduce/boucher/boucherbaldal') {
      document.getElementById('boucherlist').getElementsByTagName('li').className="off";
      document.getElementById('baldal').className="on";
    }
    else if (location.pathname === '/board/introduce/boucher/boucherchild') {
      document.getElementById('boucherlist').getElementsByTagName('li').className="off";
      document.getElementById('child').className="on";
    }
    else if (location.pathname === '/board/introduce/boucher/bouchercure') {
      document.getElementById('boucherlist').getElementsByTagName('li').className="off";
      document.getElementById('cure').className="on";
    }
    else{
      document.getElementById('boucherlist').getElementsByTagName('li').className="off";
      document.getElementById('baldal').className="on";      
    }
  }, [location]);
    
  return (
<>
          {/* 탭*/}
          <div className="tabgroup">
            <div className="tabnavi">
              <ul id="boucherlist">
                <li id="baldal">
                  <Link to="/board/introduce/boucher/boucherbaldal">
                    발달재활서비스
                  </Link>
                </li>
                <li id="child">
                  <Link to="/board/introduce/boucher/boucherchild">
                    우리아이심리지원
                  </Link>
                </li>
                <li id="cure">
                  <Link to="/board/introduce/boucher/bouchercure">
                    치료지원서비스
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*// 탭*/}
</>
  );
}


export default BoucherNavi;