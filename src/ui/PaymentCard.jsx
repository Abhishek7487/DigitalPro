import { useState } from "react";
import { StyledPaymentCard } from "../styles/Styles";

function PaymentCard() {
  return (
    <StyledPaymentCard>
      <div>
        <input type="radio" name="payment" />
        <label>Debit/Credit Card</label>
        <img src="/public/card.svg" alt="card" />
      </div>
      <div>
        <input type="radio" name="payment" />
        <label>UPI</label>
        <img src="/public/upi.png" alt="upi" />
      </div>
      <div>
        <input type="radio" name="payment" />
        <label>Paypal </label>
        <img src="/public/pp.png" alt="cod" />
      </div>
    </StyledPaymentCard>
  );
}

export default PaymentCard;
