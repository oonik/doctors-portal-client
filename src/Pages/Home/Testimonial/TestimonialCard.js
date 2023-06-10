import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {name, img, comment, lives} = testimonial;
    return (
        <section>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <p>{comment}</p>
                    <div className="card-actions justify-end items-center mt-5">
                       <img src={img} alt="" className='border-4 border-secondary rounded-full'/>
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