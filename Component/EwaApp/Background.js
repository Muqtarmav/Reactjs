import React from "react";

import top_circle from "../../assets/background_circle.svg";
import bottom_circle from "../../assets/background_circle_bottom.svg";

const Background = () => {
    return (
    <div>
            <img className="top_circle" src={top_circle} alt="half_circle_background"/>
            <img className="bottom_circle" src={bottom_circle} alt="half_circle_background"/>
        
        </div>

    );
};


export default Background

