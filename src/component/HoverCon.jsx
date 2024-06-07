import React, { useRef } from 'react'


const HoverCon = ({ number, title, image }) => {

    const imageRef = useRef(null);

    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { offsetLeft, offsetTop, clientWidth, clientHeight } = currentTarget;
        const x = ((clientX - offsetLeft) / clientWidth) * 2 - 1;
        const y = ((clientY - offsetTop) / clientHeight) * 2 - 1;

        imageRef.current.style.transform = `translate(${x * 2}px, ${y * 10}px)`;
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transform = 'translate(0, 0)';
    };

    return (
        <>
            <div className="hov-con">
                <div className="text-hov">
                    <div className="text-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <h4 className='num-hov'>{number}</h4>
                        <h2 className='text-list-hov'>{title}</h2>
                    </div>
                    <img src={image} alt="show" className="img-fluid img-hov" ref={imageRef} />
                </div>
            </div>

        </>
    )
}

export default HoverCon