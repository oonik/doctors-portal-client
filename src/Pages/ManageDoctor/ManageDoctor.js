import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = ()=>{
     setDeletingDoctor(null)
  }

  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json()
        return data;
      }
      catch (error) {

      }
    }
  });

  const handleDeleteItem = id => {
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch();
          toast.success('delete successfully')
        }
        
      })
    
  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='mt-10 lg:ml-5'>
      <h1 className='text-3xl text-center'>Manage Doctors {doctors?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                  {doctor.name}

                </td>
                <td>{doctor.email}</td>
                <td>
                  {doctor.specialty}

                </td>
                <th>
                  <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-error btn-xs">Delete</label>
                </th>
              </tr>
              )
            }
          </tbody>

        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
         title={`Are you sure you want to delete`}
         message={`If you delete ${deletingDoctor.name}. It cannot be undone`}
         successButtonName={`Delete`}
         successAction={()=>handleDeleteItem(deletingDoctor._id)}
         closeModal={closeModal}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctor;