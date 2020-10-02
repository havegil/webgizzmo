import React from 'react';


const Blurb = props => {
    return (		
        
        <div className={props.sceneName +`_blurb`}>            
            <h3>{props.blurbInfo.greet}</h3>
            <p className="blurb">{props.blurbInfo.blurb}</p>
        </div>               
    );
};

export default Blurb;