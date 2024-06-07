import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import ele from '../assets/images/torus-knot.png'
import Wele from '../assets/images/white-knot.png'
import expImg from '../assets/images/exp-img.png'
import child1 from '../assets/images/child-1.png'
import child2 from '../assets/images/child-2.png'
import virtualImg from '../assets/images/virtual-img.png'
import cartImg1 from '../assets/images/cart-1.png'
import cartImg2 from '../assets/images/cart-2.png'
import cartImg3 from '../assets/images/cart-3.png'
import marq1 from '../assets/images/marq-1.png'
import marq2 from '../assets/images/marq-2.png'
import vr from '../assets/images/vr.png'
import show1 from '../assets/images/show-1.png'
import box from '../assets/images/box.png'

import HoverCon from './HoverCon';
import Testimonial from './Testimonial';


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
                <section>
                    <div className="who-we-sec">
                        <div className="container">
                            <center>
                                <div className="center-title who">Who ?</div>
                            </center>
                            <div className="who-content">
                                <p className='center-who-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="virtual-sec">
                        <div className="container">
                            <div className="virtual-mark-text">
                                We help you increase the quality and performance of each interaction with your users.
                                <img src={child1} alt="child" className='img-fluid child1' />
                                <img src={child2} alt="child" className='img-fluid child2' />
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="virtual-img">
                                        <img src={virtualImg} alt="virtualImg" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className='md-fs-6'>(AR) and Virtual Reality (VR) are immersive technologies that blend digital content with the real world (AR) or create entirely virtual environments (VR). These technologies are essential for kids as they offer interactive and experiential learning opportunities.</p>

                                    <div className="read-more w-bg text-clr fs-4">Read more <FaArrowRightLong className='arrow-rot' /></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="tour">
                        <marquee direction='left' speed={50} className='marquee-text'>
                            <span>VIRTUAL  REALITY ARGUMENTAL</span>
                            <span>VIRTUAL  REALITY ARGUMENTAL</span>
                            <span>VIRTUAL  REALITY ARGUMENTAL</span>
                            <span>VIRTUAL  REALITY ARGUMENTAL</span>
                        </marquee>
                        <div className="container">

                            <div className="tour-top-sec">
                                <h3>Latest   Articles</h3>
                                <div className="art-topic">
                                    <h2>Speakers worth booking</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        dolor turpis, dictum a efficitur in, aliquam eget velit.</p>
                                </div>

                            </div>
                            <div className="img-con">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={cartImg1} alt="cartImg" className='img-fluid cartimg' />
                                    </div>
                                    <div className="col-md-4">
                                        <img src={cartImg2} alt="cartImg" className='img-fluid cartimg' />
                                    </div>
                                    <div className="col-md-4">
                                        <img src={cartImg3} alt="cartImg" className='img-fluid cartimg' />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <section>
                    <div className="marquee-sec">
                        <center><h3 className='marquee-center'>They  trusted  us</h3></center>

                        <div className="marq-container my-5">
                            <marquee direction='left' >
                                <img src={marq1} alt="marq1" className='img-fluid my-4' />
                            </marquee>
                            <marquee direction='right'>
                                <img src={marq2} alt="marq2" className='img-fluid my-4' />
                            </marquee>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="emabrk-sec">
                        <h2>Embark on an experiential revolution <span className='text-clr'>with Illusiview</span></h2>
                    </div>
                </section>
                <section>
                    <div className="exp-service-sec">
                        <div className="container">
                            <center><h3 className='marquee-center my-5'>Expertise in Services</h3></center>
                            <div className="vr-img">

                                <img src={vr} alt="vr" className='img-fluid' />
                            </div>
                        </div>
                        <div className="bottom-sec">
                            <h2>We are passionate about uncovering the best
                                digital innovations for forward—thinking
                                brands looking to push boundaries and drive
                                significant impact.</h2>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="hover-sec">
                        <div className="container pb-5">
                            <div className="con-one my-5">
                                <div className='box box-start'>
                                    <HoverCon number="01" title="360-Degree Virtual Tours" image={show1} />
                                </div>
                                <div className="box box-center">
                                    <HoverCon number="02" title="Innovative Web Development" image={show1} />
                                </div>

                                <div className="box box-end">
                                    <HoverCon number="03" title="Future-Focused Digital Marketing" image={show1} />
                                </div>

                            </div>
                            <div className="con-one con-two my-5">
                                <div className='box box-start'>
                                    <HoverCon number="04" title="Immersive Experiences" image={show1} />
                                </div>
                                <div className="box box-center">
                                    <HoverCon number="05" title="Strategic Consulting for Online Success" image={show1} />
                                </div>

                                <div className="box box-end">
                                    <HoverCon number="06" title="Cutting-Edge Technology Solutions" image={show1} />
                                </div>

                            </div>
                        </div>

                        <div className="bottom-box">
                            <div className="read-more  text-clr fs-4">Explore all Services<FaArrowRightLong className='arrow-rot mx-2' /></div>
                            <img src={box} alt="box" className='img-fluid' />
                        </div>
                    </div>
                </section >

                <section>
                    <div className="testimonial-sec">
                        <div className="container">
                            <center>
                                <p className='testi-bor-text'>They already love our products </p>
                                <h2 className='testi-titl'>See what our users say about us</h2>
                            </center>
                            <Testimonial/>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="latest-articel-sec">
                        <p>lorem</p>
                    </div>
                </section>

            </div >
        </>
    )
}

export default Home