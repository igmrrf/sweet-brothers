import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  console.log(price);
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HDmCdDXFdSLUUcdOlxCDX6xW3LKz77WtornGCRsUvr7MrqZnZgx0LRqScE8pdBYZ73c6UWOpVhAFOpGjvw3OOLG00HZ23pqmt";
  const onToken = (token) => {
    console.log(token);
    alert("Payment sent to the backend");
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
