
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Announcements = () => {

    const axiosPublic =useAxiosPublic()
    const makeAnnouncement =(e ) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const des = form.des.value

        const data = { 
            title,
            des
        
        }
        axiosPublic.post( '/announcement' ,data)
        .then(res => {
            if (res.data.insertedId) {
              console.log('announcement added to the database')

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'announcement created successfully.',
                showConfirmButton: false,
                timer: 1500
              });
            //   navigate('/');
            }
          })
          .catch(error => console.log(error))


        // console.log(  form  , data     )
    }
    return (

        <div className='max-w-[1150px] mx-auto '   >
        <h1>  Make announcement: </h1>
        <form onSubmit={makeAnnouncement} className=' mt-10 bg-green-200' action="">
            <div className=' grid 
            
            md:grid-cols-1 '>


                <div className='form-control px-2'>
                    <label className="label">
                        <span className="label-text">Title
 </span>
                    </label>
                    <input name='title' type="text" placeholder="Enter title" className="input input-bordered input-secondary w-full  max-w-xs " />
                    <br />
                </div>
                <div className='form-control px-2'>
                    <label className="label">
                        <span className="label-text"> Description </span>
                    </label>
                    <textarea  name='des' placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    <br />
                </div>
          
            </div>
            <div className='flex justify-center  items-center  '>

                <input className='btn btn-block max-w-96 ' type="submit" name="" id="" />
            </div>



        </form>

    </div>

//  <div className='max-w-[1150px] mx-auto '   >
//            <h1>  Make announcement: </h1>       
//             <form  onSubmit={makeAnnouncement}> 
//             <input name='title'  type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//             <input name='des' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//             <input type="submit" />
//             </form>
//         </div> 



    );
};

export default Announcements;