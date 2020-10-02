import React from 'react';
import $ from 'jquery';
import Fullpage from '../js/jquery.fullPage';



const FullPageJS = () => {

    return (


        $('#fullpage').fullpage({
            
            anchors: ['about-us', 'what-we-do', 'meet-us', 'careers', 'contact'],
            
            scrollingSpeed: 1000,			
            afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            var nextSection = loadedSection.next();
            var prevSection = loadedSection.prev();
            let  IScroll;
            
            if(nextSection.hasClass('fp-auto-height') ) {
                IScroll = nextSection.find('.fp-scrollable').data('iscrollInstance');
                IScroll.scrollTo(0, 0, 0)
            }
            
            if(prevSection.hasClass('fp-auto-height') ) {
                IScroll = prevSection.find('.fp-scrollable').data('iscrollInstance');
                IScroll.scrollTo(0, IScroll.maxScrollY, 0)
            }

            console.log("fullpage js initiated");
            }
            
        })
    );

     
    }

    export default FullPageJS;