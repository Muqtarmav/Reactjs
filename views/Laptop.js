import React from 'react'
import Case from '../components/laptop/Case';
import Keyboard from '../components/laptop/Keyboard';
import Screen from '../components/laptop/Screen';
import "../laptop.css"
const Laptop = () =>{
    return (
        
        <div className = "laptop">
            <Screen/>
            <Keyboard/>
            <Case/>
        </div>
    )
}

export default Laptop;