import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
const Features = () => {
  return (
    
    <div className="max-w-[1250px] mx-auto">
    <div className="bg-white w-full xl:h-[355px] md:h-[450px]  h-[757px] flex flex-col md:mt-12 md:px-10 px-5 xl:p-0">
      <h2 className="md:text-2xl text-[20px] text-start font-bold mb-6 md:text-center text-[#2A254B] clashDisplay mt-10 ">
        What makes our brand different
      </h2>
      <div className="w-full mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 items-center">
        <div className="flex items-start flex-col xl:w-[260px] h-[160px]  gap-[16px] clashDisplay font-[400] w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 640 512"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
            </svg>
          </div>
          <h3 className=" md:text-xl text-[16px] font-semibold">
            Next day as standard
          </h3>
          <p className="text-[14px] md:text-[16px] leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px] gap-[16px] clashDisplay font-[400]  w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Made by true artisans
          </h3>
          <p className="text-[16px] leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px]  gap-[16px] clashDisplay font-[400]  w-full transition-transform duration-300 ease-in-out hover:scale-95 ">
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Unbeatable prices
          </h3>
          <p className="text-[16px] leading-6">
            For our materials and quality you won’t find better prices
            anywhere.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px] h-[160px] gap-[16px] clashDisplay font-[400] w-full   transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 256 256"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z"></path>
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Recycled packaging
          </h3>
          <p className="text-[16px] leading-6">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>
  </div>
   
  )
}

export default Features