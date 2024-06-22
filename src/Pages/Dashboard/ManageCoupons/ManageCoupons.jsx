import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';


const ManageCoupons = () => {

  const axiosPublic = useAxiosPublic()
  const coupons = useLoaderData()

  console.log(coupons, '12')


  const manageCoupons = (e) => {
    e.preventDefault()
    const form = e.target
    const discount = form.discount.value;
    const code = form.code.value
    const des = form.des.value

    const data = {
      discount,
      des,
      code

    }
    console.log(data)
    axiosPublic.post('/coupon', data)
      .then(res => {
        if (res.data.insertedId) {
          console.log('announcement added to the database')

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: ' coupon code created successfully.',
            showConfirmButton: false,
            timer: 1500
          });
          //   navigate('/');
        }
      })
      .catch(error => console.log(error))


  }


  // const updateCoupons =( )=>{

  // }

  const updateCoupons = (id, e) => {
    console.log(id)
    e.preventDefault()
    const form = e.target
    const discount = form.discount.value;
    const code = form.code.value
    const des = form.des.value

    const data = {
      discount,
      des,
      code

    }
    console.log(data)
    axiosPublic.put(`/coupon/${id}`, data)
      .then(res => {
        if (res.data.insertedId) {
          console.log('announcement added to the database')

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: ' coupon code created successfully.',
            showConfirmButton: false,
            timer: 1500
          });
          //   navigate('/');
        }
      })
      .catch(error => console.log(error))


  }


  return (
    <div>
      <h2> Manage Coupons  </h2>

      <div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>add coupon </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={manageCoupons} className=' mt-10 bg-green-200' action="">
              <div className=' grid 
            
            md:grid-cols-1  '>
                <div className='form-control px-2'>
                  <label className="label">
                    <span className="label-text"> discount percentage,
                    </span>
                  </label>
                  <input name='discount' type="number" placeholder="Enter  discount percentage," className="input input-bordered input-secondary w-full  max-w-xs " />
                  <br />
                </div>


                <div className='form-control px-2'>
                  <label className="label">
                    <span className="label-text">coupon
                      description
                    </span>
                  </label>
                  <input name='des' type="text" placeholder="Enter coupon
description" className="input input-bordered input-secondary w-full  max-w-xs " />
                  <br />
                </div>
                <div className='form-control px-2'>
                  <label className="label">
                    <span className="label-text">coupon
                      code
                    </span>
                  </label>
                  <input name='code' type="text" placeholder="Enter coupon code" className="input input-bordered input-secondary w-full  max-w-xs " />
                  <br />
                </div>

              </div>
              <div className='flex justify-center  items-center  '>

                <input className='btn btn-block max-w-96 ' type="submit" name="" id="" />
              </div>



            </form>


            <div className="modal-action">

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}


                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>


      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>no</th>
              <th>coupon code</th>
              <th> discount percentage </th>
              <th>coupon description</th>
              <th> update  coupon </th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              coupons?.map((coupon, ix) => <tr>
                <th>{ix + 1} </th>
                <td> {coupon.code} </td>
                <td> {coupon.discount}% </td>
                <td> {coupon.des} </td>
                <td> <button onClick={() => updateCoupons(coupon?._id)} className='btn ' > update </button> </td>

              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupons;