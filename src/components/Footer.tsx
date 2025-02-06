import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1440px] md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
      <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  md:pl-0  md:mb-0 mb-5">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="#crockery"
                >
                  Crockery
                </a>
              </li>
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="#furniture"
                >
                  Furniture
                </a>
              </li>
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="#homeware"
                >
                  Homeware
                </a>
              </li>
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="#plant-pots"
                >
                  Plant pots
                </a>
              </li>
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="#chairs"
                >
                  Chairs
                </a>
              </li>
              <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="/listing"
                >
                 Product Listing
                </a>
              </li>
            </ul>
          </div>
         
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 satoshi text-[14px]">
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#new-arrivals"
              >
                New arrivals
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#best-sellers"
              >
                Best sellers
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#recently-viewed"
              >
                Recently viewed
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#popular-this-week"
              >
                Popular this week
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="/products"
              >
                All products
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Our company</h3>
          <ul className="space-y-2 satoshi text-[14px]">
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="/about-us"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="#vacancies"
              >
                Vacancies
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="/contact"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#privacy"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="#returns-policy"
              >
                Returns policy
              </a>
            </li>
          </ul>
        </div>
      </div>
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-3">Join our mailing list</h3>
          <div className="flex items-center  h-[56px] w-full">
            <input
              type="email"
              placeholder="your@email.com"
              className="md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4 "
            />
            <button className="text-[#2A254B] w-[30%] md:w-[118px] h-[56px]  bg-[#FFFFFF] ">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 py-5 md:pt-10 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto text-center px-5 xl:px-5 ">
        <p className="text-sm satoshi justify-self-center md:pr-5">
          © Copyright 2022 Avion LTD
        </p>
        <div className="md:flex justify-center space-x-4 text-2xl hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="hover:text-blue-700 transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="hover:text-pink-500 transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className="hover:text-[#00aff0] transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="hover:text-blue-400 transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="hover:text-red-600 transition-all duration-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12,0 C5.37225,0 0,5.37225 0,12 C0,17.0835 3.16275,21.426 7.62675,23.17425 C7.52175,22.22475 7.42725,20.76825 7.66875,19.73175 C7.88625,18.79575 9.07575,13.767 9.07575,13.767 C9.07575,13.767 8.7165,13.0485 8.7165,11.98575 C8.7165,10.317 9.684,9.07125 10.88775,9.07125 C11.9115,9.07125 12.4065,9.84 12.4065,10.76175 C12.4065,11.7915 11.751,13.3305 11.41275,14.757 C11.13,15.95175 12.01125,16.926 13.1895,16.926 C15.3225,16.926 16.962,14.67675 16.962,11.43075 C16.962,8.5575 14.89725,6.54825 11.949,6.54825 C8.535,6.54825 6.531,9.1095 6.531,11.75625 C6.531,12.7875 6.92775,13.89375 7.4235,14.4945 C7.52175,14.61375 7.536,14.71725 7.50675,14.83875 C7.416,15.21825 7.2135,16.03275 7.17375,16.2 C7.12125,16.419 6.99975,16.46625 6.7725,16.3605 C5.27325,15.66225 4.3365,13.4715 4.3365,11.71125 C4.3365,7.926 7.08675,4.44975 12.2655,4.44975 C16.428,4.44975 19.6635,7.416 19.6635,11.3805 C19.6635,15.516 17.05575,18.8445 13.43625,18.8445 C12.2205,18.8445 11.0775,18.21225 10.686,17.466 C10.686,17.466 10.0845,19.75725 9.93825,20.319 C9.6675,21.36075 8.93625,22.66725 8.4465,23.4645 C9.57,23.8125 10.76325,24 12,24 C18.62775,24 24,18.627 24,12 C24,5.37225 18.62775,0 12,0"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
