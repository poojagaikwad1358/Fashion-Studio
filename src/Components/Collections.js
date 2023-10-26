import React, { useState } from 'react';
import img1 from '../Assets/c1.jpg';
import img2 from '../Assets/c2.jpg';
import img3 from '../Assets/c3.jpg';
import img4 from '../Assets/c4.jpg';
import img5 from '../Assets/c5.jpg';
import img6 from '../Assets/c6.jpg';
import img7 from '../Assets/c7.jpg';
import img8 from '../Assets/c8.jpg';
import img9 from '../Assets/c9.jpg';
import img10 from '../Assets/c10.jpg';
import img11 from '../Assets/c11.jpg';
import img12 from '../Assets/c12.jpg';
import img13 from '../Assets/c13.jpg';
import '../App.css'
function Collections() {
    const imageArray = [
        {
            id: 1,
            src: img1,
            alt: 'Image 1',
        },
        {
            id: 2,
            src: img2,
            alt: 'Image 2',
        },
        {
            id: 3,
            src: img3,
            alt: 'Image 3',
        },
        {
            id: 4,
            src: img4,
            alt: 'Image 4',
        },
        {
            id: 5,
            src: img5,
            alt: 'Image 5',
        },
        {
            id: 6,
            src: img6,
            alt: 'Image 6',
        },
        {
            id: 7,
            src: img7,
            alt: 'Image 7',
        },
        {
            id: 8,
            src: img8,
            alt: 'Image 8',
        },
        {
            id: 9,
            src: img9,
            alt: 'Image 9',
        },
        {
            id: 10,
            src: img10,
            alt: 'Image 10',
        },
        {
            id: 11,
            src: img11,
            alt: 'Image 11',
        },
        {
            id: 12,
            src: img12,
            alt: 'Image 12',
        },
        {
            id: 13,
            src: img13,
            alt: 'Image 13',
        },
        {
            id: 14,
            src: img8,
            alt: 'Image 14',
        },
        {
            id: 15,
            src: img11,
            alt: 'Image 15',
        },
    ];

    const imagesPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = imageArray.slice(startIndex, endIndex);
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mt-5 w-100">
            <h1 className="text-center fw-bold text-danger mb-4" style={{fontFamily:"Sedgwick Ave Display" }}>Our Collections</h1>
            <div className="row" >
                {currentImages.map((image) => (
                    <div key={image.id} className="col-3 d-flex justify-content-center">
                        <img
                            className="img-thumbnail "
                            src={image.src}
                            alt={image.alt}
                            style={{ maxHeight: '300px'}}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <nav aria-label="Page navigation">
                    <ul className="pagination d-flex justify-content-center ">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                aria-label="Previous"
                                onClick={() => goToPage(currentPage - 1)}
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        {Array.from({ length: Math.ceil(imageArray.length / imagesPerPage) }, (_, index) => (
                            <li
                                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                key={index + 1}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => goToPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === Math.ceil(imageArray.length / imagesPerPage) ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                aria-label="Next"
                                onClick={() => goToPage(currentPage + 1)}
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Collections;
