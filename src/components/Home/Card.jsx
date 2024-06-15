import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import PrivateRoute from '../../Router/PrivateRoute';
import toast from 'react-hot-toast';

const Card = ({ apartment }) => {

  const { user } = useAuth()

  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()






  // console.log( apartment )
  const { _id, apartment_image, floor_no, block_name, apartment_no, rent, } = apartment


  // {
  //     "apartment_image": "https://example.com/image17.jpg",
  //     "floor_no": 9,
  //     "block_name": "D",
  //     "apartment_no": 901,
  //     "rent": 2600,
  //     "agreement_link": "https://example.com/agreement17"
  // }

  const handleAgreement = async (id) => {

    console.log(user, 'test')
    if (!user?.email) {
    
  
      Swal.fire({
        title: ' pls login . something wrong  ! ',
        text: 'error',
        icon: 'error',
        confirmButtonText: 'Cool'

      });
      return    navigate('/login')


    }
    console.log(id)
    const agreementInfo = {
      apartment_image,
      floor_no,
      block_name,
      apartment_no,
      rent,
      status: "pending",
      Agreement_request_date : new Date(),
      email: user?.email,
      name: user?.displayName
    }

    axiosPublic.post('/agreements', agreementInfo)
      .then(res => {
        console.log(res.data)
        if (res.data.acknowledged)
          Swal.fire({
            title: 'successful ',
            text: 'successfully',
            icon: 'success',
            confirmButtonText: 'Cool'

          });
        else {
          Swal.fire({
            title: 'something wrong ! ',
            text: 'error',
            icon: 'error',
            confirmButtonText: 'Cool'

          });
        }
        navigate('/')
        // navigate(location.state ? location.state : '/')

      })




      .catch((err) => console.log(err))

    // const { data: apartments = [], refetch } = useMutation({
    //     queryKey: ['agreements'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.post('/agreements')
    //         return res.data
    //     }

    // })


  }


  return (

    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img className=' w-52  h-60 py-6 pl-6' src={apartment_image} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">rent :  ${rent }   </h2>
        {/* <h2 className="card-title">status : {status}  </h2> */}


        <div>
          <h3> floor no : {floor_no}  </h3>
          <h3> block name : {block_name}  </h3>
          <h3> apartment no : {apartment_no}  </h3>
        </div>
        <div className="card-actions justify-end">
          {

          }

          <button onClick={() => handleAgreement(_id)} className="btn btn-secondary">Agreement</button>

          {/* <PrivateRoute>
   </PrivateRoute> */}

        </div>
      </div>
    </div>
  );
};

export default Card;