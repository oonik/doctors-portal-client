import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='lg:mx-20'>
            <Banner></Banner>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;