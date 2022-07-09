import React from "react";
import {useState,useEffect} from 'react'
import { useQuery } from "react-query";
import TbodyOrder from "./TbodyOrder";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from "../Shared/Loading";


const MyOrders = ()=>{
  const [users] = useAuthState(auth)
  // console.log(users.email)
    const {data:orders,isLoading ,refetch} = useQuery('myOrders',()=> fetch('http://localhost:5000/order')
    .then(res=>res.json())
    )
  if(isLoading){
    return <Loading></Loading>
  }
  const FilterOrdering = orders.filter(order=>order?.email == users?.email)
  

 
    return(
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Pay Now</th>
        <th>Cancle Order</th>
      </tr>
    </thead>
    <tbody>
  
      {FilterOrdering.map(order =><TbodyOrder order={order} refetch={refetch}></TbodyOrder>
)}
      
    </tbody>
  </table>
</div>
        </div>
    )
}

export default MyOrders