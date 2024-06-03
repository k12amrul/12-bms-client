import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import useAuth from '../hooks/useAuth';
import { FaHome } from 'react-icons/fa';
// import { AuthContext } from '../cotexts/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useAuth()
    //   const { user, logOut } = useContext(AuthContext)

    // console.log(user?.displayName, user?.photoURL)
    const handleLogOUt = () => {
        logOut()
            .then(() => console.log('Successfully LogOUt'))
            .catch(() => console.log('error in LogOUt'))
    }

    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV0vdfGCjIlcD0LdVuAP3yeB0GMNp0cVJAPZm-HbTohNttxwDszvCCkajLQ&s'

    const navLinks = <>
        <li><NavLink to='/home' >Home</NavLink> </li>
        <li><NavLink to='/aparment' >Aparment</NavLink> </li>
        {/* <li><NavLink to='/allArtCraft' > All-Art-Craft</NavLink> </li>
    <li><NavLink to='/addCraftItem' > Add-Craft-Item</NavLink> </li> */}


        {/* <li><NavLink to={`/myArtCraft/${user?.email}`} > My-Art-Craft-List </NavLink> </li> */}
        <li><NavLink to='/dashboard/cart'  > <button className="btn">
            Inbox
            <div className="badge badge-secondary">+99</div>
        </button>
        </NavLink> </li>

        <li><NavLink to='/about' > about  
         </NavLink> </li>
        <li><NavLink to='/register' > Register</NavLink> </li>
        <li><NavLink to='/login' >Login</NavLink> </li>
        {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
        {
            user &&
            <>
                <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
                <li><NavLink to='/profile' >   Profile </NavLink> </li>
            </>

        }
        {/* <li><NavLink to='/about' >About</NavLink> </li> */}

    </>
    return (
        <div className=' mb-20' >


            <div className="navbar bg-base-200   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }


                        </ul>
                    </div>
                    <div className='flex justify-center items-center '>
                        <img className='w-9 h-9' src="data:image/jpeg;base64,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" alt="" />
                        <h3 className=" text-xl"> Real-Home</h3>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        {
                            user &&

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>{user?.displayName} </li>
                                <li>
                                    <button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button>
                                </li>
                                <li>
                                <NavLink to='/dashboard'  > Dashboard </NavLink>
                                </li>
                                {/* <li><button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button></li> */}
                            </ul>

                        }
                    </div>

                </div>
            </div>

            {/* ---------------------- */}
            {/*         
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}
            {/* ---------------------- */}

        </div>

    );
};

export default Navbar;