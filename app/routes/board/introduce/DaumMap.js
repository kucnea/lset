import React, { useEffect } from "react";

export const DaumMap = () => {

  useEffect(() => {
    const { kakao } = window;

    kakao.maps.load(()=>{
      console.log('123');
     
      
      let container = document.getElementById("map");
  
      let options = {
        center: new kakao.maps.LatLng(35.85133, 127.734086),
        level: 3,
      };
  
      let map = new kakao.maps.Map(container, options);
  
      console.log("loading kakaomap");
    });

  }, []);

  return (
    <div>
      <div id="map">
      </div>
    </div>
  );
};

export default DaumMap;