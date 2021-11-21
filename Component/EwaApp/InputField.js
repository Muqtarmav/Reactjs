import React from 'react'

const InputField = (props) => {
    let {label, fieldType, placeholder} = props

    return (
        <div className="input_field">
            <label>
                {label}
            </label>
            <input type={fieldType} className="register_input"
                       placeholder={placeholder}/>
        </div>
    );
};

export default InputField;