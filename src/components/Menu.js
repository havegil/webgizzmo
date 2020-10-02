import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: "",
        };
    }

    updateState(sText){
        this.setState({sText});
    }

    getState(){
         return this.state;
    }

    pageRequest = (e) => {
        e.preventDefault();
        //this.props.onStateUpdate(e.target.id);    }
    }

    componentDidMount(){
        console.log()
        
        $('.main-nav-hamburger').on('click', function() {
            $('.main-menu').toggleClass('opened');
             $('.menu-nav').toggleClass('opened');             
        }); 
    }  
     
   
    render = () => {
        return (

            <header>
                <nav>
                    <div className="global-nav-wrapper">
                        <div className="global-nav">
                            <div id="main-menu" className="main-menu">                        
                                <div id="wg-logo" className="wg_logo">
                                    <NavLink id="wg-Logo" to="/"><img src="images/wg-logo.png" alt="WebGizzmo logo"/></NavLink>
                                </div>
                                
                                <div className="main-nav-hamburger">
                                    <span className="main-nav-hamburger-box">
                                        <span className="main-nav-hamburger-inner"></span>
                                    </span>
                                </div>
                                
                                <div className="menu-nav">
                                    <ul>
                                        <li><NavLink id="solutions" to={{pathname:'/solutions', state:{activePage:'solutions'}}} activeClassName="activate" strict><div>Solutions</div></NavLink></li>
                                        <li><NavLink id="services" to={{pathname:'/services', state:{activePage:'services'}}} activeClassName="activate" strict><div>Services</div></NavLink></li>
                                        <li><NavLink id="industry" to={{pathname:'/industry', state:{activePage:'industry'}}} activeClassName="activate"strict><div>Insdustries</div></NavLink></li>
                                        <li><NavLink id="support" to={{pathname:'/support', state:{activePage:'support'}}} activeClassName="activate"strict><div>Support</div></NavLink></li>
                                        <li><NavLink id="about-us" to={{pathname:'/about-us', state:{activePage:'about-us'}}} activeClassName="activate"strict><div>About</div></NavLink></li>
                                        <li><NavLink id="contact-nav" to={{pathname:'/#contact-us', state:{activePage:'contact-us'}}} activeClassName="activate"strict><div>Contact</div></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
};

export default Menu;
