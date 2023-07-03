import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialCard = ({testimonial}) => {
    AOS.init()
    const {name, img, comment, lives} = testimonial;
    return (
        <section>
            <div 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <p>{comment}</p>
                    <div className="card-actions justify-end items-center mt-5">
                       <img src={img} alt="" className='w-20 border-4 border-secondary rounded-full'/>
                       <div>
                          <h4 className='font-semibold'>{name}</h4>
                          <p>{lives}</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCard;