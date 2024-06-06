import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import ele from '../assets/images/torus-knot.png'
import Wele from '../assets/images/white-knot.png'
import expImg from '../assets/images/exp-img.png'


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="hero-sec">
                    <h1>Building the future of online presence  Pioneering immersive </h1>
                    <h3><span className='text-clr'>digital experiences</span>  strategic growth </h3>
                </div>
                <section >
                    <div className="our-vesion">
                        <div className="container">
                            <center>
                                <div className="center-title">Our Vesion</div>
                            </center>

                            <div className="our-vision-content">
                                <h2>digital experiences  strategic growth </h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  </p>

                                <div className="read-more text-clr fs-4">Read more <FaArrowRightLong className='arrow-rot' /></div>
                            </div>
                            <div className="vison-ele ele">
                                <img src={ele} alt="tronskot" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="experince-sec">
                        <div className="exp-content">
                            <div className="exp-text">
                                <h2>digital experiences  strategic growth </h2>
                                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                            <div className="exp-img">
                                <img src={expImg} alt="exp-img" className='img-fluid' />
                            </div>
                        </div>
                        <div className="exp-ele ele">
                                <img src={Wele} alt="tronskot" className='img-fluid' />
                            </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home