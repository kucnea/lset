import React from "react";
import { Link } from 'react-router-dom';
import {CommunitySubmenu} from 'app/routes/board/community/CommunitySubmenu';
import { useState, useEffect } from "react";
import * as vars from "app/models/js/variable.js";

export function UsualQuestion() {
  const [idxNum,setIdxNum] = useState(0);
  const [idxStyle,setIdxStyle] = useState();
  
  const openpanel = (setNum) => {
    if(idxNum===setNum && (document.getElementById('panelm'+setNum).className!=="panel")){
      document.getElementById('panelm'+setNum).style = "display:none;";
      document.getElementById('panelm'+setNum).className = "panel";
      document.getElementById('listm'+setNum).className = "";
    }else{
      if(idxNum!==0) {
        document.getElementById('panelm'+idxNum).style = "display:none;";
        document.getElementById('panelm'+idxNum).className = "panel";
        document.getElementById('listm'+idxNum).className = "";
      }
      document.getElementById('panelm'+setNum).style = "display:block;";
      document.getElementById('panelm'+setNum).className = "panel open";      
      document.getElementById('listm'+setNum).className = "active";
    }
    setIdxNum(setNum);
  }

  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {      

    if(document.getElementById('usualcss')){
        var link = document.getElementById('usualcss');
        link.href = '/styles/css/usualcss.css';
    }else{
        var link = document.createElement('link');
        link.id = 'usualcss';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/usualcss.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }  

    if(document.getElementById('fd_style')){
      var link = document.getElementById('fd_style');
      link.href = '/styles/css/fd_style.css';
    }else{
        var link = document.createElement('link');
        link.id = 'fd_style';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/styles/css/fd_style.css';
        link.media='all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }      

    return () => {};
  },);

  return (
<>
  {/* PC??? ????????????*/}
  <div className="subtop">
    <div className="head_copy">
      <h2>
        00 ??????
        <br />
        ??????????????????
      </h2>
      {/*<p>HOME &gt; ?????????&gt; 00 ??????</p>*/}
    </div>
  </div>
  {/* //PC??? ????????????*/}
  {/* ???????????? ????????????*/}
  <div className="mobile_subtop">
    <div className="head_copy">
      <h2>
        00 ??????
        <br />
        00 ??????
      </h2>
      {/*<p>HOME &gt; ?????????&gt; 00 ??????</p>*/}
    </div>
  </div>
  {/* //???????????? ????????????*/}
  <div className="subtop_140" />
  <div className="subtop_u"></div>
  {/* ????????? ??????*/}
  <div id="wrapper">
    <CommunitySubmenu/>
    {/* <div className="subtop_u" /> */}
    <div id="left_container_board">
      {/* ????????? ?????? ?????? { */}
      {/* ????????????????????? */}
      <div className="hgroup">
        <h1>
          <span>??????????????????</span>
        </h1>
        <p>
          {" "}
          <span className="home">
            <span>HOME</span>
          </span>{" "}
          <span>????????????</span> <span className="fb">??????????????????</span>{" "}
        </p>
      </div>
      {/* //?????????????????????*/}
      <p className="bu1">?????? ???????????? ???????????? ????????? ???????????????.</p>
      <h2 id="container_title">
        ????????????????????????<span className="sound_only"> ??????</span>
      </h2>
      {/* ????????? ?????? ?????? { */}
      <div id="bo_list" style={{ width: "100%" }}>
        {/* ????????? ???????????? ?????? { */}
        {/* } ????????? ???????????? ??? */}
        {/* ????????? ????????? ?????? ??? ?????? ?????? { */}
        <div className="bo_fx">
          {/*<div id="bo_list_total">
          <span>Total 10???</span>
          1 ?????????
      </div>*/}
        </div>
        {/* } ????????? ????????? ?????? ??? ?????? ??? */}
        <form
          name="fboardlist"
          id="fboardlist"
          action="./board_list_update.php"
          onsubmit="return fboardlist_submit(this);"
          method="post"
        >
          <input type="hidden" name="bo_table" defaultValue="faq" />
          <input type="hidden" name="sfl" defaultValue="" />
          <input type="hidden" name="stx" defaultValue="" />
          <input type="hidden" name="spt" defaultValue="" />
          <input type="hidden" name="sca" defaultValue="" />
          <input type="hidden" name="page" defaultValue={1} />
          <input type="hidden" name="sw" defaultValue="" />
          {/*div className="list-title">
      <ul>
          <li className="fd_chk">
                      </li>
          <li className="fd_num">??????</li>
          <li className="fd_title">??????</li>
      </ul>
  </div>*/}
          <div className="tbl_head01 tbl_wrap">
            <ul id="fd_accordion" className="accordion">
              <li id="listm1">
                {/*<span className="fd_num">10</span>*/}
                <h3 onClick={() => openpanel(1)}>
                  <Link className="accordion-opener">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ??????????????? ????????????????{" "}
                  </Link>
                </h3>
                <div
                  id="panelm1"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>??????????????? ????????????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ??????????????? ????????????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ?????? ????????? ???????????? ???????????????. ?????? ????????? ????????? ?????????
                    ?????? ????????? ????????? ?????????, ?????? ??? ?????? ????????? ???????????????
                    ?????????. ????????? ?????? ??? ???????????? ?????? ????????????.
                    <br />
                    ?????? 10???~19???, ????????? 9???~15???(?????????,????????? ??????)
                  </div>
                </div>
              </li>
              <li id="listm2">
                {/*<span className="fd_num">9</span>*/}
                <h3 onClick={() => openpanel(2)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ??????????????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm2"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>??????????????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ??????????????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ?????? ????????? ????????? ??? ??????????????? ???????????????. ?????? ??????
                    ??????????????? ???????????? 20~30???, ???????????? 20~30???, ?????? 50???
                    ??????????????? ??????????????? ?????????. ?????? ?????? ??????????????? 40???,
                    ???????????? 10????????? ??? 50????????????.
                  </div>
                </div>
              </li>
              <li id="listm3">
                {/*<span className="fd_num">8</span>*/}
                <h3 onClick={() => openpanel(3)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ?????????????????? ????????????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm3"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>?????????????????? ????????????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ?????????????????? ????????????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ?????? ?????? ?????? ???????????? 4?????????????????? ??????????????? ????????????
                    ?????????????????????. <br />??? ???????????? ????????? ?????? ????????? ?????????
                    ?????? ??????????????????.
                  </div>
                </div>
              </li>
              <li id="listm4">
                {/*<span className="fd_num">7</span>*/}
                <h3 onClick={() => openpanel(4)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ??????????????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm4"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>??????????????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ??????????????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ???????????? ?????? ????????? ????????? ????????? ?????? ???????????????.
                    ???????????????????????? ????????? ???????????????????????????.
                  </div>
                </div>
              </li>
              <li id="listm5">
                {/*<span className="fd_num">6</span>*/}
                <h3 onClick={() => openpanel(5)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ?????? ??????????????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm5"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>?????? ??????????????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ?????? ??????????????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ?????? ?????? ??????????????? ???????????? ?????? 50????????????. ???, ?????????
                    ????????? ????????? ????????? ?????? ????????????.
                  </div>
                </div>
              </li>
              <li id="listm6">
                {/*<span className="fd_num">5</span>*/}
                <h3 onClick={() => openpanel(6)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ?????? ??????????????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm6"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>?????? ??????????????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ?????? ??????????????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    1. ???????????? : ????????? ?????? ????????? ?????? ???????????? ?????????
                    ???????????????.
                    <br />
                    2. ???????????? : ???????????? ????????? ????????? ?????? ???????????? ?????????
                    ?????? ?????? ??????????????? ???????????? ???????????????.
                    <br />
                    3. ???????????? ??? ?????? : ???????????? ????????? ????????? ???????????????
                    ???????????? ????????? ????????? ???????????????.
                  </div>
                </div>
              </li>
              <li id="listm7">
                {/*<span className="fd_num">4</span>*/}
                <h3 onClick={() => openpanel(7)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ?????? ????????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm7"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>?????? ????????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ?????? ????????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ????????? ?????? ??????????????? ???????????? ????????? ??? ????????????.
                    <br />
                    ??????????????? ????????? ??? ????????? ???????????? ?????? ????????? ??????
                    ????????????, ???????????? ??? ????????? ????????? ????????? ?????? ????????????.
                  </div>
                </div>
              </li>
              <li id="listm8">
                {/*<span className="fd_num">3</span>*/}
                <h3 onClick={() => openpanel(8)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ????????? ?????? ????????????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm8"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>????????? ?????? ????????????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ????????? ?????? ????????????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ?????? ????????? ????????? 1:1????????? ???????????? ????????? ????????? ?????????
                    ????????? ??? ??????, ???????????? ????????? ????????? ?????? ?????? ????????????
                    ??????????????? ?????????. ?????? ?????? ??? ???????????? ???????????? ???????????????
                    ????????????.
                  </div>
                </div>
              </li>
              <li id="listm9">
                {/*<span className="fd_num">2</span>*/}
                <h3 onClick={() => openpanel(9)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ???????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm9"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>???????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ???????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ???????????? ????????? ????????? ???????????? ?????????, ????????? ????????? ???????????? ??? ????????????.
                  </div>
                </div>
              </li>
              <li id="listm10">
                {/*<span className="fd_num">1</span>*/}
                <h3 onClick={() => openpanel(10)}>
                  <a className="accordion-opener" href="#open-panel">
                    <span style={{ margin: "0 10px" }}>
                      <img src={vars.REACT_APP_URL +'/image/icon_q.gif'} />
                    </span>
                    ?????? ?????? ????????? ??????????{" "}
                  </a>
                </h3>
                <div
                  id="panelm10"
                  className="panel"
                  style={{ visibility: "visible", display: "none" }}
                >
                  {/* <h4>?????? ?????? ????????? ??????????</h4> */}
                  <span style={{ marginRight: 10 }}>
                    <img src={vars.REACT_APP_URL +'/image/icon_a.gif'} />
                  </span>
                  {/* ?????? ?????? ????????? ??????????*/}
                  <div
                    style={{
                      position: "relative",
                      left: 60,
                      top: "-20px",
                      width: "80%",
                      lineHeight: "18px"
                    }}
                  >
                    ????????? ????????? ????????? ????????? ????????? ???????????? ????????? ?????????,
                    ??????????????? ????????? ????????? ????????????. ?????? ????????? ????????????
                    ????????? ?????? ?????? ???????????? ???????????? ?????????.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
      {/* ????????? */}
      {/* ????????? ?????? ?????? { */}
      <div className="bo_sch" style={{ marginTop: 20 }}>
        <fieldset id="bo_sch">
          <legend>????????? ??????</legend>
          <form name="fsearch" method="get">
            <input type="hidden" name="bo_table" defaultValue="faq" />
            <input type="hidden" name="sca" defaultValue="" />
            <input type="hidden" name="sop" defaultValue="and" />
            <label htmlFor="sfl" className="sound_only">
              ????????????
            </label>
            <select name="sfl" id="sfl">
              <option value="wr_subject">??????</option>
              <option value="wr_content">??????</option>
              <option value="wr_subject||wr_content">??????+??????</option>
              {/*<option value="mb_id,1">???????????????</option>
      <option value="mb_id,0">???????????????(???)</option>
      <option value="wr_name,1">?????????</option>
      <option value="wr_name,0">?????????(???)</option>*/}
            </select>
            <label htmlFor="stx" className="sound_only">
              ?????????<strong className="sound_only"> ??????</strong>
            </label>
            <input
              type="text"
              name="stx"
              defaultValue=""
              required=""
              id="stx"
              className="frm_input required"
              size={15}
              maxLength={20}
            />
            <input
              type="image"
              defaultValue="??????"
              src={vars.REACT_APP_URL +'/image/btn_sch.gif'}
              title="??????"
              className="btn_sch"
            />
          </form>
          {/*
  <form name="fsearch" method="get">
  <input type="hidden" name="bo_table" value="faq">
  <input type="hidden" name="sca" value="">
  <input type="hidden" name="sop" value="and">
  <label for="sfl" className="sound_only">????????????</label>
  <select name="sfl" id="sfl">
      <option value="wr_subject">??????</option>
      <option value="wr_content">??????</option>
      <option value="wr_subject||wr_content">??????+??????</option>
      <option value="mb_id,1">???????????????</option>
      <option value="mb_id,0">???????????????(???)</option>
      <option value="wr_name,1">?????????</option>
      <option value="wr_name,0">?????????(???)</option>
  </select>
  <label for="stx" className="sound_only">?????????<strong className="sound_only"> ??????</strong></label>
  <input type="text" name="stx" value="" required id="stx" className="frm_input required" size="15" maxlength="20">
  <input type="submit" value="??????" className="btn_submit">
  </form>*/}
        </fieldset>
      </div>
      {/* } ????????? ?????? ??? */}
      {/* } ????????? ?????? ??? */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    #GNB ul li.gnb04 a {color:#a99808;}\n    #lnb>ul>li.lnb02 a {color:#a99808;}\n    .subNav ul li.lnb02 a {background-color: #89BCC1;}\n    .subNav ul li {width:33.3%;}\n    "
        }}
      />
      <br />
      {/* //????????? ?????? ??? */}
    </div>
  </div>
  {/*//????????? ??? */}
</>
  );
}

export default UsualQuestion;
