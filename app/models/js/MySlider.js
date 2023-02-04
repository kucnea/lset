import React, { Component } from 'react';
import $ from 'jquery';
import 'responsive-slides';
import * as vars from './variable.js';
// import ResponsiveSlides from 'responsive-slides';
// import 'Components/WholeProject/css/responsiveslides.css';

class MySlider extends Component {
  
  componentDidMount() {
    var MySlider_count = 0;
    console.log("MySlider count : "+MySlider_count);
    MySlider_count++;
    $.fn.responsiveSlides.defaults = {   
      auto: true,
      speed: 500,
      timeout: 4000,
      pager: false,
      nav: false,
      random: false,
      pause: false,
      pauseControls: true,
      prevText: "Previous",
      nextText: "Next",
      maxwidth: "",
      navContainer: "",
      manualControls: "",
      namespace: "rslides",
      before: $.noop,
      after: $.noop
    };

    $(this.slider).responsiveSlides();
  }

  render() {
    return (
      <div ref={(slider) => this.slider = slider}>
        {/* <img src="/Static/image/visual1.jpg" />
        <img src="/Static/image/visual2.jpg" /> */}
        <img src={vars.REACT_APP_URL + '/image/visual1.jpg'} />
        <img src={vars.REACT_APP_URL + '/image/visual2.jpg'} />
        
      </div>
    );
  }
}

export default MySlider;

