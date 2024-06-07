import React, { useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </div>
                        <div className="center-nav">
                            <div class="hamburger">
                                <input class="checkbox" type="checkbox" checked={isChecked}
                                    onChange={handleCheckboxChange} />
                                <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                                    <path
                                        class="lineTop line"
                                        stroke-linecap="round"
                                        stroke-width="4"
                                        stroke="white"
                                        d="M6 11L44 11"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-width="4"
                                        stroke="white"
                                        d="M6 24H43"
                                        class="lineMid line"
                                    ></path>
                                    <path
                                        stroke-linecap="round"
                                        stroke-width="4"
                                        stroke="white"
                                        d="M6 37H43"
                                        class="lineBottom line"
                                    ></path>
                                </svg>
                            </div>
                            {isChecked &&
                                <ul className='mob-ul'>
                                <li><Link className='nav-links'>What we do</Link></li>
                                <li><Link className='nav-links'>Who we are</Link></li>
                                <li><Link className='nav-links'>Insights</Link></li>
                            </ul>
                            }
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