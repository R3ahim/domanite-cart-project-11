import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { data } from "autoprefixer";
import { FacebookAuthProvider } from "firebase/auth";
import React from "react";
import { useState,useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51L4kx6SFBwBTEnoCZxxOF0ABmHlZ18L6YGO2RLzkxUVyfReUStWe8QEJr5nXt9AKHTy6SZdNEQcZB8qGAqwJ2LIo00SGJmnwiN');

const Payment = ()=>{
    const [user] = useAuthState(auth)
    const {payId} = useParams();
    const url = `http://localhost:5000/order/${payId}`
    console.log(url)
   
       const {data:payCar,isLoading} = useQuery('paid',()=>fetch(url)
       .then(res=>res.json()))
  
    if(isLoading){
        return <Loading></Loading>
    }
    
    return(
        <div>
     
            <div class="hero min-h-screen bg-base-200¬">
  <div class="hero-content flex-col ">

    <div class="text-center lg:text-left">
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Hello, <span className="text-yellow-700">{user?.displayName}</span> </h2>
    <h2 class="card-title">Pay For <span className="text-primary">{payCar.name}</span> </h2>
    <p> Your amount: <span className={'text-red-400'}>$</span><span className="font-bold">{payCar.price}</span></p>
    <div class="card-actions justify-end">
     {222022}
    </div>
  </div>
</div>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        
      <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Payment;