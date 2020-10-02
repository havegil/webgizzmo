import React, { Component } from 'react';
import Slider from "react-slick";
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const setSettings = ({            
    /*centerMode: 'true',
    centerPadding: '50px', */
    autoplay: true,
    ...config
});

export class Testimonials extends React.Component{

    render = () => {
        return (
            
            <div className="testim-wrap">
                <Slider {...setSettings}>
                    <p><q>We have been very impressed with Webgizzmo's methodology and approach to the campaigns we have run with them to date. They have also given us exceptional insights into new trends in what is an ever-changing field. We feel that they have an in-depth knowledge of SEO/PPC, which is immediately apparent and they give exceptional insights into what is undoubtedly an ever-changing field.  We found that their enthusiasm is matched only by their level of expertise.</q><br/>
                        <span>-Sample Sample</span>
                    </p>
                    <p><q>Webgizzmo have been a fantastic partner in not only helping us define and optimise our core search objectives, but also in responding to tactical challenges and new opportunities. Their reporting makes it easy to keep everyone here up to speed, and to top it off – they're pretty good craic.</q><br/>
                        <span>-Sample</span>
                    </p>
                </Slider>
            </div>
            
        );              
    };
}

export default Testimonials;   