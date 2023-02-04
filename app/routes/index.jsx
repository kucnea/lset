import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
// import { useOptionalUser } from "~/utils";
import * as vars from "../models/js/variable.js";
import { Visual } from "./section/Visual.js";

export default function Index() {
  const user = useOptionalUser();
  const [visualNum, setVisualNum] = useState(0);  
  
  const visual0Chg = (setNum) => {
    setVisualNum(setNum);

    // console.log(0%2);
    // if(visualNum%2==0) console.log(visualNum+' : same!!');
    // else console.log(visualNum+' : not same!!')

    if(visualNum%2==0) {
        document.getElementById('visual0').className = "centered-btns1_s1";
        document.getElementById('visual1').className = "centered-btns1_s2 centered-btns_here";
        document.getElementById('centered-btns1_s0').className = "";
        document.getElementById('centered-btns1_s0').style = "display:block; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;";
        document.getElementById('centered-btns1_s1').className = "centered-btns1_on";
        document.getElementById('centered-btns1_s1').style = "display:list-item; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;";
        setVisualNum(1);
    }else{
        document.getElementById('visual1').className = "centered-btns1_s2";
        document.getElementById('visual0').className = "centered-btns1_s1 centered-btns_here";
        document.getElementById('centered-btns1_s1').className = "";
        document.getElementById('centered-btns1_s1').style = "display:list-item; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;";
        document.getElementById('centered-btns1_s0').className = "centered-btns1_on";
        document.getElementById('centered-btns1_s0').style = "display:block; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;";
        setVisualNum(0);
    }
    
  }

  useEffect(() => {
    let timer = setInterval(() => {
        if(document.getElementById('visual0').className == "centered-btns1_s1 centered-btns_here"){
            // console.log('same');
            document.getElementById('visual0').className = "centered-btns1_s1";
            document.getElementById('visual1').className = "centered-btns1_s2 centered-btns_here";
            document.getElementById('centered-btns1_s0').className = "";
            document.getElementById('centered-btns1_s0').style = "display:block; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;";
            document.getElementById('centered-btns1_s1').className = "centered-btns1_on";
            document.getElementById('centered-btns1_s1').style = "display:list-item; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;";
            setVisualNum(1);
        }else{
            // console.log('not same');
            document.getElementById('visual1').className = "centered-btns1_s2";
            document.getElementById('visual0').className = "centered-btns1_s1 centered-btns_here";
            document.getElementById('centered-btns1_s1').className = "";
            document.getElementById('centered-btns1_s1').style = "display:list-item; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;";
            document.getElementById('centered-btns1_s0').className = "centered-btns1_on";
            document.getElementById('centered-btns1_s0').style = "display:block; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;";
            setVisualNum(0);
        }
    }, 5000);
    return () => clearInterval(timer)
  }, []);

  return (
    <>    
    <section id="visual">
    <div className="rslides_container">
        <ul className="rslides centered-btns centered-btns1" id="slider1">
        <li
            id="centered-btns1_s0"
            className="centered-btns1_on" 
            style={{
            transition: "opacity 500ms ease-in-out",
            float: "left",
            display: "block",
            position: "relative",
            zIndex: 2,
            opacity: 1
            }}
        >
            <img alt="visual1" src={vars.REACT_APP_URL + '/image/visual1.jpg'} />
        </li>
        <li
            className=""
            id="centered-btns1_s1"
            style={{
            transition: "opacity 500ms ease-in-out",
            float: "none",
            display: "list-item",
            position: "absolute",
            zIndex: 1,
            opacity: 0
            }}
        >
            <img alt="visual2" src={vars.REACT_APP_URL + '/image/visual2.jpg'} />
        </li>
        </ul>
        <Link className="centered-btns_nav centered-btns1_nav prev" onClick={() => visual0Chg(visualNum)}>
        Previous
        </Link>
        <Link className="centered-btns_nav centered-btns1_nav next" onClick={() => visual0Chg(visualNum)}>
        Next
        </Link>
        <ul className="centered-btns_tabs centered-btns1_tabs">
        <li id="visual0"className="centered-btns1_s1 centered-btns_here">
            <Link className="centered-btns1_s1" onClick={() => visual0Chg(1)}>
            1
            </Link>
        </li>
        <li id="visual1" className="centered-btns1_s2">
            <Link className="centered-btns1_s2" onClick={() => visual0Chg(0)}>
            2
            </Link>
        </li>
        </ul>
    </div>
    </section>
    <div className="voucher_mobile">
        <b>발달재활, 우리아이심리지원, 교육청</b> 바우처 제공기관{" "}
        <span>
        <Link to="/board/introduce/boucher/boucherbaldal">
            바로가기 +
        </Link>
        </span>
    </div>
    <div className="slidebox_mobile">
        <li className="slide02">
        <Link to="/board/introduce/teacher/teacher">
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
        </Link>
        </li>
        <li className="slide03">
        <Link to="/board/introduce/centermore">
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
        </Link>
        </li>
        <li className="slide04">
        <Link to="/board/introduce/comming">
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
        </Link>
        </li>
        <div style={{ float: "left" }}>&nbsp;</div>
    </div>    
    <div id="sCtnt">
        <div className="sInner">
            <div className="sEmpl group">
            <div className="voucher">
                ㆍ 구리언어심리상담센터는{" "}
                <b>발달재활바우처, 우리아이심리지원, 교육청 바우처</b> 제공기관입니다.{" "}
                <span>
                <Link to="/board/introduce/boucher/boucherbaldal">
                    바우처 안내 바로가기
                </Link>
                </span>
            </div>
            <div className="img_tile">
                <div className="item">
                <Link to="/board/introduce/center">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        title=""
                        alt="치료실소개"
                        src={vars.REACT_APP_URL + '/image/item_01.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">치료실소개</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/centermore">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="센터둘러보기"
                        src={vars.REACT_APP_URL + '/image/item_02.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">센터둘러보기</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/programs/detail">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        title=""
                        alt="치료프로그램"
                        src={vars.REACT_APP_URL + '/image/item_03.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">치료/검사프로그램</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/teacher/teacher">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="치료사소개"
                        src={vars.REACT_APP_URL + '/image/item_04.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">치료사소개</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/comming">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="찾아오시는길"
                        src={vars.REACT_APP_URL + '/image/item_05.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">찾아오시는길</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/consult/askanswer/board">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="온라인상담"
                        src={vars.REACT_APP_URL + '/image/item_06.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">온라인상담</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/boucher/boucherbaldal">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="바우처안내"
                        src={vars.REACT_APP_URL + '/image/item_07.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">바우처안내</span>
                    </span>
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div className="sNoti group">
            <dl className="noti01">
            <dt>치료교육과정</dt>
            <dd>
                <ul>
                <li>
                    <span className="img">
                    <img alt="상담예약" src={vars.REACT_APP_URL + '/image/empl05.gif'} />
                    </span>
                    <span className="ex">
                    센터 방문 전, 전화 또는 온라인 상담을 통해 방문상담 일정을
                    예약합니다.
                    <br />
                    </span>
                </li>
                <li>
                    <span className="img">
                    <img alt="초기상담" src={vars.REACT_APP_URL + '/image/empl06.gif'} />
                    </span>
                    <span className="ex">
                    부모님과 아동이 센터에 함께 내원하여 상담을 통해 어떤 치료교육이
                    필요한지 결정합니다.
                    </span>
                </li>
                <li>
                    <span className="img">
                    <img alt="치료교육평가" src={vars.REACT_APP_URL + '/image/empl07.gif'} />
                    </span>
                    <span className="ex">
                    아이에게 필요한 개인별 맞춤치료가 진행되며 동시에 평가를
                    진행합니다.
                    <br />
                    </span>
                </li>
                </ul>
                <p className="more">
                <Link to="/board/programs/detail">
                    더보기{" "}
                    <span>
                    <img alt="더보기" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
            </dd>
            </dl>
            <dl className="noti02">
            <dt>자주 묻는 질문</dt>
            <dd>
                <ul>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    전화예약이 필요한가요?
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    상담시간은 어떻게 되나요?
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    주차장이용은 가능한가요?
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    검사비용은 어떻게 되나요?
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    치료 소요시간은 어떻게 되나요?
                    </Link>
                    <li className="blit2" />
                </li>
                </ul>
                <p className="more">
                <Link to="/board/community/usualquestion">
                    더보기{" "}
                    <span>
                    <img alt="더보기" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
            </dd>
            </dl>
            <dl className="noti03 last">
            <dt>상담/문의</dt>
            <dd>
                <p className="more">
                <Link to="/board/consult/askanswer/board">
                    더보기{" "}
                    <span>
                    <img alt="더보기" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
                <ul>
                <p className="tx01">
                    연락주시면 친절히 상담해드립니다.
                    <br />
                    평일 {vars.REACT_APP_CENTER_NORMAL_TIME} / 토 {vars.REACT_APP_CENTER_SATURDAY_TIME} (일,공휴일 휴무)
                    <br />
                    <abbr style={{ color: "rgb(244, 116, 36)" }}>
                    * 본 센터는 예약제로 운영됩니다.
                    </abbr>
                    <span>
                    <img alt="문의" src={vars.REACT_APP_URL + '/image/ico_ask.png'} />
                    <Link to="/board/consult/askanswer/board">
                        상담 문의하기
                    </Link>
                    </span>
                </p>
                <p className="tx02">
                    <Link href="#" onClick={()=>window.location.href='tel:' + vars.REACT_APP_CENTER_TEL}>&nbsp;&nbsp;{vars.REACT_APP_CENTER_TEL}</Link>
                </p>
                </ul>
            </dd>
            </dl>
        </div>
    </div>
    </>    
  );
}
