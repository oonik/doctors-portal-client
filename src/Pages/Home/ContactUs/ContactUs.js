import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
    AOS.init()
    return (
        <section className='mt-36 py-16'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div 
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            className="hero">
                <div className="card flex-shrink-0 w-full max-w-lg">
                    <h4 className='text-center lg:text-2xl font-semibold text-secondary'>contact us </h4>
                    <h3 className='text-center text-2xl lg:text-3xl mt-2.5'>Stay connected with us</h3>
                    <div className="card-body mt-10">
                        <div className="form-control">
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-5">
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full mt-5" ></textarea>
                        </div>
                        <div className="form-control mt-9 flex items-center">
                            <button className="btn btn-primary w-28">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;