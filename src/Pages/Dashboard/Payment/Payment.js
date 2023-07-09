import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);

const Payment = () => {
    const booking = useLoaderData();
    const {appointmentDate, treatment,  slot, price} = booking;
    const navigation = useNavigation();
    if(navigation === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <p className='text-xl'>Please pay <strong className='text-red-400'>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-10 border p-10 bg-slate-700 rounded'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;