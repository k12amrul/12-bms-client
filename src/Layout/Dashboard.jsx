import React, { useContext } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';
import { AuthContext } from '../cotexts/AuthProvider';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    // const { user, loading } =useContext( AuthContext)
    const { user, loading } = useAuth();
    // console.log(user)

    const [role] = useRole()


    console.log(role)

    // const isAdmin = false
    return (
        <div className='max-w-[90%] mx-auto  ' >



            <div className="flex  "   >
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-gray-300">
                    <ul className="menu p-4">

                        

                        {
                            role?.role === 'admin' &&
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageUsers">
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/agreementRequests">
                                        Agreement Requests
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageCoupons">
                                        Manage Coupons
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/announcement">
                                        Announcement
                                    </NavLink>
                                </li>

                            </>
                        }

                        {
                            role?.role === 'member' && <li>
                                <NavLink to="/dashboard/memberProfile">

                                    Member Profile</NavLink>
                            </li>

                        }
                        {
                            role?.role === 'user' && <>

                                <li>
                                    <NavLink to="/dashboard/userProfile">

                                        User Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/announcements">

                                        Announcements</NavLink>
                                </li>

                            </>
                        }

                        {/* 
                        {
                            role?.role === 'admin' ?

                                <>
                                    <li>
                                        <NavLink to="/dashboard/adminHome">
                                            <FaHome></FaHome>
                                            Admin Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageUsers">
                                            Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/agreementRequests">
                                            Agreement Requests
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageCoupons">
                                            Manage Coupons
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/announcement">
                                            Announcement
                                        </NavLink>
                                    </li>

                                </>
                                :
                                <>

                                <li>
                                        <NavLink to="/dashboard/memberProfile">
                                            
                                        Member Profile</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/userProfile">
                                            
                                            User Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/announcements">
                                           
                                            Announcements</NavLink>
                                    </li>



                                </>




                        } */}
                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
