import React from 'react'
import "./register.css"
import img from "../../../../assets/background2.svg"
import Button from '../../reusables/Button'
import imgb from "../../../../assets/background3.svg"
import Input from '../../reusables/input'

export const Register = (props) => {

    let {setState} = props 

        const inputFields = [

      { label : "firstName", placeholder: "enter your firstName"},
     { label : "LastName", placeholder: "enter your lastName"},
     { label : "email", placeholder: "enter your email"},
     { label : "password", placeholder: "enter your password"},

    ]


    return (
        <div className = "register_container">,
        <div className = "register-header">
            <div className = "ewa_ologo">

            </div>
            <button onClick = {() => setState("login")}>
                LOGIN
            </button>
         </div> 
         <img className = "top_circle" src = {img} alt = "circlebackground" />  
        


    {/* <div className = "text_container">
    <h3>welcome to ewa app</h3>
    <p>get access to amazing ewa deals 
    from the comfort of your home
    </p>

    </div> */}

<div className = "form_container" >
{inputFields.map((field, index) => <Input key = {index} field = {field}/> )}


</div>


<Button name = "Register" />


<img className="bottom_circle" src = {imgb} alt = "circlebackground" />
 
 </div>




    )
}

export default Register

