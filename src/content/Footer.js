
import React from 'react';
//import {Link} from 'react-router-dom';
import Blade from '../components/Blade';

const Footer = props => {

    return (

      
            <Blade bladeStyle="blade-sea-blue" bladeId="footer-blade">
             <footer>             
                <div className="footer-content">
                    
                    <div className="connect-container">
                        <div className="connect-wrap">
                            <h4>Got questions?</h4>
                            <p><a href="#"><span>Info@webgizzmo.com →</span></a></p>
                            <p><a href="#"><span>support@webgizzmo.com →</span></a></p>
                            <p><a href="#"><span>Marketing@webgizzmo.com →</span></a></p>
                        </div>
                    </div>
                    
                    <div className="social-container">   
                        <h4>We socialize and share!</h4>                     
                        <div className="social-wrap">						
                            <div className="social"><img src={require('../images/social/social_linkedin.jpg')} alt="LinkedIn"/></div>
                            <div className="social"><img src={require('../images/social/social_facebook.jpg')} alt="Facebook"/></div>
                            <div className="social"><img src={require('../images/social/social_twitter.jpg')} alt="Twitter"/></div>
                            <div className="social"><img src={require('../images/social/social_instagram.jpg')} alt="Instagram"/></div>
                        </div>
                    </div>

                    <div className="outreach-container">
                        <div className="outreach-wrapper">
                            <h4>Curious what we're up to?</h4>
                            <p><a href="#"><span>Partner →</span></a></p> 
                            <p><a href="#"><span>Subscribe to our e-News letter→</span></a></p>  
                            
                            <div className="learn btn-secondary"><a href="#">Learn more →</a></div>    
                                                      
                        </div>
                    </div>      
              
                </div>
                <div className="copy-right"><p>© 2000 – 2020 Webgizzmo Inc. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p></div>

            </footer>
            </Blade>    
        
            
    );
};
export default Footer;