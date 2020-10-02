import React from 'react';
import HeroSkillz from '../components/HeroSkillz';

const Hero = props => {

    function getHeroContent(){
        switch( props.owner ){
            case 'about-us-hero' : return <HeroSkillz position="right"/>
            case 'home': return <HeroSkillz/>
            //case 'about-us' : return <heroABout/>
            //case 'home': <HeroSkillz/>
            //case 'about-us' : return <heroABout/>
            default: return ''
        }
    }

     return (                     

        <div id="hero-container" className ={"hero-container "+  props.owner}>            
            <div id="hero-anima" className={"hero-wrap " +  props.mode}>
                <div id="stage">
                    {/* <div id="shape" className="cube backfaces">
                        <div className="plane one"><img src={require('../images/icons/cog1.png')} alt="What we do"/></div>
                        <div className="plane two"> <img src={require('../images/icons/cog2.png')} alt="What we do"/></div>
                        <div className="plane three"><img src={require('../images/icons/cog3.png')} alt="What we do"/></div>
                        <div className="plane four"><img src={require('../images/icons/cog4.png')} alt="What we do"/></div>
                        <div className="plane five"><img src={require('../images/icons/cog5.png')} alt="What we do"/></div>
                        <div className="plane six"><img src={require('../images/icons/cog6.png')} alt="What we do"/></div>
                        <div className="plane seven"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>
                        <div className="plane eight"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>
                        <div className="plane nine"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>
                        <div className="plane ten"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>
                        <div className="plane eleven"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>
                        <div className="plane twelve"><img src={require('../images/car/car1.jpg')} alt="What we do"/></div>                        
                    </div>*/}

                    
                    {
                        getHeroContent()
                    }                

                </div> 
            </div>
        </div>
            
    );
};
export default Hero;