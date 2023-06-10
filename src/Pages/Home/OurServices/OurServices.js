import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
import ServiceBanner from './ServiceBanner';


const OurServices = () => {
    const services = [
        {
            id: 1,
            name: "Cavity Filling",
            img: cavity,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            name: "Fluoride Treatment",
            img: fluoride,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            name: "Teeth Whitening",
            img: whitening,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='text-center mt-24'>
            <h3 className='font-bold text-primary text-lg'>OUR SERVICES</h3>
            <h2 className='text-3xl mt-2'>Services We Provide</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-20 mb-10'>
            {
                services.map(service => <ServiceCard
                 key={service.id}
                 service={service}
                ></ServiceCard>)
            }
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default OurServices;