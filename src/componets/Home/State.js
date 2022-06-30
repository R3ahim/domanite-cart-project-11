import React from 'react';

const State = () => {
    return (
        <div className="xl:px-16 px-6 pt-16 xl:mx-auto xl:container">
        <h1 className="xl:text-5xl font-bold md:text-4xl text-2xl  leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 10 Years We Provide Cars <br className="md:block hidden" />
          around the world
        </h1>
        <div className='relative mt-9 items-center justify-center sm:flex'>
        <img src="https://i.ibb.co/WD30X0v/map.png"
         alt="world map img"
         className='w-ful xl:h-full h-96 object-cover  sm:block hidden' 
         />
         <img src="https://i.ibb.co/tD48GQt/map-bg.png"
          alt="mobile img" 
          className='sm:hidden -mt-10 block w-full h-96 object-cover absolute z-0'
          />

           <div className="shadow-lg p-4 sm:w-auto w-full bg-sky-500 sm:absolute relative rounded text-white  md:mt-14 sm:mt-10 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p className="text-3xl font-semibold ">250+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 ">
            Recently Sold 
          </p>
        </div>
        <div className='shadow-lg xl:p-4 md:w-48 sm:w-full sm:absolute relative  left-14 bg-secondary rounded text-white'>
          <p className='text-3xl font-semibold  '>777+</p>
          <p>Our Custommer</p>
        </div>
        <div className='shadow-lg xl:p-4 md:w-48  sm:w-full sm:absolute relative  left-96 top-4 bg-stone-700 rounded text-white'>
          <p className='text-3xl font-semibold '>330+</p>
          <p>Recently Car Listed</p>
        </div>
        </div>
        </div>
    );
};

export default State;