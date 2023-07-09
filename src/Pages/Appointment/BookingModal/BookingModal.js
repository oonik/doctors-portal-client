import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatMent, setTreatment, selectedDate, refetch }) => {
    const { name, slots, price } = treatMent;  // treatment is appointment options
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatMent.name,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        console.log(booking)
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.acknowledged){
            setTreatment(null);
            toast.success('booking confirmed');
            refetch();
           }
           else{
             toast.error(data.message)
           }
        })
    }
    return (
        <>
            <dialog id="booking_modal" className="modal">
           
                <form onSubmit={handleBooking} method="dialog" className="modal-box">
                    
                    <h3 className="font-bold text-lg text-white mb-8">{name}</h3>
                    <input name='date' type="text" placeholder="Type here" disabled defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full text-white mb-4" />
                    <select name='slot' className="select select-bordered w-full text-white mb-4">

                        {
                            slots?.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                        }
                    </select>
                    <input name='name' type="text" defaultValue={user?.name} placeholder="Your name" className="input text-white input-bordered w-full mb-4" />
                    <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email address" className="input text-white input-bordered w-full mb-4" />
                    <input name='phone' type="number" placeholder="Phone number" className="input text-white input-bordered w-full mb-8" />
                    <input type="submit" value="submit" className='btn btn-secondary w-full' />
                </form>
                <form method="dialog" >
                <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
                </form>
            </dialog>
        </>
    );
};

export default BookingModal;