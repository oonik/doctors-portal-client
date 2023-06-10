import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='lg:mx-20'>
            <Banner></Banner>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;