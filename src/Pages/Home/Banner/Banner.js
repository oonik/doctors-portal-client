import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Banner = () => {
    return (

        <div className='lg:relative'>
            <div className="hero">
                <img className='bg-image w-full h-full' src={bg} alt="" />
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
                    <img src={banner} alt='' className=" rounded-lg shadow-2xl lg:w-1/2" />
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:absolute bottom-0'>
                <div className='flex bg-gradient-to-r from-primary to-secondary p-8 rounded-lg'>
                    <FaClock className='text-6xl '></FaClock>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p>Open 9.00 am to 10.00 pm everyday</p>
                    </div>
                </div>
                <div className='flex bg-accent p-8 rounded-lg'>
                    <FaMapMarkerAlt className='text-6xl'></FaMapMarkerAlt>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Visit our location</h4>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className='flex bg-gradient-to-r from-primary to-secondary p-8 rounded-lg'>
                    <FaPhone className='text-6xl'></FaPhone>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Contact us now</h4>
                        <p>+00 12345355</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;