import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
        console.log(errors)
    }
    return (
        <section className='h-[800px] flex justify-center items-center py-10'>
            <div className='w-96 p-7 shadow-xl'>
                <h3 className='text-xl text-center'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })} 
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", { required: "Password Address is required", minLength: {value:8, message: "password must 8 characters or longer"}, maxLength: 16 })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget password</span></label>
                    </div>
                    <input type="submit" className="btn btn-primary w-full" />
                </form>

                <p className='text-center mt-2'>New to Doctors Portal? <Link to='/signup'><small className='text-secondary'>Create new account</small></Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <input type="submit" value="CONTINUE WITH GOOGLE" className="btn btn-outline btn-primary w-full" />
            </div>
        </section>
    );
};

export default Login;