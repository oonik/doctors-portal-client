import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const img = data.img[0];
        console.log(img)
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url,formData,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            const doctorInfo = {
                 name: data.name,
                 email : data.email,
                 specialty: data.specialty
            };
            fetch('http://localhost:5000/doctors', {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctorInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`${data.name} added successfully`)
                navigate('/dashboard/managedoctor')
            })
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7 '>
            <h1 className='text-2xl'>Add a new doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name", { required: "Name is required", minLength: 4 })}
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                    {...register("specialty", {required: "specialty is required"})}
                     className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                                >
                                {specialty.name}
                            </option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="file"
                        {...register("img", { required: "photo is required", minLength: 4 })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}
                </div>
                <input type="submit" value="Add Doctor" className='btn btn-primary w-full mt-4' />

            </form>
        </div>
    );
};

export default AddDoctor;