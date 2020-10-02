import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './components/Menu';
import './stylesheets/main.scss';
import  {Home, AboutUs, Solutions, Services, Industry, Support, Footer} from './content';


class MainContainer extends React.Component{

    render = () => {

        return(

            <BrowserRouter> 
                              
                    <div className='main'>

                        <Menu/>
            
                        <section>                      
                            <Route path="/" exact component={Home}/> 
                            <Route path="/solutions" component={Solutions}/>
                            <Route path="/services" component={Services}/> 
                            <Route path="/industry" component={Industry}/>
                            <Route path="/support" component={Support}/>
                            <Route path="/about-us" component={AboutUs}/>
                            <Route path="/#contact-us" component={Home}/>
                        </section>                       
                                                
                        <Footer/> 

                    </div>                    

            </BrowserRouter>
        );
    }
}
export default MainContainer;   


var destination = document.querySelector('#container');

ReactDOM.render(
   <MainContainer/>,    
    destination
);