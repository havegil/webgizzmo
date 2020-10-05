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

    constructor(props) {
        super(props);
        this.state = {};
        this.skillz = ['#Net','PHP','WordPress','Responsive Email','Interactive','Microsite', 'Python', 'Golang','NodeJS','Angular', 'React','SQL','NoSQL'];
    }

    
    getPlacement(){
        switch( this.props.position ){
            case 'right' : return 'keep-right'
            default: return ''
        }
    }

    componentDidMount(){
       
    }

    render = () => {
        return (
            
            <div className= {`hero-skill ${this.getPlacement()}`}>
                <Slider {...setSettings}>
             
                    {
                        this.skillz.map(skill => (
                            <p>
                              {skill}
                            </p>
                        ))
                     
                    }

                   
                </Slider>


                <div className="text-fade"></div>
            </div>            
        );              
    };
}

export default HeroSkillz;   