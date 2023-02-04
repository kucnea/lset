import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// import tailwindStylesheetUrl from "./styles/tailwind.css";

import default2 from "./styles/css/default2.css";
// import pc from "./styles/css/pc.css";
// import mobile from "./styles/css/mobile.css";
// import style from "./styles/css/style.css";
// import style2 from "./styles/css/style2.css";
// import m_bdr from "./styles/css/m_bdr.css";

// import { getUser } from "./session.server";
import * as vars from "./models/js/variable.js";

import { Footer } from "./routes/footer/Footer.js";
import { Header } from "./routes/header/Header.js";
import { BranchPcMobile } from "./routes/header/BranchPcMobile.js";

export const links = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   var link = document.createElement('link');
  //   var mediaQuery = false;
  //   mediaQuery = window.matchMedia('(max-width: 979px)');
  //   console.log("in useEffect : "+mediaQuery.matches);
  //   link.id = 'cssDevice';
  //   link.rel = 'stylesheet';
  //   link.type = 'text/css';
  //   if(mediaQuery.matches) link.href= './styles/css/mobile.css';
  //   else link.href = './styles/css/pc.css';
  //   link.media='all';
  //   console.log(link.href);
  //   document.getElementsByTagName('head')[0].appendChild(link);

  //   return () => {};
  // },[mediaQuery]);
  
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 979px)');
    
  //   setIsMobile(mediaQuery.matches);
  //   mediaQuery.addListener(handleMediaChange);

  //   return () => {
  //     mediaQuery.removeListener(handleMediaChange);
  //   };
  // }, [isMobile]);

  // const handleMediaChange = (mediaQuery) => {
  //   setIsMobile(mediaQuery.matches);
  //   console.log(isMobile);
  // };  

  return [
    // { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: default2 },
    // { rel: "stylesheet", href: pc },
    // { rel: "stylesheet", href: mobile },
    // { rel: "stylesheet", href: isMobile? mobile : pc },
    // { rel: "stylesheet", href: style },
    // { rel: "stylesheet", href: style2 },
    // { rel: "stylesheet", href: m_bdr },
  ];
};

export const meta = () => ({
  charset: "utf-8",
  title: "구리언어심리상담센터",
  viewport: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
  imageToolbar: "no",
  XUACompatible: "IE=10,chrome=1",
  keywords: "구리언어심리상담센터",
  keywords: "구리아동상담 구리언어치료 구리놀이치료 구리미술치료 구리aba 구리bcba 구리qba 구리esdm 구리인지 구리인지학습 구리학습치료 구리조기교실 구리언어 구리청소년상담 구리성인상담 구리지능검사 구리성격검사 구리풀배터리 구리기질검사 구리발달검사 구리상담센터 구리발달센터 구리아동상담센터 구리아동발달센터 (구리/남양주/다산/송파/하남/양평)",
  description: "안녕하세요. 구리언어심리상담센터 입니다. 환영합니다.",
  robots: "index, follow",
  Author: "이민호",
  refresh: "3600",
  refresh: "Split vertical out",
  HandheldFriendly: "true",
  formatDetection: "telephone=no"
});

// export async function loader({ request }) {
//   return json({
//     user: await getUser(request),
//   });
// }

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
        <BranchPcMobile/>
        <HelmetProvider>
          <Helmet>
            <title>{vars.REACT_APP_CENTER_NAME}</title>
            {/* <meta http-equiv="Title" content={vars.REACT_APP_CENTER_NAME} /> */}
            {/* 그림위에 마우스 오버시 이미지 관련 툴바가 생기지 않도록 정의합니다. */}
            {/* <meta http-equiv="imagetoolbar" content="no" />  */}
            {/* 해당 브라우저 버전으로 랜더링 */}
            {/* <meta http-equiv="X-UA-Compatible" content="IE=10,chrome=1" />  */}
            {/* 검색엔진에 검색되기 위한 키워드를 정의, 태그 동일이름으로 여러개 가능 */}
            {/* <meta name="keywords" content="구리언어심리상담센터" /> */}
            {/* <meta name="keywords" content="구리아동상담 구리언어치료 구리놀이치료 구리미술치료 구리aba 구리bcba 구리qba 구리esdm 구리인지 구리인지학습 구리학습치료 구리조기교실 구리언어 구리청소년상담 구리성인상담 구리지능검사 구리성격검사 구리풀배터리 구리기질검사 구리발달검사 구리상담센터 구리발달센터 구리아동상담센터 구리아동발달센터 (구리/남양주/다산/송파/하남/양평)"/> */}
            {/* 해당 페이지의 설명을 정의합니다. (최대 공백포함150 글자 ) 검색 결과에 표시되는 문구 */}
            {/* <meta name="description" content="안녕하세요. 구리언어심리상담센터 입니다. 환영합니다." /> */}
            {/* 검색 로봇에 대한 명령, content에  noindex시 검색결과 포함안됨, 관리자페이지 같은경우 */}
            {/* <meta name="robots" content="index, follow" /> */}
            {/* 제작자 */}
            {/* <meta http-equiv="Author" content="이민호" /> */}
            {/* content(s) 마다 페이지 새로고침 "5; url = 주소" 도 가능 */}
            {/* <meta http-equiv="refresh" content="3600" /> */}
            {/* 페이지 들어갈때 장면 전환 효과 */}
            {/* <meta http-equiv="refresh" content="Split vertical out" /> */}
            {/* sns공유 200x200 */}
            <meta property="og:image" content={vars.REACT_APP_URL+'/image/visual1.jpg'} /> 
            {/* 안드로이드계열 ico사용 128*128 */}
            {/* <link rel="shortcut icon" type="image/x-icon" href="http://www.-.com/board/img/favicon.ico" />  */}
            {/* 아이폰계열 png사용114*114 */}
            {/* <link rel="apple-touch-icon" type="image/x-icon" href="http://www.-.com/board/img/favicon.ico" />  */}
            {/* 이건 뭔지 확인해볼것 */}
            {/* <link rel="icon" type="image/x-icon" href="http://www.-.com/board/img/favicon.ico" /> */}

            {/* 모바일용 */}
            {/* <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" /> */}
            {/* <meta name="HandheldFriendly" content="true" /> */}
            {/* <meta name="format-detection" content="telephone=no" /> */}

            {/* css가 pc용 mobile용 만들어진거 쓸것 */}
            {/* PC용 CSS */}
            {/* <link type="text/css" rel="stylesheet" href="./styles/css/pc.css" media="screen and (min-width:980px)" />  */}
            {/* mobile용 CSS */}
            {/* <link type="text/css" rel="stylesheet" href="./styles/css/mobile.css" media="screen and (max-width:979px)" /> */}
          </Helmet>
        </HelmetProvider>
      </head>
      <body className="h-full">
        <Header/>
        <div className="hd_ar"></div>
        <hr />        
        {/* {vars.REACT_APP_CENTER_NAME}{vars.REACT_APP_URL}
        <img src={vars.REACT_APP_URL+'/image/bg_arrow_down.png'}/> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer/>
      </body>
    </html>
  );
}
