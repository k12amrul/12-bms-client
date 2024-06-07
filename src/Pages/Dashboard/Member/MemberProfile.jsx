import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
// import useAuth from '../../../hooks/useAuth';
// import useRole from '../../../hooks/useRole';

const MemberProfile = () => {
    const { user, loading } = useAuth();
    // console.log(user)

    const [role] = useRole()
const { name ,image ,email ,_id , role:userRole  } =role 

    console.log(role)
    
    return (
        <div>
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={image } />
  </div>
</div>

  </figure>
  <div className="card-body items-center text-center">
    <h4 className="card-title  bg-purple-400 px-6 py-2 rounded-full ">{userRole} </h4>
    <h2 className="card-title">{name} </h2>
    <h2 className="card-title">{email} </h2>
    <p></p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MemberProfile;