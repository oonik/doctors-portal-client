import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider()

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {loginUser, forgetPassword, loginUserByEmail} = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError("");
        loginUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(err =>{
            console.error(err);
            setLoginError(err.message)
        })
    };

    const handlePasswordReset = (data) =>{
        setLoginError('')
        forgetPassword(data.email)
        .then(()=>{
            
        })
        .catch(error =>{
            console.log(error);
            setLoginError(error.message)
        })
    };

    const handleEmailLogin = () =>{
       loginUserByEmail(provider)
       .then(result =>{
        const user = result.user;
        console.log(user)
        navigate(from, {replace:true})
       })
       .catch(error =>{
        console.log(error)
       })
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
                    </div>
                    <input type="submit" value="LOGIN" className="btn btn-primary w-full mt-5" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <label className="label text-center"><button onClick={handlePasswordReset} className="btn btn-link lg:ml-16">Forget password</button></label>
                <p className='text-center mt-2'>New to Doctors Portal? <Link to='/signup'><small className='text-secondary'>Create new account</small></Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <input onClick={handleEmailLogin} type="submit" value="CONTINUE WITH GOOGLE" className="btn btn-outline btn-primary w-full" />
            </div>
        </section>
    );
};

export default Login;