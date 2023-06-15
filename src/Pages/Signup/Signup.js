import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignup = data => {
           console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center py-10'>
            <div className='w-96 p-7 shadow-xl'>
                <h3 className='text-xl text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
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
                            {...register("password", { required: "Password is required", minLength: { value: 8, message: "password must be 8 characters longer" } })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password</span>
                        </label>
                    </div>
                    <input type="submit" value="SIGN UP" className='btn btn-primary w-full' />
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