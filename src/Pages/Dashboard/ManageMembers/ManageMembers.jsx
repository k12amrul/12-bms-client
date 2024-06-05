import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';

const ManageMembers = () => {


    const axiosPublic = useAxiosPublic()
    const { user }= useAuth()
    const users = useLoaderData()

    const handleUser =  (id) => {
const  role = {role : "user" }
         axiosPublic.patch(`/user/update/${user?.email}` , role)
         .then( res => {
            console.log( res.data )
            // navigate(location.state ? location.state : '/')
  
          })
  
  
        //   console.log(result)
        
        
        .catch((err) => console.log(err ,'cccc'))

        // const { data }  = useMutation( {
        //     mutationFn : ( )=> {

        //     }
            
        //     })
            
           
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                      
                        {
                            users?.map((user ,ix) =>
                                <tr>
                                    <th> { ix +1} </th>
                                    <td>{user?.name} </td>
                                    <td>{user?.email} </td>
                                    <td><button onClick={() => handleUser(user?._id)} className='btn  bg-red-300' >remove </button> </td>
                                    
                                </tr>

                            )
                        }

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageMembers;