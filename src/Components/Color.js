import React from "react";

function Color({color, showCheck, clickHandler}) {
    //const showCheckClass = showCheck?'':'hide';

    return(
        <div className="color-block" style={{backgroundColor:color.color}} data-colorid={color.id} onClick={(e) => clickHandler(color.id, e)}>
            {showCheck?<div className="color-block-check">&#10003;</div>:''}
        </div>
    )
}

export default Color;