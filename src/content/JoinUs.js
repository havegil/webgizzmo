
import React from 'react';
import Footer from './Footer';
import QuoteConfig from './QuoteConfig';

const JoinUs = props => {

    return(
        <div id = 'main' className ="main about-us">
        <div className="section" id="section4">
            <div className="join_us_wrapper">
                <div className="ju_intro content_pad">
                    <h2>Join us</h2>
                </div>
                <div className="ju_pos_wrapper">
                    <p className="peep_pad">We are growing. That means we’re always looking to meet talented people who share our values and can offer a different perspective.</p>
                    <p className="peep_pad">Take a look at our open positions. Even if you don’t see one that interests you, if you’re an exceptional account person, medical researcher or writer, or creative, we’d love to talk with you.  <a href="mailto:info@vue-health.com?subject=Position Interest">Click here</a> and let us know how you can make a difference.</p><br/>
                </div>

                <div className="ju_pos_wrapper" style={{border:"none"}}>
                    
                    
                    <div className="phrase_container">
                        <div className="phrase_wrapper">
                            <QuoteConfig/>
                        </div>
                    </div>				

                </div>		
                
            </div>

            <Footer /> 	
        </div>
		</div>						
    );
}
export default JoinUs;