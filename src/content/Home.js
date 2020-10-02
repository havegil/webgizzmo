import React, { createRef }  from 'react';
import Hero from './Hero';
import Blade from '../components/Blade';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Client from '../components/Clients';

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: ""
        };

        this.targetRef = createRef();
    }    

    getState(){
        return this.state;
    }

   componentDidMount(){

       if( this.props.location.state != null  && this.props.location.state.activePage == "contact-us"){
            setTimeout(() =>{
               this.targetRef.current.scrollIntoView({behavior:'smooth'})
            }, 500);
       }
   }
   
   render = () => {
        return (
            <div className="main">           

                <Blade bladeStyle="blade-grey-medium" bladeId="hero-blade">
                    <Hero owner="home-hero" mode="tall"/>
                </Blade> 

                <Blade bladeStyle="blade-white" bladeId="content1">
                    <div className="what-we-do">
                        <div className="what-we-do-wrap">
                            <div className="what-we-do-verb">
                                <h1>What we do</h1>
                                <p>We thrive on being the brick under the brick, the man behind the man. We take a position of working behind the scene, this allows to focus 100% on your problems. We can be fexible, nimble and responsive, our development process and strategy is centered around the problem, by understand the clarioty of the problem we come up with clear solutions, we allow you and your team to focus on what you do best and support you on the execution. We don't leave town after the execution instead...
                                </p>
                                <div className="nl-l-link"><a href="#"><span>Learn more →</span></a></div>
                                
                                <div className="work-scheme">
                                    <h2>
                                        Our Manifesto
                                    </h2>
                                    <div className="work-anim">
                                        <img src={require('../images/work-scheme.png')} alt="What we do"/>
                                    </div>
                                </div>
                            </div>
                            <aside>
                                
                                <div className="what-we-do-testimonial">
                                    <h3>Just Saying...</h3>
                                        <Testimonials/>                                                          
                                </div>

                                <div className="all-wave">                            
                                    <h3>All the waves</h3>
                                    <p><a href="#"><span>White Paper  →</span></a></p>
                                    <p><a href="#"><span>Case studies  →</span></a></p>
                                </div>

                            </aside>
                        </div>
                    </div>
                </Blade>
                <Blade bladeStyle="blade-cloudy-blue" bladeId="content2">
                    <div className="gizzmo-goals">
                        <div className="goals-wrap">
                            <div className="mission">
                                <h1>HOW WE MEASURE SUCCESS</h1> 
                                <p>The three Rs workflow receipe</p>

                                <ul>
                                    <li>
                                        <div className="bld-card-title r-deliver"><h2>Rapid delivery</h2></div>
                                        <div className="bld-card-copy">
                                            <p>By adding value to what they do best. By redefining their ideas of strategy, service, knowledge sharing and data science.</p>
                                        </div>
                                        <div className="learn"><a href="#">Learn more →</a></div>
                                    </li>
                                    <li>
                                        <div className="bld-card-title r-roi"><h2>Rapid ROI</h2></div>
                                        <div className="bld-card-copy">
                                            <p>By adding value to what they do best. By redefining their ideas of strategy, service, knowledge sharing and data science.</p>
                                        </div>
                                        <div className="learn"><a href="#">Learn more →</a></div>
                                    </li>
                                    <li>
                                        <div className="bld-card-title r-support"><h2>Rapid Support</h2></div>
                                        <div className="bld-card-copy">
                                        <p>By adding value to what they do best. By redefining their ideas of strategy, service, knowledge sharing and data science.</p>
                                        </div>
                                        <div className="learn"><a href="#">Learn more →</a></div>
                                    </li>
                                </ul>                          
                                
                            </div>                       
                                
                        </div>
                    </div>
                </Blade>
                <Blade bladeStyle="blade-grey-lite" bladeId="contact-us-content">
                    <div id="contact-us" ref={this.targetRef}></div>{/*anchor to contact section*/}
                    <Contact/>
                </Blade>          
                <Blade bladeStyle="blade-white" bladeId="logo-blade">
                    <div className="gizzmo-logos">
                        <div className="logos-wrap">
                            <div className="logos-verb">
                                <h1>They have a gizzmo</h1>
                            </div>
                            <div className="logos-lst">
                                {/* <ul>
                                    <li> <img src={require('../images/logos/microsoft.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/adobe.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/vue-health.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/pwc.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/sylvant.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/cramer.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/adobe.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/vue-health.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/pwc.png')} alt=""/></li>
                                    <li> <img src={require('../images/logos/sylvant.png')} alt=""/></li>

                                </ul> */}
                                
                                <Client/>
                            </div>
                        </div>                
                    </div >
                </Blade>
                
            </div>
        )
    }
    
};
export default Home;