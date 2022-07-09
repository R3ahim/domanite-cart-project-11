import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously, signOut } from 'firebase/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [users] = useAuthState(auth);
  const handleSingOut = ()=>{
    signOut(auth)
  }

    const menuItems = <>
   
    <li><Link to="/inventory" className='text-white'>Inventory</Link></li>
    <li><Link to="/dashboard" className='text-white'>Dashboard</Link></li>
    <li><Link to="/businessSummery" className='text-white'>Profile</Link></li>
    <li><Link to="/blog" className='text-white'>Blogs</Link></li>
    <li><Link to="/portfolio" className='text-white'>Portfolio</Link></li>

    </>
    
    return (
      <div class="navbar bg-black">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItems}
          </ul>
        </div>
        <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img className='w-[100px]'s src='https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.svg'></img>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Dominate
              </span>
            </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      <div class="navbar-end">
      {users?<button className='btn btn-red-100 border-0' onClick={handleSingOut} >log out</button>:<Link to={'/login'} className="text-white">Login</Link>}
      </div>
    </div>
    );
};

export default Navbar;