import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const handleSignup = data => {
           console.log(data)
           setSignupError('')
           createUser(data.email, data.password)
           .then(result =>{
            const user = result.user;
            console.log(user)
            toast("Successfully sign up")
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err => console.log(err))
           })
           .catch(error =>{
            console.error(error);
            setSignupError(error.message)
           })
    }
    return (
        <div className='h-[800px] flex justify-center items-center py-10'>
            <div className='w-96 p-7 shadow-xl'>
                <h3 className='text-xl text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", { required: "Name is required", minLength:4 })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", 
                            { required: "Password is required", 
                            minLength: { value: 8, message: "password must be 8 characters longer" }, 
                            maxLength:{value:16, message:"longer 16 characters"}
                         })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value="SIGN UP" className='btn btn-primary w-full mt-4' />
                    <div>
                        {signupError && <p className='text-red-600'>{signupError}</p>}
                    </div>
                </form>
                <p className='text-center mt-2'>Already have an account? <Link to='/login'><small className='text-secondary'>Go to login</small></Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;