import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Footer from '../../../Shared/Footer/Footer';
import AvailableApointment from '../AvailableApointment/AvailableApointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableApointment
             selectedDate={selectedDate}
            ></AvailableApointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;