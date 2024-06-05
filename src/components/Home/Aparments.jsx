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
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 '>
            {
                apartments?.map((apartment, ix) => <Card

                    apartment={apartment}
                    key={ix}
                >


                </Card>)

            }
        </div>
    );
};

export default Aparments;