import React, { useEffect, useState } from 'react';

const Wpb = () => {
    const [wpbs, setWpbs] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/wpb')
    .then(res=>res.json())
    .then(data=>setWpbs(data))
  },[])
    return (
        <div className='mt-28'>
            <div className='grid grid-cols-3'>
                {
                    wpbs.map(wpb=><div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <p className='text-[49px]'>

                   <i className={wpb.img}></i>
                        </p>
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">{wpb.name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      
                    </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default Wpb;