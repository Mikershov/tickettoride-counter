import React from "react";
import Color from "./Color";

function ColorSelection({colors, colorHandler}) {

    return(
        <div className="color-selection">
            <h1>Выберите цвета в игре</h1>
            <div className="color-selection-colors">
                {colors.map(color => <Color color={color} showCheck={color.active} key={color.id} clickHandler={colorHandler} />)}
            </div>
        </div>
    )
}

export default ColorSelection;