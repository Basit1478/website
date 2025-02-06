import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  cart: any[];
  totalPrice: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cart, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message || "Something went wrong.");
      setIsProcessing(false);
      return;
    }

    // Call the backend to create the payment intent and confirm the payment
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_method: paymentMethod.id,
        amount: totalPrice * 100, // Amount in cents
      }),
    });

    const session = await response.json();

    const { error: stripeError } = await stripe.confirmCardPayment(
      session.client_secret,
      {
        payment_method: paymentMethod.id,
      }
    );

    if (stripeError) {
      setErrorMessage(stripeError.message || "Payment failed.");
    } else {
      alert("Payment successful!");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-2 border border-gray-300 rounded-md" />
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <button
        type="submit"
        className={`w-full py-3 bg-blue-600 text-white rounded-md ${
          isProcessing ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
