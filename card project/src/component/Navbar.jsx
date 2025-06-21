import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                {/* <ul>
                    <li className='Link'>Home</li>
                    <li className='Link'>About</li>
                    <li className='Link'>Contact</li>
                    <li className='Link'>Skill</li>
                </ul> */}
                <Link to='/home' className='Link'>Home</Link>
                <Link to='/about' className='Link'>About</Link>
                <Link to='/contact' className='Link'>Contact</Link>
                <Link to='/skill' className='Link'>Skill</Link>
                <Link to='/login' className='Link'>Login</Link>
                <Link to='/signup' className='Link'>Signup</Link>
                <Link to='/counter' className='Link'>Counter</Link>
                <Link to='/hooks' className='Link'>Hooks</Link>
            </nav>
        </div>
    )
}

export default Navbar