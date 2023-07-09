import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    return (
        
            <div className="card text-neutral-content shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} available</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button 
                        disabled={slots.length === 0} 
                        className="btn btn-secondary text-white" 
                        onClick={()=>{
                            window.booking_modal?.showModal()
                            setTreatment(appointmentOption)
                        }}
                        >Booking appointment</button>
                    </div>
                </div>
            </div>
        
    );
};

export default AppointmentOption;