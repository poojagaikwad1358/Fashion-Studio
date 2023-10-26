import React from 'react'
import { Twitter,Facebook,Instagram,Linkedin,Clock, Telephone, Geo } from 'react-bootstrap-icons';
function Footer() {
    return (

        <footer id="footer" className="footer bg-dark text-light mt-5 pt-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex p-1 justify-content-center">                        
                        <div>
                            <h4><Geo/> Address</h4>
                            <p>
                                A108 Adam Street <br />
                                Ohio, OH 535022 - US<br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex justify-content-center">                        
                        <div>
                            <h4><Telephone/> Reservations</h4>
                            <p>
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> enquiry@fstudio.com<br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex justify-content-center">
                        
                        <div>
                            <h4><Clock/> Opening Hours</h4>
                            <p>
                                <strong>Mon-Sat: 11AM</strong> - 9PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Follow Us</h4>
                        <div className="social-links d-flex justify-content-center">
                            <a href="#" className="twitter m-1"><Twitter color='white' size={25}/></a>
                            <a href="#" className="facebook m-1"><Facebook color='white' size={25}/></a>
                            <a href="#" className="instagram m-1"><Instagram color='white' size={25}/></a>
                            <a href="#" className="linkedin m-1"><Linkedin color='white' size={25}/></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container ">
                <div className="copyright border-top border-secondary text-center py-2">
                    © Copyright <strong><span>Fashion Studio</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>

    )
}

export default Footer
