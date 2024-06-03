import React, { useContext  } from 'react';

import { Navigate ,useLocation } from 'react-router-dom';
import { AuthContext } from '../cotexts/AuthProvider';

const PrivateRoute = ({children} ) => {
const location = useLocation()
// console.log(location.pathname)
    const {  user, loading, setloading } =useContext(AuthContext )

if( loading ){
    return <span className="loading loading-spinner loading-lg"></span>
}

if ( user ){
    return children
    // setloading(false)
}


      return  <Navigate state={location.pathname} to='/login' > </Navigate>

};

export default PrivateRoute;