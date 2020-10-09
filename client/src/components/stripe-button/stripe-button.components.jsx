import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  console.log(price);
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HDmCdDXFdSLUUcdOlxCDX6xW3LKz77WtornGCRsUvr7MrqZnZgx0LRqScE8pdBYZ73c6UWOpVhAFOpGjvw3OOLG00HZ23pqmt";
  const onToken = (token) => {
    axios({
      url:'payment',
      method:'post',
      data:{ 
        amount:priceForStripe,
      token,
    }
    }).then(response=>{
      alert("Payment Successfull")
    }).catch(error =>{
      console.log("Payment error:", JSON.parse(error))
      alert("There was an issue with your payment. Please ensue you use the provided cedit card")
    })
  };
  return (
    <StripeCheckout
      label={"Pay Now"}
      name={"Sweet Brothers"}
      image={"https://svgshare.com/i/CUz.svg"}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
