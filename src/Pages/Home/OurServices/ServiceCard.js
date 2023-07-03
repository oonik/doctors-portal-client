import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({service}) => {
    const {name, img, description} = service;
    AOS.init()
    return (
        <div data-aos="zoom-in" className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default ServiceCard;