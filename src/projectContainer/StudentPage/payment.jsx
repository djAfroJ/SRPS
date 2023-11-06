import React from "react";
import "./Student";
import "../HomeContainer/Home";
import Navbar from "../../components/Navbar";

import { usePaystackPayment } from "react-paystack";

<div className="Top">
  <Navbar />
</div>;
const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 50000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_c28f4a4201e01d4b0c1b7e8bf886599d2b8b4f1f",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div className="btn-pay">
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Click to Pay
      </button>
    </div>
  );
};

function payment() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <PaystackHookExample />
    </div>
  );
}

export default payment;
