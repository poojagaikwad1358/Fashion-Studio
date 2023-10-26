import React from 'react';

function AboutUs() {
    return (
        <div className="container mt-5" id="aboutUsContent">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                    <h2 className="text-center fw-bold text-danger" style={{fontFamily:"Sedgwick Ave Display"}}>
                        <span>At Fashion Studio – We care</span>
                    </h2>
                    <h5 className="text-center">
                        <span>THE RULE OF FIVE</span>
                    </h5>
                    <div className='mt-3' style={{fontFamily:"sans-serif"}}>
                        <p>
                            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. 
                        </p>
                        <p>
                            2. Dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                            euismod non, mi.
                        </p>
                        <p>
                            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                            Suspendisse ,adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                            euismod non, mi.
                        </p>
                        <p>
                            4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                        <p>
                            5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
                            euismod non, mi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
