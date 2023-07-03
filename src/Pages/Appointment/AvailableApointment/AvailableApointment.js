import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';

const AvailableApointment = ({ selectedDate }) => {
    const [treatMent, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions', date], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
       
    }
    
     
    return (
        <section className='mt-20'>
            <p className='text-center text-secondary'>Available Services on {date}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatMent &&
                <BookingModal
                    treatMent={treatMent}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableApointment;