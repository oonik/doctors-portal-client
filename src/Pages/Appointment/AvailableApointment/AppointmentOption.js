import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots, _id } = appointmentOption;
    return (
        
            <div className="card text-neutral-content shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} available</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white">Book Appointment</button>
                        <button className="btn" onClick={()=>window.booking_modal.showModal()}>open modal</button>
                    </div>
                </div>
            </div>
        
    );
};

export default AppointmentOption;