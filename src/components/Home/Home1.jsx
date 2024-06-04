import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aparments from './Aparments';

const Home1 = () => {
    // const data = useLoaderData( )
    // console.log( data)
    return (
        <div>
           <h1> banner</h1>
            <Aparments> </Aparments>
        </div>
    );
};

export default Home1;