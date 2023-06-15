import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatMent, setTreatment, selectedDate }) => {
    const { name, slots } = treatMent;  // treatment is appointment options

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
            phone
        }

        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <dialog id="booking_modal" className="modal">

                <form onSubmit={handleBooking} method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-white mb-8">{name}</h3>
                    <input name='date' type="text" placeholder="Type here" disabled defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full text-white mb-4" />
                    <select name='slot' className="select select-bordered w-full text-white mb-4">

                        {
                            slots?.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                        }
                    </select>
                    <input name='name' type="text" placeholder="Your name" className="input text-white input-bordered w-full mb-4" />
                    <input name='email' type="email" placeholder="Email address" className="input text-white input-bordered w-full mb-4" />
                    <input name='phone' type="number" placeholder="Phone number" className="input text-white input-bordered w-full mb-8" />
                    <input type="submit" value="submit" className='btn btn-secondary w-full' />
                </form>

            </dialog>
        </>
    );
};

export default BookingModal;