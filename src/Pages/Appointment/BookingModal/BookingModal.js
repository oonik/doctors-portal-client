import React from 'react';

const BookingModal = () => {
    return (
        <>
            <dialog id="booking_modal" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="booking_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog>
        </>
    );
};

export default BookingModal;