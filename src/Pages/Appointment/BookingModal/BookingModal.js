import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatMent, selectedDate }) => {
    const { name, slots } = treatMent;  // treatment is appointment options
    return (
        <>
            <dialog id="booking_modal" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="booking_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg text-white mb-8">{name}</h3>
                    <input type="text" placeholder="Type here" disabled defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full text-white mb-4" />
                    <select className="select select-bordered w-full text-white mb-4">
                        
                        {
                            slots?.map(slot => <option value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-4" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-8" />
                    <input type="submit" value="submit" className='btn btn-secondary w-full' />
                </form>
            </dialog>
        </>
    );
};

export default BookingModal;