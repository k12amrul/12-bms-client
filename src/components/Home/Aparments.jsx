import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import { useLoaderData } from 'react-router-dom';

const Aparments = () => {

    const [apartments, setApartments] = useState()
    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData()
    // console.log(count)


    const numberOfPage = Math.ceil(count / itemPerPage)
    // console.log(numberOfPage)

    // 
    const pages = [...Array(numberOfPage).keys()]
    // console.log(pages)

    const handlePagination = (e) => {
        // e.preventDefault
        const val = parseInt(e.target.value)
        setItemPerPage(val)
        setCurrentPage(0)
        // console.log(itemPerPage)


    }
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const axiosPublic = useAxiosPublic()
    // const { data: apartments = [], } = useQuery({
    //     queryKey: ['apartments', 'itemPerPage', 'currentPage'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/apartments?page=${currentPage}&size=${itemPerPage}`)
    //         return res.data
    //     }

    // })

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/apartments?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setApartments(data)

            })

    }, [currentPage, itemPerPage])



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

            <div className="pagination">
                <p>currentPage :   {currentPage} </p>

                <button onClick={handlePrev} className=' btn'> prev </button>
                {
                    pages?.map(page => <button

                        onClick={() => setCurrentPage(page + 1)}
                        className='btn '
                        key={page}
                    > {page} </button>)
                }
                <button onClick={handleNext} className=' btn'> next  </button>
                <select  value={itemPerPage} onChange={handlePagination} name="" id="">
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="7">7</option>

                </select>
            </div>
        </div>

    );
};

export default Aparments;