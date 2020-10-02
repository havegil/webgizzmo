
import React from 'react';
import {Link} from 'react-router-dom';
import Blurb from './Blurb';
import FullPageContact from '../content/FullPageContact';



/*
    In props we will want to pass in the followings:
    section Index
    section class name could be an array of string names
    name string could also be used to fetch blurb, intro image etc

*/


class FullScreen extends React.Component {

    sceneName = this.props.sectionInfo + "_scene";
    sectionIndex = "section" + this.props.sectionIndex;

    blurbObj = [
        {
        blurb: "<span className=\"blurb_lrg\">Welcome to VUE Health.</span> <br/>If you’re expecting just another healthcare communications agency, look again.",
        greet : "Hello"
        },
        { blurb: "We help brands find their true expression.",
         greet:"What we do"
        },
        { blurb: "Vision: the art of seeing the invisible.",
        greet: "Who we are"
        },
         { blurb: "If you have a unique point of view, we’d like to meet you. See our open positions. ",
         greet:"Join us"
        }
    ];

    
    sanitizeText = (strText) => {
        var strpageLabel = strText.replace("_", "-");
         return strpageLabel;
    }
    
    render = () =>{

        if(this.props.sectionIndex > 3){
            return(
                <div className="section" id={this.sectionIndex}>							
                    
                    <div className="intro_scenes">

                        <div className={this.sceneName}></div>
                        <FullPageContact/>                   

                    </div>
                    
                </div>
            );
        }else{

            return (
                
                <div className="section" id={this.sectionIndex}>							
                    <Link to={this.sanitizeText(this.props.sectionInfo)}>
                        <div className="intro_scenes">

                            <div className={this.sceneName}></div>
                            <Blurb sceneName = {this.props.sectionInfo} blurbInfo={this.blurbObj[this.props.sectionIndex]}/>                   

                        </div>
                    </Link>
                </div>
            );
        }
    };
};

export default FullScreen;