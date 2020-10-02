import React, { Component } from 'react';
import Slider from "react-slick";
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    dots: false,
    mobileFirst : true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              dots: false,
              autoplay: true,
              infinite: true
            }
          },
       
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            fade: false,
            infinite: true
          }
        }
      ]
};

const setSettings = ({  
    ...config
});

export class Clients extends React.Component{

    render = () => {
        return (
            
           <div>
                 {/* <Slider {...setSettings}>                */}
                    <div> <img src={require('../images/logos/microsoft.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/adobe.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/vue-health.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/pwc.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/sylvant.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/cramer.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/adobe.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/vue-health.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/pwc.png')} alt=""/></div>
                    <div> <img src={require('../images/logos/sylvant.png')} alt=""/></div>                           
                 {/* </Slider> */}

               </div>          
        );              
    };
}

export default Clients;   