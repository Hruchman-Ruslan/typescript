import React, { useState, useImperativeHandle, forwardRef } from "react";
import type { ForwardedRef } from "react";

type SendPaymentType = {
  method: string;
  headers: { [x: string]: string };
  body: string;
};

async function sendPayment(paymentData: {
  cardNumber: string;
  cardHolderName: string;
}): Promise<SendPaymentType> {
  const response = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentData),
  };

  return Promise.resolve(response);
}

type Props = {};

export type PaymentFormHandleRef = {
  submit: () => Promise<SendPaymentType>;
};

export function PaymentForm(_: Props, ref: ForwardedRef<PaymentFormHandleRef>) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolderName(event.target.value);
  };

  useImperativeHandle(ref, () => ({
    submit: () => {
      return sendPayment({ cardNumber, cardHolderName });
    },
  }));

  return (
    <form>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Card Number"
      />
      <input
        type="text"
        value={cardHolderName}
        onChange={handleCardHolderNameChange}
        placeholder="Cardholder Name"
      />
    </form>
  );
}

export const ForwardedPaymentForm = forwardRef<PaymentFormHandleRef, Props>(
  PaymentForm
);
