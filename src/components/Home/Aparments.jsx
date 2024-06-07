import React, { useEffect } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const Aparments = () => {

    const axiosPublic = useAxiosPublic()
    const { data: apartments = [], refetch } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartments')
            return res.data
        }

    })



    return (

        <div>

       
<div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold my-10"> Our Apartments </h1>
          </div>
          </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 '>
            {
                apartments?.map((apartment, ix) => <Card

                    apartment={apartment}
                    key={ix}
                >


                </Card>)

            }
        </div>
        </div>

    );
};

export default Aparments;