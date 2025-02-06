'use client'
import { useState } from "react";
import React from "react";
import Link from "next/link";
import NavbarClient from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
const page = () => {
   const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
  return (
    <div>
       <NavbarClient/>
  
  <div className="max-w-[1280px] mx-auto">
    <div className="w-full h-auto flex flex-col md:flex-row  items-center justify-between md:px-16 py-8 px-6 clashDisplay">
      <div className="lg:w-[704px]">
        <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
          A brand built on the love of craftsmanship,
        </p>
        <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
          quality, and outstanding customer service
        </p>
      </div>
      <button className="bg-[#F9F9F9] h-12 md:w-40 w-full mt-10 md:mt-0 rounded-sm  hover:bg-[#2A254B] hover:text-white transition-all duration-300">
        <a href="/products">View our products</a>
      </button>
    </div>
    <div className="flex flex-col md:flex-row w-full gap-4 h-auto md:h-[558px] items-center justify-around px-4 md:py-16 py-4 ">
      <div className="bg-custom-purple md:h-[478px] w-full md:w-1/2 text-white p-8 lg:pt-[64px] md:px-[32] lg:px-[64px] mb-8 md:mb-0 bg-[#2A254B] transition-transform duration-300 ease-in-out hover:scale-95">
        <h1 className="text-xl md:text-2xl clashDisplay">
          It started with a small idea
        </h1>
        <p className="mt-6 satoshi md:text-[18px]">
          A global brand with local beginnings, our story began in a small
          studio in South London in early 2014.
        </p>
        <button className="md:w-[170px] mt-48 w-full h-[56px] bg-[#F9F9F926] text-white font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#574552b5] my-4">
          View collection
        </button>
      </div>
      <div className="w-full md:h-[478px]  md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95">
        <img
          alt="About main"
          loading="lazy"
          width={630}
          height={478}
          decoding="async"
          data-nimg={1}
          className="xl:h-[478px] md:h-[478px] w-full "
          srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=%2Fabout%2Fabout-1.png&w=640&q=75"
         
          style={{ color: "transparent" }}
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-4">
      <img
        alt="Service"
        loading="lazy"
        width={720}
        height={603}
        decoding="async"
        data-nimg={1}
        className="lg:h-[603px] md:h-[490px] w-full md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95 hover:translate-y-1"
        srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=%2Fabout%2Fabout-2.png&w=750&q=75"
     
        style={{ color: "transparent" }}
      />
      <div className="border-2 bg-slate-200 lg:h-[603px] md:h-[490px] w-full  md:w-1/2 p-8 xl:px-20 lg:py-[74px] transition-transform duration-300 ease-in-out hover:scale-95 hover:translate-y-1">
        <h1 className="text-xl md:text-2xl text-[#2A254B] clashDisplay ">
          Our service isn‘t just personal, it‘s actually hyper-personally
          exquisite
        </h1>
        <div>
          <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>
        <button className="bg-white lg:mt-52 h-12 w-full md:w-40 rounded-sm mt-10 text-[#2A254B] hover:bg-[#2a254b] hover:text-white">
          Get in Touch
        </button>
      </div>
    </div>
    <div className="max-w-[1250px] mx-auto">
      <Features/>
   </div>
    <main className="max-w-[1280px] mx-auto bg-[#F9F9F9] h-auto xl:h-[481px] mt-10 flex justify-center items-center w-full px-4 xl:px-20">
      <div className="w-full max-w-[1273px] h-auto flex flex-col bg-[#FFFFFF] justify-center items-center p-0 md:p-12">
        <div className=" max-w-[571px] sm:w-full w-[315px] text-[#2A254B] flex flex-col gap-4 text-center">
          <p className="clashDisplay font-[400] sm:text-[36px] text-[20px] md:text-[36px] leading-tight">
            Join the club and get the benefits
          </p>
          <p className="satoshi font-[400] tracking-tight text-[14px] md:text-[16px] xxs:text-[12px]">
            Signup for our newsletter exclusive offers on new ranges, sales, pop
            up stores, and more.
          </p>
        </div>
        <div className="w-full max-w-[472px] flex flex-nowrap justify-center items-center mt-8 md:mb-0 mb-6">
          <input
            className="w-[70%] md:w-[354px] h-[48px] md:h-[56px] outline-none bg-[#F9F9F9] pl-4 md:pl-8 text-[14px]"
            placeholder="your@email.com"
            type="text"
          />
          <button className="w-[30%] md:w-[118px] h-[48px] md:h-[56px] text-[#FFFFFF] satoshi font-[400] bg-[#2A254B]">
            Sign up
          </button>
        </div>
      </div>
    </main>
  </div>
  <Footer/>
    </div>
  )
}

export default page