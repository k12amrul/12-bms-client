import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
// import Home  from "../components/Home/Home"
import Home1 from "../components/Home/Home1";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
               loader: ()=> fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/apartments`) ,
                element:  <Home1></Home1>,
            },
           

        ]

    },
    {
        path : 'dashboard' ,
        element: <Dashboard></Dashboard> ,
        children :[

            {
                path: 'adminHome',
                element: <h1 > dashboard 2</h1>
            },
            // {
            //     path: 'adminHome',
            //     element: <AdminHome></AdminHome>
            // },

            // {
            //     path: 'userHome',
            //     element: <UserHome></UserHome>
            // },
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