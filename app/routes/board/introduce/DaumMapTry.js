import React, { useEffect } from "react";

// const { kakao } = window;

export default function DaumMap() {

  const container = document.getElementById("map");

  const options = {
    center: new window.daum.maps.LatLng(35.85133, 127.734086),
    level: 3,
  };

  const map = new window.daum.maps.Map(container, options);

  console.log("loading kakaomap");
   
}