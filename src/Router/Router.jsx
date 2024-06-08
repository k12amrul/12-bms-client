import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
// import Home  from "../components/Home/Home"
import Home1 from "../components/Home/Home1";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
import AgreementRequests from "../Pages/Dashboard/AgreementRequests/AgreementRequests";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/Dashboard/User/UserProfile";
import Announcements from "../Pages/Dashboard/Announcements/Announcements";
import MemberProfile from "../Pages/Dashboard/Member/MemberProfile";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons/ManageCoupons";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                // loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/apartments`),
                element: <Home1></Home1>,
            },
            {
                path: '/home',
                element: <Home1></Home1>,


            },


        ]

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            {
                path: 'adminHome',
                element: <AdminProfile> </AdminProfile>
            },
            {
                path: 'manageUsers',
                loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/users`),
                element: <PrivateRoute>

                    <ManageMembers> </ManageMembers>
                </PrivateRoute>
            },
            {
                path: 'agreementRequests',
                loader: () => fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/agreements`),
                element: <AgreementRequests> </AgreementRequests>
            },
            {
                path: 'manageCoupons',
                element: <ManageCoupons> </ManageCoupons>
            },
            {
                path: 'announcement',
                element: <Announcements></Announcements>
            },
            // {
            //     path: 'adminHome',
            //     element: <AdminHome></AdminHome>
            // },

            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            
            
            {
                path: 'memberProfile',
                element: <MemberProfile></MemberProfile>
            },
        ]
        // dashboard 
    }
    , {
        path: '/register',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login> </Login>
    },

]

)


export default router