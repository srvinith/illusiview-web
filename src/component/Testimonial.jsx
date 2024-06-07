import React from 'react'
import star from '../assets/images/str.png'
import emoj from '../assets/images/emoj.svg'
const Testimonial = () => {

    const profile = [
        {
            id: 1,
            name: "Annie Deway",
            desig: "Designer",
            desc: "I've tried a lot of calendar apps, but this one"
        },
        {
            id: 2,
            name: "Annie Deway",
            desig: "Designer",
            desc: "I've tried a lot of calendar apps, but this one"
        },
        {
            id: 3,
            name: "Annie Deway",
            desig: "Designer",
            desc: "I've tried a lot of calendar apps, but this one"
        },
        {
            id: 4,
            name: "Annie Deway",
            desig: "Designer",
            desc: "I've tried a lot of calendar apps, but this one"
        },
        {
            id: 5,
            name: "Annie Deway",
            desig: "Designer",
            desc: "I've tried a lot of calendar apps, but this one"
        },

    ]

    return (
        <div className="box-testi-container">
            {profile.map((item) =>
                <div className="box-testi" key={item.id}>
                    <div className="start">
                        <img src={star} alt="star" className='img-fluid' />
                    </div>
                    <p className='tesi-con'>{item.desc}</p>

                    <div className="designation">
                        <div className="profile d-flex align-items-center">
                            <img src={emoj} alt="emoj" className=' img-fluid me-2' />
                            <p>{item.name}</p>
                        </div>
                        <p>{item.desig}</p>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Testimonial