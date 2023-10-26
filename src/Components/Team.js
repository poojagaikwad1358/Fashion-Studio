import React from 'react';
import img1 from '../Assets/desinger1.jpg';
import img2 from '../Assets/designer2.jpg';
import img3 from '../Assets/designer3.jpg';

function Team() {
    const data = [
        {
            id: 1,
            img: img1,
            name: "Sabyasachi Mukherjee",
            Designation: "Chief Executive Officer"
        },
        {
            id: 2,
            img: img3,
            name: "Masaba Gupta",
            Designation: "Head Designer"

        },
        {
            
            id: 3,
            img: img2,
            name: "Manish Malhotra",
            Designation: "Managing Director"
        }
    ];

    
    return (
        <div>
            <div className="container aos-init aos-animate " data-aos="fade-up">
                <div className="section-header text-center " >
                    <h2 className='fw-bold text-danger' style={{fontFamily:"Sedgwick Ave Display"}}>Our Team</h2>
                    <p>Our <span>Professional</span> Team</p>
                </div>
                <div className="row gy-4 ">
                    {data.map((val) => (
                        <div key={val.id} className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div>
                                <div className="member-img d-flex justify-content-center " >
                                    <img src={val.img} className="img-fluid " alt="" style={{maxHeight:"300px"}}/>
                                </div>
                                <div className="member-info text-center mt-1">
                                    <h4>{val.name}</h4>
                                    <span className='fw-bold'>{val.Designation}</span>
                                    <p>Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
