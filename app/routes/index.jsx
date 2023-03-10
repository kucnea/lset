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
        <b>????????????, ????????????????????????, ?????????</b> ????????? ????????????{" "}
        <span>
        <Link to="/board/introduce/boucher/boucherbaldal">
            ???????????? +
        </Link>
        </span>
    </div>
    <div className="slidebox_mobile">
        <li className="slide02">
        <Link to="/board/introduce/teacher/teacher">
            <ul className="cell">
            <li className="left">
                <h2>????????? ??????</h2>
                <span>????????? ?????? ???????????? ???????????????</span>
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
                <h2>?????? ????????????</h2>
                <span>?????????????????????????????? ????????????</span>
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
                <h2>??????????????? ???</h2>
                <span>????????? ??? ?????? ???????????????</span>
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
                ??? ?????????????????????????????????{" "}
                <b>?????????????????????, ????????????????????????, ????????? ?????????</b> ?????????????????????.{" "}
                <span>
                <Link to="/board/introduce/boucher/boucherbaldal">
                    ????????? ?????? ????????????
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
                        alt="???????????????"
                        src={vars.REACT_APP_URL + '/image/item_01.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">???????????????</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/centermore">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="??????????????????"
                        src={vars.REACT_APP_URL + '/image/item_02.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">??????????????????</span>
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
                        alt="??????????????????"
                        src={vars.REACT_APP_URL + '/image/item_03.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">??????/??????????????????</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/teacher/teacher">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="???????????????"
                        src={vars.REACT_APP_URL + '/image/item_04.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">???????????????</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/comming">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="??????????????????"
                        src={vars.REACT_APP_URL + '/image/item_05.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">??????????????????</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/consult/askanswer/board">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="???????????????"
                        src={vars.REACT_APP_URL + '/image/item_06.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">???????????????</span>
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link to="/board/introduce/boucher/boucherbaldal">
                    <figure>
                    <img
                        width={60}
                        height={60}
                        alt="???????????????"
                        src={vars.REACT_APP_URL + '/image/item_07.png'}
                    />
                    </figure>
                    <span className="text_box">
                    <span className="subject">???????????????</span>
                    </span>
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div className="sNoti group">
            <dl className="noti01">
            <dt>??????????????????</dt>
            <dd>
                <ul>
                <li>
                    <span className="img">
                    <img alt="????????????" src={vars.REACT_APP_URL + '/image/empl05.gif'} />
                    </span>
                    <span className="ex">
                    ?????? ?????? ???, ?????? ?????? ????????? ????????? ?????? ???????????? ?????????
                    ???????????????.
                    <br />
                    </span>
                </li>
                <li>
                    <span className="img">
                    <img alt="????????????" src={vars.REACT_APP_URL + '/image/empl06.gif'} />
                    </span>
                    <span className="ex">
                    ???????????? ????????? ????????? ?????? ???????????? ????????? ?????? ?????? ???????????????
                    ???????????? ???????????????.
                    </span>
                </li>
                <li>
                    <span className="img">
                    <img alt="??????????????????" src={vars.REACT_APP_URL + '/image/empl07.gif'} />
                    </span>
                    <span className="ex">
                    ???????????? ????????? ????????? ??????????????? ???????????? ????????? ?????????
                    ???????????????.
                    <br />
                    </span>
                </li>
                </ul>
                <p className="more">
                <Link to="/board/programs/detail">
                    ?????????{" "}
                    <span>
                    <img alt="?????????" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
            </dd>
            </dl>
            <dl className="noti02">
            <dt>?????? ?????? ??????</dt>
            <dd>
                <ul>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    ??????????????? ????????????????
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    ??????????????? ????????? ??????????
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    ?????????????????? ????????????????
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    ??????????????? ????????? ??????????
                    </Link>
                    <li className="blit2" />
                </li>
                <li className="blit2">
                    <Link to="/board/community/usualquestion">
                    ?????? ??????????????? ????????? ??????????
                    </Link>
                    <li className="blit2" />
                </li>
                </ul>
                <p className="more">
                <Link to="/board/community/usualquestion">
                    ?????????{" "}
                    <span>
                    <img alt="?????????" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
            </dd>
            </dl>
            <dl className="noti03 last">
            <dt>??????/??????</dt>
            <dd>
                <p className="more">
                <Link to="/board/consult/askanswer/board">
                    ?????????{" "}
                    <span>
                    <img alt="?????????" src={vars.REACT_APP_URL + '/image/ico_more.png'} />
                    </span>
                </Link>
                </p>
                <ul>
                <p className="tx01">
                    ??????????????? ????????? ?????????????????????.
                    <br />
                    ?????? {vars.REACT_APP_CENTER_NORMAL_TIME} / ??? {vars.REACT_APP_CENTER_SATURDAY_TIME} (???,????????? ??????)
                    <br />
                    <abbr style={{ color: "rgb(244, 116, 36)" }}>
                    * ??? ????????? ???????????? ???????????????.
                    </abbr>
                    <span>
                    <img alt="??????" src={vars.REACT_APP_URL + '/image/ico_ask.png'} />
                    <Link to="/board/consult/askanswer/board">
                        ?????? ????????????
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
