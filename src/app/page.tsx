"use client";
 
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsPage from "./products/page";
import Products from "@/components/Products";
import Sign from "@/components/Sign";
import New from "@/components/New";
import React from "react";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
 

  return (

<div>
  <main>
  <Navbar/>
       <Hero/>
       <Features/>
        <ProductsPage/>
       <Products/> 
        <Sign/> 
  <New/>

  <Footer/>

  </main>
 
</div>
 )
  
}