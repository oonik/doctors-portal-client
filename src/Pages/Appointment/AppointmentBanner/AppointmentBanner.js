import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='lg:p-10' 
        style={{
            background: `url(${bg})`

        }}
        >
            <div className="hero">
                <div className="hero-content flex-col justify-center lg:flex-row-reverse">
                    <img src={chair} alt='' className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-full lg:ml-20'>
                        <DayPicker
                          mode='single'
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;