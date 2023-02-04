import React,{useState, useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";
import $ from 'jquery';

export function IntroduceComming() {
  
  const daumUrl = "http://map.kakao.com";
  const daumMapUrl2 = "https://map.kakao.com/?itemId=1511471507";
  // const loadFlag = false;
  const [loadFlag,setLoadFlag] = useState(false);
  // const [location,setLocation] = useState();
  const [isMobile,setIsMobile] = useState();
  const [preIsMobile,setPreIsMobile] = useState();
  const [isReady,setIsReady] = useState(false);

  useEffect(() => {
    // console.log('run useEffect : '+loadFlag);
    if(!document.getElementById('kakaomap')){
      const script = document.createElement('script');
      script.id="kakaomap"
      script.async = 'true';
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey='+vars.REACT_APP_DAUM_MAP_KEY+"&autoload=false";
      document.getElementsByTagName('head')[0].appendChild(script);

      var link = document.createElement('link');
      link.id = 'roughmapLander';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '/styles/css/roughmapLander.css';
      link.media='all';
      document.getElementsByTagName('head')[0].appendChild(link);
    }else{
      const script = document.getElementById('kakaomap');
      console.log('loadFlag in listener: '+loadFlag);
      script.addEventListener("load",()=>{
        window.kakao.maps.load(()=>{
          // console.log('====start====');
          // console.log(document.getElementById('cssDevice').href.substr(33,2));
          // console.log('====end====');
          // var container = document.getElementById("map");

          var container;
          if(document.getElementById('cssDevice').href.substr(33,2)=='pc') container = document.getElementById("map1");
          else container = document.getElementById("map2");

          var options = {
            center: new window.kakao.maps.LatLng(37.6016109, 127.1439133),
            level: 3,
          };

          var map = new kakao.maps.Map(container, options);

          // var imageSrc = vars.REACT_APP_URL+'/image/toplogo.png';
          var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/2013/map/marker_map04.png'
          var imageSize = new kakao.maps.Size(40,40);
          var imageOption = {offset: new kakao.maps.Point(15,35)};

          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
          var markerPosition = new kakao.maps.LatLng(37.6016109, 127.1439133); 

          var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
          });

          marker.setMap(map);

          var duamMapUrl = 'https://map.kakao.com/?itemId=1511471507';
          var content = '<div id="markert" class="roughmap_maker_label" style="margin-bottom:40px;">' +
                          '<a href="'+daumMapUrl2+'" target="_blank">' +
                            '<span class="roughmap_lebel_text"}>'+vars.REACT_APP_CENTER_NAME+'</span>' +
                          '</a>'  
                        '</div>';
          
          var overlayPosition = new kakao.maps.LatLng(37.6016109, 127.1439133);

          var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: overlayPosition,
            content: content,
            yAnchor: 1
          });
          
          // document.getElementById('markerminho').onClick=()=>window.open(daumMapUrl2);


          var zoomControl = new kakao.maps.ZoomControl();
          map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

          // loadFlag = true;
          setLoadFlag(true);
          console.log('loadFlag in end of listener: '+loadFlag);

        })
      });

      
      console.log("preIsMobile : "+preIsMobile+", isMobile : "+isMobile);

      const mediaQuery = window.matchMedia('(max-width: 979px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaChange = (e) => setIsMobile(e.matches);
      mediaQuery.addListener(handleMediaChange);
      if(isMobile !== preIsMobile && preIsMobile!==undefined){
        console.log("reload");
        window.location.reload();
      }
      setPreIsMobile(isMobile);

      // $('document').ready(function(){
      //   setIsReady(true);
      // })
      // console.log("ready1 : "+isReady);

      $('document').children('kakao').ready(function(){
        setIsReady(true);
      })
      console.log("ready1 : "+isReady);
      if(preIsMobile!==undefined && isReady===true && document.getElementById('map1').style.overflow !== "hidden" && document.getElementById('cssDevice').href.substr(33,2)==='pc') window.location.reload();
      if(preIsMobile!==undefined && isReady===true && document.getElementById('map2').style.overflow !== "hidden" && document.getElementById('cssDevice').href.substr(33,2)!=='pc') window.location.reload();

    }
  },[loadFlag, isMobile, isReady]);

  const handleMediaChange = (mediaQuery) => {
    setIsMobile(mediaQuery.matches);
  };

  return (
<>
  {/* PC용 헤드카피*/}
  <div className="subtop">
    <div className="head_copy">
      <h2>
        000 소개
        <br />
        소개두번째줄
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //PC용 헤드카피*/}
  {/* 모바일용 헤드카피*/}
  <div className="mobile_subtop">
    <div className="head_copy">
      <h2>
        000 소개
        <br />
        000 소개
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //모바일용 헤드카피*/}
  <div className="subtop_140" />
  <div className="subtop_u" />
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    {<IntroduceSubMenu/>}
    {/* 우측컨텐츠*/}
    <article id="ctt" className="ctt_map">
      <header>
        <h1>찾아오시는길</h1>
      </header>
      <div id="ctt_con">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    #GNB ul li.gnb01 a {color:#a99808;}\n    #lnb>ul>li.lnb06 a {color:#a99808;}\n    .subNav ul li.lnb06 a {background-color: #89BCC1;}\n    "
          }}
        />
        {/* 우측컨텐츠*/}
        <div id="left_container">
          {/* 게시판 또는 컨텐츠 */}
          {/* 콘텐츠 시작*/}
          {/* 상단서브타이틀 */}
          <div className="hgroup">
            <h1>
              <span>찾아오시는 길</span>
            </h1>
            <p>
              {" "}
              <span className="home">
                <span>HOME</span>
              </span>{" "}
              <span>센터 소개</span> <span className="fb">찾아오시는 길</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀 */}
          {/* 탭  
     <div className="tabgroup">
     <div className="tabnavi">
<ul>
  <li className="on"><a href="../bbs/content.php?co_id=map">수원센터</a></li>
  <li><a href="../bbs/content.php?co_id=map2">수지센터</a></li>
  <li><a href="../bbs/content.php?co_id=map3">분당센터</a></li>
</ul>
    </div>
    </div>
    <!--// 탭*/}
          {/* 지도삽입*/}
          <div className="map_area_pc">
            {/* Daum 지도_pc */}
            <div
              className="root_daum_roughmap root_daum_roughmap_landing"
              id="daumRoughmapContainer1488352285516"
              style={{ width: 785 }}
            >
              <div className="wrap_map" style={{ width:"785px", height: "400px" }}>
                <div
                  className="map"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    id="map1"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      touchAction: "none",
                      maxWidth: "785px",
                      maxHeight: "400px",
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="wrap_controllers hide">
                <Link
                  className="tit_controllers"
                  onClick={()=>window.open(daumMapUrl2)}
                  target="_blank"
                >
                  <img
                    src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                    width={72}
                    height={16}
                    alt="카카오맵"
                    style={{ display: "block", width: 72, height: 16 }}
                  />
                </Link>
                <div className="wrap_btn_roadview">
                  <Link
                    className="txt"
                    target="_blank"
                    onClick={()=>window.open(daumMapUrl2)}
                  >
                    길찾기
                  </Link>
                </div>
              </div>
            </div>
            {/* //Daum 지도_pc */}
            <h2 className="tit1">주소</h2>
            <p className="bu2">
              지&nbsp;&nbsp; 번 : {vars.REACT_APP_CENTER_ADR_2}
            </p>
            <p className="bu2">
              도로명 : {vars.REACT_APP_CENTER_ADR_1}  {" "}
            </p>
            <h2 className="tit1">대표전화</h2>
            <p className="bu2">TEL: {vars.REACT_APP_CENTER_TEL}</p>
            <p className="bu2">
              업무시간 : 평일 {vars.REACT_APP_CENTER_NORMAL_TIME} / 토 {vars.REACT_APP_CENTER_SATURDAY_TIME} (일,공휴일 휴무){" "}
            </p>
            <br />
            <h2 className="tit1">주차</h2>
            <ul className="list_type">
              <p className="bu2"> 건물 앞, 혹은 건물 앞에 자리가 없을 경우 <br/>
                제 5 공영주차장에 주차하고 오시면 주차권 발부해드립니다.<br/>
                제 4, 5 공영 주차장의 경우 장애인증이 있으시면 무료주차 가능합니다.<br/>
                </p>
            </ul>
            <h2 className="tit1">교통</h2>
            <ul className="list_type">
              <p className="bu2">구리역(경의,중앙선) 2번 3번 출구 도보 3분</p>
              <p className="bu2">구리역, 구리역입구(중), 롯데백화점</p>
              <p className="bu2">
                일반버스 : 1-4, 3, 9, 9-1, 10-5, 15, 23, 30, 65, 65-1, 93, 95,
                97, 165, 166-1, 167, 167-1, 2000-1, 2000-3, 2000-4
              </p>
              <p className="bu2">
                직행/급행 : 115-6,1330-2,1330-4, 1330-44, 8005, 8409
              </p>
              <p className="bu2">좌석버스 : 330-1</p>
              <p className="bu2">마을버스 : 2, 2-1, 5, 6, 7, 8</p>
            </ul>
          </div>
          <div className="map_area_mobile">
            {/* Daum 지도_mobile */}
            <div
              className="root_daum_roughmap root_daum_roughmap_landing"
              id="daumRoughmapContainer1488352322282"
              style={{ width: 330 }}
            >
              <div className="wrap_map" style={{ height: 230 }}>
                <div
                  className="map"
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    id="map2"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                      touchAction: "none",
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="wrap_controllers hide">
                <Link onClick={()=>window.open(daumMapUrl2)} className="tit_controllers">
                  <img
                    src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                    width={72}
                    height={16}
                    alt="카카오맵"
                    style={{ display: "block", width: 72, height: 16 }}
                  />
                </Link>
                <div className="wrap_btn_roadview">
                  <Link onClick={()=>window.open(daumMapUrl2)} className="txt">
                    길찾기
                  </Link>
                </div>
              </div>
            </div>
            {/* //Daum 지도_mobile */}
            <h2 className="tit1">주소</h2>
            <p className="bu2">
              지&nbsp;&nbsp; 번 : {vars.REACT_APP_CENTER_ADR_1}
            </p>
            <p className="bu2">
              도로명 : {vars.REACT_APP_CENTER_ADR_2} {" "}
            </p>
            <h2 className="tit1">대표전화</h2>
            <p className="bu2">{vars.REACT_APP_CENTER_TEL}</p>
            <p className="bu2">
              업무시간 : 평일 {vars.REACT_APP_CENTER_NORMAL_TIME} / 토 {vars.REACT_APP_CENTER_SATURDAY_TIME} (일,공휴일 휴무){" "}
            </p>
            <br />
            <h2 className="tit1">주차</h2>
            <ul className="list_type">
              <p className="bu2"> 건물 앞, 혹은 건물 앞에 자리가 없을 경우 <br/>
                제 5 공영주차장에 주차하고 오시면 주차권 발부해드립니다.<br/>
                제 4, 5 공영 주차장의 경우 장애인증이 있으시면 무료주차 가능합니다.<br/>
                </p>
            </ul>
            <h2 className="tit1">교통</h2>
            <ul className="list_type">
              <p className="bu2">구리역(경의,중앙선) 2번 3번 출구 도보 3분</p>
              <p className="bu2">구리역, 구리역입구(중), 롯데백화점</p>
              <p className="bu2">
                일반버스 : 1-4, 3, 9, 9-1, 10-5, 15, 23, 30, 65, 65-1, 93, 95,
                97, 165, 166-1, 167, 167-1, 2000-1, 2000-3, 2000-4
              </p>
              <p className="bu2">
                직행/급행 : 115-6,1330-2,1330-4, 1330-44, 8005, 8409
              </p>
              <p className="bu2">좌석버스 : 330-1</p>
              <p className="bu2">마을버스 : 2, 2-1, 5, 6, 7, 8</p>
            </ul>
          </div>
          {/*//지도삽입*/}
          {/*//콘텐츠 끝 */}
          {/* //게시판 또는 컨텐츠 */}
        </div>
        {/* 우측컨텐츠*/}{" "}
      </div>
    </article>
    {/*//우측 콘텐츠 끝 */}
  </div>
  {/*//콘텐츠 끝 */}
</>
  );
}


export default IntroduceComming;

