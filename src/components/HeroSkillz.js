import React, { Component } from 'react';
import Slider from "react-slick";
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    dots: true,
    vertical: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1
};

const setSettings = ({  
              
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 500,
    fade: false,
    ...config
});



export class HeroSkillz extends React.Component{

    getPlacement(){
        switch( this.props.position ){
            case 'right' : return 'keep-right'
            default: return ''
        }
    }

    render = () => {
        return (
            
            <div className= {`hero-skill ${this.getPlacement()}`}>
                <Slider {...setSettings}>
                    
                   <p>#Net</p>
                   <p>PHP</p>
                   <p>WordPress</p>
                   <p>Responsive Marup Emails</p>
                   <p>Interactive</p>
                   <p>Microsite</p>
                   <p>Python</p>
                   <p>Golang</p>
                   <p>NodeJS</p>
                   <p>Angular</p>
                   <p>ReactJS</p>
                   <p>SQL</p>
                   <p>NoSQL</p>
                   <p>AI</p>
                   <p>CRM</p>
                   <p>LMS</p>
                   <p>eLearning</p>
                   <p>SASS</p>
                   <p>IOS</p>
                   <p>Gamification</p>
                   <p>ANDROID</p>
                </Slider>

                <div className="text-fade"></div>
            </div>            
        );              
    };
}

export default HeroSkillz;   