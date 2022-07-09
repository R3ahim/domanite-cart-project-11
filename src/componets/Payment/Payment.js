import { data } from "autoprefixer";
import { FacebookAuthProvider } from "firebase/auth";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';

const Payment = ()=>{
    const {payId} = useParams();

    const [payCar,setPayCar] = useState({})
    useEffect(()=>{
       const url = `http://localhost:5000/order/${payId}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setPayCar(data))
    },[])
    
    return(
        <div>
            <h1>this is id {car.name}</h1>
        </div>
    )
}

export default Payment;