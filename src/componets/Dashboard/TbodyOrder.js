import React from "react";
import { useQuery } from "react-query";
import {useState,useEffect} from 'react'
import { useParams,Link,useNavigate } from "react-router-dom";


const TbodyOrder = ({order,refetch})=>{
    console.log(order)
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
        const remaining =data;
        setFullOrders(remaining);
       
        console.log(remaining)
        refetch()
    })
   }
   const navigate = useNavigate()
   const handleNavigate = (id) =>{
     navigate(`/payment/${id}`)
   }


    return(
      <tr>
            <th></th>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
            <td>
            {(order.price && !order.paid) && <button className="btn btn-success btn-xs" onClick={()=>handleNavigate(order._id)}>Pay</button>}
            {(order.price && order.paid) && <li className="text-succes">paid</li>}
            </td>
            <td><button class="btn btn-error  btn-xs" onClick={()=>handleDelete(order._id)}>Cancle</button></td>
         
          </tr>

    )
}
export default TbodyOrder;