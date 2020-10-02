
import React from 'react';
import $ from 'jquery';

const BurgerMenuBtnComponent = () => {

    return (
        <div className='burger-wraper'>
		    <button className='burger-button'>
			    <div className='burger'>
					<img src="./images/menu.png" alt="Menu navigation"></img>
				</div>				
		    </button>
	    </div>
    );
};

export default BurgerMenuBtnComponent;