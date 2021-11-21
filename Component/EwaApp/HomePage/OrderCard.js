import React from "react";

const OrderCard = (props) => {
    
    let {containerName, iconClassName, icon, containerGibberish, orderCardHeader} = props

    return (


        
        <div className = {containerName}>
        <div className = {iconClassName} > 
        {icon}
        </div>
        <div className = {containerGibberish}>
            <h3>
                {orderCardHeader}
            </h3>

            <p> 
            
                    Lorem ipsum dolor sit amet,<br/>
                    adipiscing elit, sed do eiusmod<br/>
                    incididunt ut labore et dolore.
            </p>
        </div>
        
        </div>
    


    );
};


export default OrderCard;