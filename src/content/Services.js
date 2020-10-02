import React from 'react';
import Blade from '../components/Blade';
import Hero from './Hero';

const Services = props => {

        return (

            <div className="main"> 

                <Blade bladeStyle="blade-grey-medium" bladeId="hero-blade">
                    <Hero owner="services-hero" mode="thin"/>
                </Blade>   

                <Blade bladeStyle="blade-white" bladeId="about-us-content">          

                    <div className="about-us">       
                        <div className="about-us-wrap">    
                            <h1>Our Services</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus, lorem non rhoncus elementum, magna tellus ultrices odio, consequat tincidunt risus augue eget nulla. Nulla nisl tellus, blandit in sapien nec, fermentum condimentum erat. Pellentesque in nulla fringilla, fringilla turpis non, maximus justo. Duis ornare efficitur elit et commodo. Aenean lacinia eros congue ultrices laoreet. Mauris justo enim, luctus non magna quis, efficitur interdum arcu. Morbi in tortor rhoncus, euismod sem non, varius nisl. Proin posuere convallis nibh, dignissim sollicitudin tellus pretium eu. Vivamus turpis lorem, pretium eget sagittis eu, dictum sed orci. Mauris vitae dapibus sapien.</p>
                            <p>Whether working with up-and-coming biotech or established pharmaceutical companies, here’s where our talents really shine:</p>
                                    
                            <ul className="about_us_list">
                                <li>Emerging technologies and therapeutic platforms</li>
                                <li>New product development</li>
                                <li>Novel drug delivery systems</li>
                                <li>New molecules, biologics, and compound discovery</li>	
                            </ul>

                            <h2>We are independent</h2>
                            <p>Mauris consequat id justo vel mollis. Aliquam et pulvinar nisi. Nunc hendrerit diam eget pellentesque blandit. Suspendisse potenti. Sed pulvinar sapien odio, a faucibus augue euismod sed. Proin orci urna, congue non laoreet eget, vulputate vel velit. Nunc et enim eget dui dapibus venenatis. Nunc fringilla, purus vitae egestas consequat, massa nulla facilisis eros, eu egestas enim dui ultricies est. Aliquam erat volutpat. Integer luctus elementum justo auctor consequat. Praesent pulvinar elit convallis auctor suscipit. Curabitur id dignissim mauris. Curabitur vel tempor mi. Suspendisse ut porta sapien, non ornare nulla.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. Integer tincidunt, sapien eget consectetur vestibulum, massa dui vulputate nunc, blandit tempor nibh sapien id metus. Sed faucibus nibh non odio faucibus finibus. Etiam odio mauris, elementum venenatis commodo varius, mattis porta tellus. Curabitur quam arcu, porta et blandit vel, dignissim eget ex. Nullam vitae dui faucibus, posuere magna eu, faucibus lorem. Nam fermentum dui nec semper dignissim. Quisque sit amet nisl non nunc faucibus fermentum. Vestibulum tempor magna sit amet facilisis consequat.</p>
                            <p>Ut molestie sem vitae iaculis vehicula. Curabitur ornare enim vel mi convallis, ut sollicitudin dui molestie. In fringilla vehicula tellus, sed lobortis lectus faucibus a. Vivamus et nisi at tellus vestibulum eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lacinia dui sem, at finibus elit pellentesque et.</p> 
                            <p>Donec vestibulum diam at nisi viverra, vitae dictum ligula lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque aliquet lectus pretium velit euismod pharetra.</p> 
                            
                        </div>  
                    </div>     
                </Blade>     
            </div>     
        );
};
export default Services;