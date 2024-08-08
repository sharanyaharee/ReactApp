import React from 'react'
import ReactDOM from 'react-dom'
import { LOGO_URL } from '../utilities/constants'

const Header =()=>{
return(
    <div className="header">
        <div className='left-header'>
   
            <div className='logo-container'>
                <img className='logo' alt="food-logo" src={LOGO_URL}/>
            </div>
            

        </div>
        <div className='right-header'>
            <ul className='list'>
                <li className='list-items'>Home</li>
                <li className='list-items'>About</li>
                <li className='list-items'>Contact</li>
                <li className='list-items'>Cart</li>
                <li className='list-items'>Login</li>
            </ul>

        </div>

    </div>
)
}

export default Header