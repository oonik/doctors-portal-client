import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
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
        </div>
    );
};

export default Appointment;