import React, { useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const InventoryInfo = ()=>{
  const [users] = useAuthState(auth)
  console.log(users)
    const {id}= useParams();
     const [car,setCar] = useState({})
     useEffect(()=>{
        const url = `http://localhost:5000/cars/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCar(data))
     },[])
    
const handleForm = event =>{
  event.preventDefault();
  const price= car.price;
  const email = users?.email;
  const phone = event.target.phoneNumber.value;
  const address = event.target.address.value;
  const name =  car.name;
  

  const data ={
    name:name,
    email:email,
    price:price,
    address:address,
    phone:phone,

  }
  fetch('http://localhost:5000/order',{
    method:'PUT',
    headers:{'content-type': 'application/json'},
    body:JSON.stringify(data)
   
  })
  .then(res=>res.json())
  .then(data=>alert(data))

  
}
const navigate = useNavigate()
const handleNavigate = (id) =>{
  navigate(`/payment/${id}`)
}
    return(
        <div>
           <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-col">
    <img src={car.img} class="lg:w-[700px] md:w-[400px] sm:w-[400px]rounded-lg shadow-2xl" />
    <div className="lg:mx-48 md:mx:auto">
      <h1 class="text-3xl font-bold">{car.name}</h1>
      <h1 class="text-2xl font-bold">price: {car.price}$</h1>
      <h3 className="text-xl">Availavle: {car.abailable}</h3>
      <h3 className="text-xl"> suplaierName: {car.supplierName}</h3>
      <p>{car.descriptoin}</p>
    </div>
  </div>
</div>
<div>
<form onSubmit={handleForm} className="text-gray-600 body-font relative">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Order Now
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="carName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Car Name
                </label>
                <input
                  type="text"
                  id="carName"
                  value={car.name}
                  disabled
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="price"
                  className="leading-7 text-sm text-gray-600"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={car.price}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="imgURL"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="imgURL"
                  name="imgUrl"
                  value={users.email}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="quantity"
                  className="leading-7 text-sm text-gray-600"
                >
               phone number
                </label>
                <input
                  type="number"
                  id="email"
                  name="phoneNumber"
                  
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="supplierName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Adress
                </label>
                <input
                  type="text"
                  id="supplierName"
                  name="address"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
         
            <div className="p-2 w-full flex mx-44">
              <input
                type="submit"
                value="Order now"
                className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
              />
              <button className="btn bg-green-500 border-0" onClick={()=>handleNavigate(car._id)} >pay now</button>
            </div>
          </div>
        </div>
      </div>
    </form>
</div>
           
        </div>
    )
}


export default InventoryInfo;