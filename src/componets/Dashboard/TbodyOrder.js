import React from "react";
import { useQuery } from "react-query";
import {useState,useEffect} from 'react'


const TbodyOrder = ({order,refetch})=>{
   const [fullOrders,setFullOrders] = useState({})
   const handleDelete = (id)=>{
    const data = {id:id}
    const url =   `http://localhost:5000/order/${id}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(data),
      
        
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const remaining  =data;
        setFullOrders(remaining);
        refetch()
    })
   }
   console.log(fullOrders)
  
    return(
      <tr>
            <th></th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
            <td><button className="btn btn-success btn-xs">Pay</button></td>
            <td><button class="btn btn-error  btn-xs" onClick={()=>handleDelete(order._id)}>delete</button></td>
         
          </tr>

    )
}
export default TbodyOrder;