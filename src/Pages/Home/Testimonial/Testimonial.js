import React from 'react';
import pepole1 from '../../../assets/images/people1.png';
import pepole2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole1,
            name: 'Winson Herry',
            lives: 'California'
        },
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole2,
            name: 'Winson Herry',
            lives: 'California'
        },
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Winson Herry',
            lives: 'California'
        }
    ]
    return (
        <div className='mt-32'>
            <div className='flex justify-between'>
            <div className='ml-8'>
            <h3 className='font-bold text-primary text-2xl'>Testimonial</h3>
            <h2 className='text-4xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img src={quote} alt="" className='w-32' />
            </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 mt-20'>
                {
                    testimonials.map(testimonial => <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;