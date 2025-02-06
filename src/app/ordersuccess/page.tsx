import Link from "next/link";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md text-center">
        <h1 className="text-3xl font-bold text-green-600">Order Placed Successfully!</h1>
        <p className="text-gray-700 mt-4">Thank you for your purchase. Your order has been confirmed.</p>
        
        <div className="mt-6">
          <Link href="/products">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
