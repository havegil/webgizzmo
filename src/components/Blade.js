import React from 'react';

const Blade = props => {
    var bladeStyle  = "section-blade " + props.bladeStyle;
        return (
            <section className={bladeStyle} id={props.bladeId}>
                {props.children}
            </section>
        );
};
export default Blade;