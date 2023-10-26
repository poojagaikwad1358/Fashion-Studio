import React from 'react';
import img2 from '../Assets/carouselImg2.jpg';
import img3 from '../Assets/carouselImg3.jpg';
import img4 from '../Assets/carouselImg4.jpg';

function Slider() {
    const data = [
        {
            id: 1,
            title: 'Image 1',
            src: img2,
            alt: 'Image 1',
        },
        {
            id: 2,
            title: 'Image 2',
            src: img3,
            alt: 'Image 2',
        },
        {
            id: 3,
            title: 'Image 3',
            src: img4,
            alt: 'Image 3',
        },
    ];

    return (
        <div id="carouselExample" className="carousel slide mb-5">
            <div className="carousel-inner">
                {data.map((val, index) => (
                    <div
                        key={val.id}
                        className={`carousel-item ${index === 1 ? 'active' : ''}`} 
                    >
                        <img src={val.src} className="d-block w-100" alt={val.alt} style={{ height: "300px" }} />
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
