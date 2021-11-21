import React from 'react';

const Input = (props) => {
    let {field} = props
        return (
            <div className = "input_container input">
                <p/>{field.label}<p/>
                <input placeholder = {field.placeholder} />
                           </div>
        )
}


export default Input