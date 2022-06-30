import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-black ">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href='/'>  
     <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="#22c55e"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg> 
              <span className='text-white font-bold mx-3'>Dominate</span>
              </a>
         <div  className='text-white font-bold'>
        <a href="/inventory">Inventory</a> 
        <a href="/inventory" className='mx-6'>Manage Inventories</a> 
        <a href="/inventory" className='mx-6'>Add Cars</a>  
        <a href="/inventory" className='mx-6'>My cars</a>  

         </div>
  </div>
  <div class="flex-none">
   <a className='text-white font-bold mx-5'>Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;