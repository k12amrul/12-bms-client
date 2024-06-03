import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home1 = () => {
    const data = useLoaderData( )
    console.log( data)
    return (
        <div>
            ffff
        </div>
    );
};

export default Home1;