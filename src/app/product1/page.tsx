'use client'
import { useState,useEffect } from "react";
import React from "react";
import client from "../../../sanityClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image } from "sanity";
const Page = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [products, setProducts] = useState<Product[]>([]);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const fetchProducts = async () => {
        const productsData = await client.fetch(`*[_type == "product"]{_id, name, price, "imageUrl": image.asset->url}`);
        setProducts(productsData);
      };
      fetchProducts();
    }, []);



interface Product {
  _id: string
  name: string
  price: number
  imageUrl: string;
}


  return (
    <div>
  <div>
<Navbar/>
     {/* Menu Content */}
        
    <main>
      <img
        alt="frame"
        loading="lazy"
        width={1480}
        height={209}
        decoding="async"
        data-nimg={1}
        className="hidden md:block"
        srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=%2Fproducts%2Fframe.png&w=3840&q=75"
      
        style={{ color: "transparent" }}
      />
     
      <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center bg-white p-4 border-b">
        <ul className="text-[16px]  flex-wrap md:flex-nowrap w-full md:w-[557px] h-12 justify-around items-center gap-4 hidden md:flex cursor-pointer">
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span>Category</span>
              <div className="relative">
                <select
                  name="category"
                  id="category"
                  className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="/Products">All Products</option>
                  <option value="/tableware">Tableware</option>
                  <option value="/decoration-items">Decoration Items</option>
                  <option value="/tables">Tables</option>
                  <option value="/chairs">Chairs</option>
                  <option value="/cutlery">Cutlery</option>
                </select>
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="flex items-center gap-1">
              Price{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
          <li className="items-center gap-1 cursor-pointer hidden md:flex">
            <span className="items-center gap-1 hidden lg:flex">
              Brand{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
        </ul>
        <span className="flex items-center gap-2 text-sm font-medium md:hidden">
          <span>Category</span>
          <div className="relative">
            <select
              name="category"
              id="category"
              className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="allProducts">All Products</option>
              <option value="tableware">Tableware</option>
              <option value="decoration-items">Decoration Items</option>
              <option value="tables">Tables</option>
              <option value="chairs">Chairs</option>
              <option value="cutlery">Cutlery</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </span>
        <ul className="w-full md:w-[237px] text-[16px] h-12 justify-between md:justify-around items-center mt-4 md:mt-0 hidden md:flex">
          <li className="flex items-center">Sorting by:</li>
          <li className="w-[154px] flex items-center justify-center gap-1 cursor-pointer">
            <span className="flex items-center gap-1">
              Date added{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </main>
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl self-start font-semibold my-5">All Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product._id} className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt={product.name}
              loading="lazy"
              width={300}
              height={370}
              decoding="async"
              className="md:w-auto md:h-[375px] h-auto object-cover"
              src={product.imageUrl}
              style={{ color: "transparent" }}
            />
            <div>
              <p className="sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">{product.name}</p>
              <p className=" sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">£{product.price}</p>
          
            </div>
          </div>
        ))}
      </div>
    
      
        <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6  tracking-wider hover:bg-[#4a393978] mt-4">
        <a href="/products">
          View Collections
          </a>
        </button>
     
    </div>
  </div>
 <Footer/>
    </div>
  );
};

export default Page;
