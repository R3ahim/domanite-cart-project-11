import React from "react";
import {useState,useEffect} from 'react'
import { useQuery } from "react-query";
import TbodyOrder from "./TbodyOrder";


const MyOrders = ()=>{
    const {data:orders,isLoading ,refetch} = useQuery('myOrders',()=> fetch('http://localhost:5000/order')
    .then(res=>res.json())
    )
  if(isLoading){
    return <h1 className="text-2xl font-bold text-red-600 text-center mt-10">loading...</h1>
  }

 
    return(
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
  
      {orders.map(order =><TbodyOrder order={order} refetch={refetch}></TbodyOrder>
)}
      
    </tbody>
  </table>
</div>
        </div>
    )
}

export default MyOrders