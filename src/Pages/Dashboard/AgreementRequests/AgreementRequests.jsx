import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AgreementRequests = () => {

    const agreements = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const [a, sa] = useState()

    
            const filterAgreements = agreements?.filter(agreement =>   agreement?.status !== "checked"     )
        //    sa( filterAgreements )
            // console.log( filterAgreements ,'11111' , )
        


    const handleAcceptAgreement = async (id, email) => {
        console.log(id, email)
        const status = { status: 'checked' }
        const role = { role: "member", email }


        try {
            const [patchResponse1, patchResponse2] = await Promise.all([
                axiosPublic.patch(`/user/update`, role),
                axiosPublic.patch(`/agreement/update/${id}`, status),
            ]);

            console.log(patchResponse1)
            console.log(patchResponse2)
            setResponse1(patchResponse1.data);
            setResponse2(patchResponse2.data);
        } catch (err) {
            console.log(err.message
            )
            // setError(err.message);
        }
    };



    // axiosPublic.patch(`/agreement/update/${id}`, status)
    //     .then(res => {
    //         console.log(res.data)
    //         // navigate(location.state ? location.state : '/')

    //     })
    //     .catch((err) => console.log(err, 'cccc'))


    // // const role = { role: "user" }
    // axiosPublic.patch(`/user/update/${id}`, role)
    //     .then(res => {
    //         console.log(res.data)
    //         // navigate(location.state ? location.state : '/')

    //     })


    //     .catch((err) => console.log(err, 'cccc'))





    const handleRejectAgreement = (id, email) => {
        console.log(id)
        const status = { status: 'checked' }
        const role = { role: "user", email }
        axiosPublic.patch(`/user/update`, role)
            .then(res => {
                console.log(res.data)
                // navigate(location.state ? location.state : '/')

            })
            .catch((err) => console.log(err, 'cccc'))
        axiosPublic.patch(`/agreement/update/${id}`, status)
            .then(res => {
                console.log(res.data)
                // navigate(location.state ? location.state : '/')

            })
            .catch((err) => console.log(err, 'cccc'))


    }
    // 

    // console.log( agreements)
    // const axiosPublic = useAxiosPublic()
    // const { user }= useAuth()
    return (
        <div className=' grid grid-cols-1  md:grid-cols-3 gap-4' >


            {
                filterAgreements?.map((agreement, i) =>
                    <div className="card  bg-base-100 shadow-xl">
                        {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body">
                            <h2 className="card-title">

                                {agreement?.name}
                            </h2>
                            <h3>{agreement?.email} </h3>
                            <div className='card-actions justify-between'>
                                <h5> Floor no : {agreement?.floor_no} </h5>
                                <h5> Block name : {agreement?.block_name} </h5>

                            </div>
                            <div className='card-actions justify-between'>
                                <h5> Room no : {agreement?.apartment_no
                                } </h5>
                                <h5> Rent : {agreement?.rent} </h5>

                            </div>

                            <div className="card-actions justify-between">
                                <div className="">
                                    <button onClick={() => handleAcceptAgreement(agreement?._id, agreement?.email)} className=' btn bg-green-200' > Accept</button>
                                </div>
                                <div className="">

                                    <button onClick={() => handleRejectAgreement(agreement?._id, agreement?.email)} className=' btn bg-red-200' > Reject </button>

                                </div>
                            </div>
                        </div>
                    </div>


                )
            }

        </div>
    );
};

export default AgreementRequests;