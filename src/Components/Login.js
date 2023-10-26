import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            console.log("hello")
            navigate('/Wrapper');
        }
    }

    return (
        <div>
            <section >
                <div className="container py-5 h-100 d-flex align-items-center justify-content-center ">
                    <form className='border p-5 rounded' onSubmit={handleSubmit}>
                        <div className="form-outline mb-4" >
                            <input
                                required
                                type="email"
                                id="form1Example13"
                                className="form-control form-control-lg"
                                placeholder='Email address'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <input
                                required
                                type="password"
                                id="form1Example23"
                                className="form-control form-control-lg"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-around align-items-center mb-4">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                <label className="form-check-label" for="form1Example3">Remember me</label>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login
