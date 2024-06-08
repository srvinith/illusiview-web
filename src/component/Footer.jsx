import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={logo} alt="logo" className='img-fluid foot-logo' />
                            </div>
                            <div className="col-6 col-md-4">
                                <ul className='foot-ul'>
                                    <h2>Quick Links</h2>
                                    <li>What we do</li>
                                    <li>Who we are</li>
                                    <li>Insights</li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-4">
                                <ul className='foot-ul'>
                                    <h2>About</h2>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>FAQ</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="social">
                            <h2>Follow us on</h2>
                            <div className="social-link">
                                <FaFacebookSquare />
                                <FaInstagramSquare />
                                <FaYoutube />
                                <FaWhatsapp />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <center><p className='footer-bottom'>© 2023 ILLUSIVIEW IMMERSIVE SOLUTIONS (OPC) PRIVATE LIMITED. All rights reserved.</p></center>

            </div>
        </footer>
    )
}

export default Footer