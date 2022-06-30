import React, { useEffect, useState } from 'react';

const Onlyfor = () => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl mt-9 font-bold text-center mb-14'>Only For You</h1>
       
       <div className=' grid md:grid-cols-3 sm: sm:grid-cols-1 gap-2'>
        {
            cars.map(car=><div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={car.img} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">{car.name}</h2>
              <h3 className='text-xl'>Price: $<span className='font-bold text-green-500'>{car.price}</span></h3>
              <h3 className='text-xl'>abailable car: <span className='font-bold text-green-500'>{car.abailable}</span></h3>
              <h3 className='text-[17px] text-slate-600'>supplier Name: <span className='font-bold text-green-500'>{car.supplierName}</span></h3>
              <p>{car.descriptoin}</p>
              <div class="card-actions justify-center">
                <button class="btn  btn-wide bg-green-600">Shwo now</button>
              </div>
            </div>
          </div>)
        }
        

       </div>
        </div>
    );
};

export default Onlyfor;