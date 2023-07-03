import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'
import appointment from '../../../../assets/images/appointment.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MakeAppointment = () => {
    AOS.init()
    return (
        <section data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="hidden md:block lg:w-1/2 rounded-lg -mt-32 -mb-4" />
                    <div>
                        <h3 className='lg:text-2xl font-bold text-secondary'>Appointment</h3>
                        <h1 className="text-2xl lg:text-4xl font-semibold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;