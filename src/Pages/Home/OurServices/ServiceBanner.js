import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceBanner = () => {
    AOS.init()
    return (
        <section data-aos="zoom-out" data-aos-duration="4000" className='mt-16'>
            <div className="hero">
                <div className="hero-content flex-col  lg:flex-row">
                    <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <PhotoView src={treatment}>
                        <img src={treatment} style={{ objectFit: 'cover' }} alt='' className="w-full lg:w-1/2  rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;