import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../hooks/useCars";

const Inventory=()=>{
    const [cars] = useCars();

  const navigate = useNavigate()
  const handleNavigate =id=>{
 
         navigate(`/inventory/${id}`)
  }
  return(
    <div>
        <div className=' grid md:grid-cols-3 sm: sm:grid-cols-1 gap-2 mt-10'>
          
       
    {
        cars.map(car=>
      
            <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={car.img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{car.name}</h2>
          <h3 className='text-xl'>Price: $<span className='font-bold text-green-500'>{car.price}</span></h3>
          <h3 className='text-xl'>abailable car: <span className='font-bold text-green-500'>{car.abailable}</span></h3>
          <h3 className='text-[17px] text-slate-600'>supplier Name: <span className='font-bold text-green-500'>{car.supplierName}</span></h3>
          <p>{car.descriptoin}</p>
          <div class="card-actions justify-center">
            <button class="btn  btn-wide bg-green-600" onClick={()=>handleNavigate(car._id)}>Buy Now </button>
          </div>
        </div>
      </div>
)
    }
    

   </div>
    </div>
)}

export default Inventory;