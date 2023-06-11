import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableApointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOption] = useState([]);
     console.log(appointmentOptions)
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    },[])
    return (
        <section className='mt-20'>
            <p className='text-center text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                      key={appointmentOption._id}
                      appointmentOption={appointmentOption}
                    ></AppointmentOption>)
                }
            </div>
            <BookingModal></BookingModal>
        </section>
    );
};

export default AvailableApointment;