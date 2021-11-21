import React from "react";

const Button = (props) => {
    return (
        <div className="input_field">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <button className={props.className}>
                    {props.buttonName}
                </button>
            </a>
        </div>
    );
};


export default Button;