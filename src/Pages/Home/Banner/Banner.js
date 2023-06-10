import React from 'react';
import banner from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Banner = () => {
    return (

        <div className='relative'>
            <div className="hero">
                <img className='bg-image w-full' src={bg} alt="" />
                <div className="hero-content flex-col lg:flex-row-reverse px-20">
                    <img src={banner} alt='' className=" rounded-lg shadow-2xl w-1/2" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 mx-3 absolute bottom-0'>
                <div className='flex bg-gradient-to-r from-primary to-secondary p-8 rounded-lg'>
                    <FaClock className='text-5xl mt-3'></FaClock>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className='flex bg-gradient-to-r from-primary to-secondary p-8 rounded-lg'>
                    <FaMapMarkerAlt className='text-5xl mt-3'></FaMapMarkerAlt>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className='flex bg-gradient-to-r from-primary to-secondary p-8 rounded-lg'>
                    <FaPhone className='text-5xl mt-3'></FaPhone>
                    <div className='ml-3'>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;