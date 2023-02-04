import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as vars from "app/models/js/variable.js";

export function ProgSubMenu() {
  const location = useLocation();

  const showSubMenu = (setNum) => {
    var list = document.getElementById('prog'+setNum);
    if(list.style.display === 'none'){
        list.style.display = 'block';
        list.style.transition = 'max-height 0.5s ease-out';
        list.style.maxHeight = '380px';
    }else{
        list.style.maxHeight = '0px';        
        list.style.transition = 'max-height 0.5s ease-in';
        list.style.display = 'none';
    }
  }

  useEffect(() => {
    // console.log(location.pathname);
    if(location.pathname !== '/board/programs/detail'){
        const isCure = location.pathname.startsWith('/board/programs/cure');
        var pageNum = 0;
    
        if(isCure) pageNum = 1;
        else pageNum = 2;
    
        var list = document.getElementById('prog'+pageNum);
        list.style.display = 'block';
        list.style.transition = 'max-height 0.5s ease-out';
        list.style.maxHeight = '380px';
    }
  }, [location]);


  return (
    <>
        {/* 왼쪽메뉴*/}
        <div id="lnb_wrap">
        <div id="lnb">
        <h2>치료 프로그램</h2>
        <ul>
            <li className="lnb01" onClick={() => showSubMenu(1)}>
            <span style={{color:"#a99808", fontSize:"13px", fontWeight:"700"}}>
                치료 프로그램
            </span>
            <ul id="prog1" className="lnb_sub" style={{display:"none", overflow:"hidden", maxHeight:"0px", transition: "max-height 0.5s ease-in"}}>
                <li>
                <Link to="/board/programs/cure/detail">
                    <span>전체 치료 프로그램</span>
                </Link>
                </li>                
                <li>
                <Link to="/board/cureprogram/language">
                    <span>언어치료</span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/notice">
                    <span>인지학습</span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/play">
                    <span>놀이치료</span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/art">
                    <span>미술치료</span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/sense">
                    <span>감각통합치료</span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/group">
                    <span>그룹치료 </span>
                </Link>
                </li>
                <li>
                <Link to="/board/cureprogram/family">
                    <span>가족상담</span>
                </Link>
                </li>
            </ul>
            </li>
            <li className="lnb01" onClick={() => showSubMenu(2)}>
            <span style={{color:"#a99808", fontSize:"13px", fontWeight:"700"}}>
                검사 프로그램
            </span>
                <ul id="prog2" className="lnb_sub" style={{display:"none", overflow:"hidden", maxHeight:"0px", transition: "max-height 0.5s ease-in"}}>
                    <li>
                    <Link to="/board/programs/psytest/detail">
                        <span>전체 검사 프로그램</span>
                    </Link>
                    </li>                    
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>심리평가</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>발달평가</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>자폐검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>기질검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>성격검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>부모양육스트레스검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>mim검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>애착유형검사</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>행동평가</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>언어평가</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/board/cureprogram/language">
                        <span>놀이평가</span>
                    </Link>
                    </li>
                </ul>
            </li>    
            {/*<li className="lnb02"><a href="http://www.gurislp.com/board/bbs/content.php?co_id=program_1">언어치료</a></li>
        <li className="lnb03"><a href="http://www.gurislp.com/board/bbs/content.php?co_id=program_2">미술치료</a></li>*/}
        </ul>
        </div>
        </div>
        {/* //왼쪽메뉴*/}
        {/* 모바일전용 서브메뉴 
        <div className="subNav">
        <h1>센터 소개</h1>
        <ul>
        <li className="lnb01" style="width: 35%;"><a href="http://www.gurislp.com/board/bbs/content.php?co_id=company">센터 소개</a></li>
        <li className="lnb02" style="width: 30%;"><a href="http://www.gurislp.com/board/bbs/board.php?bo_table=gallery">센터 둘러보기</a></li>
        <li className="lnb03 last" style="width: 35%;"><a href="http://www.gurislp.com/board/bbs/content.php?co_id=map">찾아오시는 길</a></li>
        </ul>
        </div>
        <!-- //모바일전용 서브메뉴*/}
    </>
  );
}

export default ProgSubMenu;

