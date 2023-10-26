import React from 'react'

function ContactUs() {
    return (
        <div className='d-flex justify-content-center' >
            <form role="form" className="p-3 p-md-4 mt-5 border rounded w-75" >
                <div className="row my-2">
                    <div className="col-xl-6 form-group ">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                    </div>
                    <div className="col-xl-6 form-group ">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                    </div>
                </div>
                <div className="form-group my-2">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                </div>
                <div className="form-group my-2">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                </div>
                <div className="text-center"><button className='btn btn-danger mt-4' type="submit">Send Message</button></div>
            </form>
        </div>
    )
}

export default ContactUs
