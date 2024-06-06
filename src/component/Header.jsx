import React from 'react'
import './Header.css'
import logo from '../assets/images/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </div>
                        <div className="center-nav">
                            <ul>
                                <li><Link className='nav-links'>What we do</Link></li>
                                <li><Link className='nav-links'>Who we are</Link></li>
                                <li><Link className='nav-links'>Insights</Link></li>
                            </ul>
                        </div>
                        <div className="nav-button">
                            Let’s Talk <FaArrowRightLong className='arrow' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header