import React from 'react'
import Input from '../../reusables/input'
import "./Login.css"
import img from "../../../../assets/background.svg"
 //import InputField from '../../../../Component/EwaApp/InputField'
import Button from '../../reusables/Button'
import imgb from "../../../../assets/background3.svg"

 const Login = (props) => {

    let{setState} = props

    const inputFields = [

        

      { label : "email", placeholder: "enter your email"},
     { label : "password", placeholder: "enter your password"},
    
    ]

    return (
        <div className = "login_container">
            <div className = "login_header">
                <div className = "ewa_logo">

                </div>

                <button onClick ={() => setState("register")}>
                    REGISTER    
                </button>

        </div>

        <img className = "top_circle" src = {img} alt = "circlebackground" />

        <div className = "text_container">
            <h3>welcome to ewa app</h3>
            <p>get access to amazing ewa deals 
                from the comfort of your home
            </p>

        </div>

        <div className = "form_container" >
            {inputFields.map((field, index) => <Input key = {index} field = {field}/> )}

            
        </div>
    

        <Button name = "login"/>

        <img className="bottom_circle" src = {imgb} alt = "circlebackground" />
 
        </div>
    );


};

export default Login;