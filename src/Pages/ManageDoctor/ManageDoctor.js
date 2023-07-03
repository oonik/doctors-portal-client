import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctor = () => {
   const {data: doctors=[], isLoading} = useQuery({
    queryKey: ['doctors'],
    queryFn: async()=>{
        try{
           const res = await fetch('http://localhost:5000/doctors', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
           });
           const data = await res.json()
           return data;
        }
        catch(error){

        }
    }
   });
   if(isLoading){
    return <Loading></Loading>
   }
    return (
        <div>
            <h1>Manage Doctors {doctors?.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        doctors.map((doctor, i) => <tr 
        key={doctor._id}
        value={doctor}
        >
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          )
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageDoctor;