 import React from 'react';
// import InputField from "../components/beansApp/InputField";
// import Button from "../components/beansApp/Button";
// import Background from "../components/beansApp/Background";
import InputField from '../Component/EwaApp/InputField';
import Button from '../Component/EwaApp/Button';
import Background from '../Component/EwaApp/Background';
import '../css/register_login.css'

const RegistrationPage = () => {
    return (
        <div className="container">
            <div className="registration_page_container">
                <Background/>
                <div className="intro_container">
                    <div className="intro_text">
                        <h3>Welcome To Ewa</h3>
                        <p>Where your cravings for beans are satisfied</p>
                    </div>
                </div>

                <InputField label="Username" fieldType="text" placeholder="Enter your username"/>
                <InputField label="Password" fieldType="password" placeholder="Enter your Password"/>

                <Button className="login_btn" buttonName="Login"/>

            </div>
        </div>
    );
};

export default RegistrationPage;