import react from 'react'
import {CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js";

const CheckoutForm = ()=>{
    const stripe = useStripe()
    const  elements = useElements()
    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return <h1>please type your number</h1>
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
    }
    return(
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        
        <button className='btn btn-success mt-4 btn-sm' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    )
}

export default CheckoutForm;