'use client'
import { useState } from "react";

const CheckoutPage = () => {
  // Sample cart items
  const [cart] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 35,
      quantity: 1,
    },
  ]);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted", formData);
    alert("Order Submitted! Thank you for your purchase.");
  };

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

      {/* Cart summary */}
      <div className="w-full max-w-lg bg-white shadow-lg p-6 rounded-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between font-bold">
          <span>Total Price:</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {/* Checkout form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg p-6 rounded-md"
      >
        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md mt-4"
        >
            <a href="/ordersuccess">
          Submit Order
          </a>
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
