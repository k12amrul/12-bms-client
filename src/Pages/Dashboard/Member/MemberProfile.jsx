import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../hooks/useAuth';
// import useRole from '../../../hooks/useRole';

const MemberProfile = () => {
  const { user, loading } = useAuth();
  const userEmail = user?.email
  // console.log(user)
  const axiosPublic = useAxiosPublic()

  const [role] = useRole()
  const { name, image, email, _id, role: userRole } = role || []

  // console.log(role)

  const { data: agreements = [], refetch } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosPublic.get('/agreements')
      return res.data
    }

  })

  const agreementData = agreements?.filter(agreement => agreement?.email == userEmail && agreement?.status == 'checked')

  const { apartment_image ,block_name ,floor_no ,rent ,apartment_no   }=agreementData || {}
  console.log()
  return (
    <div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={image} />
            </div>
          </div>

        </figure>
        <div className="card-body items-center text-center">
          <h4 className="card-title  bg-purple-400 px-6 py-2 rounded-full ">{userRole} </h4>
          <h2 className="card-title">{name} </h2>
          <h2 className="card-title">{email} </h2>

        </div>
      </div>
      

      agreements {agreementData?.length}

      <div className="card-body card w-96 ">
                            <h2 className="card-title">

                                {name}
                            </h2>
                            <h3>{email} </h3>
                            <div className='card-actions justify-between'>
                                <h5> Floor no : {floor_no} </h5>
                                <h5> Block name : {block_name} </h5>

                            </div>
                            <div className='card-actions justify-between'>
                                <h5> Room no : {apartment_no
                                } </h5>
                                <h5> Rent : {rent} </h5>

                            </div>

                            <div className="card-actions justify-between">
                                <div className="">
                                    <button onClick={() => (_id)} className=' btn bg-green-200' > Accept</button>
                                </div>
                                {/* <div className="">

                                    <button onClick={() => handleRejectAgreement(agreement?._id, agreement?.email)} className=' btn bg-red-200' > Reject </button>

                                </div> */}
                            </div>
                        </div>

    </div>
  );
};

export default MemberProfile;