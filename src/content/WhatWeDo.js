import React from 'react';
import Footer from './Footer';
import QuoteConfig from './QuoteConfig';

const WhatWeDo = props => {

    return (
        <div id = 'main' className ="main about-us">
        <div className="section" id="section2">
            <div className="what_wedo">
                
                <div className="what_wedo_wraper">
                    <img src="images/whatWeDo.gif" alt="What We Do"/>
                    <h1>What we do</h1>
                </div>
            </div>
            
            <div className="what_wedo_wraper">
                <div className="what_wedo_content_wraper content_pad">
                    <div className="intro_copy">
                        <p >We start on a solid foundation of science and then build up with a multidisciplinary approach. Through the collaboration of medical, commercial, and creative strategies, our clients are presented with more innovative solutions for the immediate ask, with acknowledgement of the brand's future life cycle.</p>
                        <p>We call this VUE 360°.</p>		
                    </div>
                </div>
            </div>
            <div className="what_wedo_promo_wraper content_pad">
                <div className="what_wedo_wraper hero_content">		
                    <div className="call_out_container">
                        <div className="call_out_items"><h3>Promotional <br className="mobile_nobr"/>capabilities</h3></div>
                        <div className="call_out_items">
                            <ul>
                                <li>Marketing strategy</li>
                                <li>Message architecture and brand  narratives </li>
                                <li>Branding</li>
                                <li>Launch strategy</li>
                                <li>Marketing materials</li>
                                <li>Life cycle planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="what_wedo_medcom_wraper">			
                <div className="what_wedo_wraper hero_content">
                    <div className="call_out_container">
                        <div  className="call_out_items">
                            <h3 className="pull_left">MedComm <br className="mobile_nobr"/>capabilities</h3>
                        </div>
                        <div className="call_out_items">
                            <ul>
                                <li>Key opinion leader (KOL) development</li>
                                <li>Scientific platforms</li>
                                <li>Advisory boards</li>
                                <li>Peer-to-peer content</li>
                                <li>Peer-to-peer training</li>
                                <li>Congress support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="what_wedo_wraper">

                <div className="phrase_container">
                    <div className="phrase_wrapper">
                        <QuoteConfig/>
                    </div>
                </div>
            </div>
 
            <Footer /> 
        </div>
        </div>
    );
};
export default WhatWeDo;