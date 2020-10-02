
import React from 'react';
import FullScreen from './FullScreen';



var fullpageItems = ["hello", "what_we_do", "join_us", "who_we_are", "contact"];

export class App extends React.Component{

    fullPageCmp = fullpageItems.map( (a,i) => {
         return  <FullScreen sectionInfo={a} sectionIndex={i} key={i}/>;
    });

    render = () => {
        return (
            <div id = 'main' className ={'main home'}>
                <div id="fullpage">
                    
                    {this.fullPageCmp}
                    
                </div>
            </div>
        
        );              
    };
}

export default App;   