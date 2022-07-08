import React, { useEffect, useState } from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import useCars from '../../hooks/useCars';
import { Link } from 'react-router-dom';
const Onlyfor = () => {
    const [cars] = useCars();
    const sliceCars =  cars.slice(0, 3);

 
    return (
        <div>
          <h1 className='text-5xl mt-9 font-bold text-center mb-14'>Only For You</h1>
      
       <div className=' grid md:grid-cols-3 sm: sm:grid-cols-1 gap-2'>
        {
            sliceCars.map(car=>
              <AnimationOnScroll animateIn="animate__bounceIn">
                <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={car.img} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">{car.name}</h2>
              <h3 className='text-xl'>Price: $<span className='font-bold text-green-500'>{car.price}</span></h3>
              <h3 className='text-xl'>abailable car: <span className='font-bold text-green-500'>{car.abailable}</span></h3>
              <h3 className='text-[17px] text-slate-600'>supplier Name: <span className='font-bold text-green-500'>{car.supplierName}</span></h3>
              <p>{car.descriptoin}</p>
              <div class="card-actions justify-center">
                <Link to={'/inventory/' + car._id} class="btn  btn-wide bg-green-600">Buy Now </Link>
              </div>
            </div>
          </div>
          </AnimationOnScroll>)
        }
        

       </div>
        </div>
    );
};

export default Onlyfor;