import React from 'react';
import $ from 'jquery';

class ManifestoAnimotion extends React.Component{

    constructor(props) {
        super(props);
        this.state = {} 
    };

    componentDidMount(){    

        // MouseOver
        $('.spin-cog-wrap').on('mouseover', function(){
            let itemParent = $(this).parent().parent();

            if(!$(itemParent).hasClass('active')){

                $(this).addClass('spin');
                $(itemParent).addClass('opaque');
                if(!$('.lrg-cog').hasClass('active')){
                    $('.lrg-cog').addClass('spin-lrg');
                }
            }

            moveSMcogByIndex(getCogIndex($(this)),null) ;  
        });

       // Mouseout
        $('.spin-cog-wrap').on('mouseout', function(){
            let itemParent = $(this).parent().parent();

            if(!$(itemParent).hasClass('active')){

                $(this).removeClass('spin');
                $(itemParent).removeClass('opaque');

                if(!$('.lrg-cog').hasClass('active')){
                    $('.lrg-cog').removeClass('spin-lrg');
                }
            } 
            
            moveSMcogByIndex(getCogIndex($(this)), false, true) ; 
        });

        // Click
        $(".spin-cog-wrap" ).each(function(index) {
            $(this).on("click", function(){
                deactivate(true);
               
                let itemParent = $(this).parent().parent();
                $(itemParent).addClass("active opaque");

                $('.lrg-cog').addClass("spin-lrg active");

                moveSMcogByIndex(getCogIndex($(this)), true) ; 
            });
        });

        function moveSMcogByIndex(matchedIndex, parentIsActive, isMsOut){

            $(".sm-cog").each(function(index) { 

                // get and set active on small cogs
                let isCurrentActive = false;

                if($(this).hasClass('active')){
                   return;
                }

                //current interaction, mouseover/mouseut/click
                if(index == matchedIndex){
                    if(parentIsActive){
                        $(this).addClass("spin-rev active opaque");  
                    }else{
                        $(this).addClass("spin-rev opaque");
                    }

                    if(isMsOut){
                        $(this).removeClass("spin-rev opaque");
                    }
                }else{
                   // anything else
                    $(this).removeClass("spin-rev opaque");
                }
            });
        }

        function getCogIndex(cog){
            let cogIndex = null;
            $(".spin-cog-wrap").each(function(index) {

                if(this === $(cog).get(0)){
                    cogIndex = index;
                }
            });

            return cogIndex;
        }
                 
        function deactivate(isClearAll){
            $(".spin-cog-wrap").each(function(index) {                

                if(isClearAll){
                    $(this).parent().parent().removeClass("active opaque");
                }

                $(this).removeClass('spin');
            });
        }
    }      
     

    render = () => {

        return (                     

            <div className="manifesto-container">            
            <div className="motion-wrap">
                <div className="stage">
                    <div className="manifestos">
                        <div className="manifesto-item push-r-all">
                            <div className="manifesto-copy">
                                <h4 className="color-orange">Collaboration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. </p>
                            </div>
                            <div className="spin-cog-container">                                
                                <div id="m-cog1" className="spin-cog-wrap ">
                                    <img src={require('../images/icons/cog2.png')} alt=""/>
                                </div>                                
                            </div>
                        </div>

                        <div className="manifesto-item push-r-mid">
                            <div className="manifesto-copy">
                                <h4 className="color-fire">Collaboration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. </p>
                            </div>
                            <div className="spin-cog-container">                                
                                <div id="m-cog2" className="spin-cog-wrap">
                                    <img src={require('../images/icons/cog2.png')} alt=""/>
                                </div>                                
                            </div>
                        </div>

                        <div className="manifesto-item">
                            <div className="manifesto-copy">
                                <h4 className="color-turq">Collaboration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. </p>
                            </div>
                            <div className="spin-cog-container">                                
                                <div id="m-cog3" className="spin-cog-wrap">
                                    <img src={require('../images/icons/cog2.png')} alt=""/>
                                </div>                                
                            </div>
                        </div>

                        <div className="manifesto-item push-r-mid">
                            <div className="manifesto-copy">
                                <h4 className="color-island">Collaboration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. </p>
                            </div>
                            <div className="spin-cog-container">                                
                                <div id="m-cog4" className="spin-cog-wrap">
                                    <img src={require('../images/icons/cog2.png')} alt=""/>
                                </div>                                
                            </div>
                        </div>

                        <div className="manifesto-item push-r-all">
                            <div className="manifesto-copy">
                                <h4 className="color-mauve">Collaboration</h4>
                                <p>Greater emphasis on the client's need Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sollicitudin mi, ut venenatis metus vulputate eget. </p>
                            </div>
                            <div className="spin-cog-container">                                
                                <div id="m-cog5" className="spin-cog-wrap">
                                    <img src={require('../images/icons/cog2.png')} alt=""/>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-igniter">
                        <div className="manifesto-ignit-container-sm">
                            <div className="sm-cog push-r-all">
                                <img src={require('../images/icons/cog6.png')} alt=""/>
                            </div>
                            <div className="sm-cog push-r-mid">
                                <img src={require('../images/icons/cog6.png')} alt=""/>
                            </div>
                            <div className="sm-cog">
                                <img src={require('../images/icons/cog6.png')} alt=""/>
                            </div>
                            <div className="sm-cog  push-r-mid">
                                <img src={require('../images/icons/cog6.png')} alt=""/>
                            </div>
                            <div className="sm-cog push-r-all">
                                <img src={require('../images/icons/cog6.png')} alt=""/>
                            </div>

                            <div className="linez item1">
                                <div className="box-ln box-size">
                                    <div className="box-row">
                                        <div className="box1 cog1"></div>
                                        <div className="box2 cog1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="linez item2">
                                <div className="box-ln box-size">
                                    <div className="box-row">
                                        <div className="box1 cog2"></div>
                                        <div className="box2 cog2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="linez item3">
                                <div className="box-ln box-size">
                                    <div className="box-row">
                                        <div className="box1 cog3"></div>
                                        <div className="box2 cog3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="linez item4">
                                <div className="box-ln box-size">
                                    <div className="box-row">
                                        <div className="box1 bdr-bot cog4"></div>
                                        <div className="box2 cog4"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="linez item5">
                                <div className="box-ln box-size">
                                    <div className="box-row">
                                        <div className="box1 bdr-bot cog5"></div>
                                        <div className="box2 cog5"></div>
                                    </div>
                                </div>
                            </div>      

                        </div>

                        <div className="manifesto-ignit-container-lrg">
                            <div className="lrg-cog">
                                <img src={require('../images/icons/cog1.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                
               </div> 
            </div>
        </div>
            
        );
    }
};
export default ManifestoAnimotion;

