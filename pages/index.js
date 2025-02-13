'use client'

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-black via-black to-pink-900 min-h-screen overflow-y-auto flex-col justify-center items-center">
        
        <Analytics />

        {/* MOBILE: Heading and Site Logo */}
      <div className="bg-[url('/BG.gif')] bg-cover bg-center w-full h-full p-8 md:hidden flex justify-center items-center">
        <div>
            <h1 className="text-4xl pt-24 font-sans text-white font-bold text-center">
            Happy Valentines Day! 
            </h1>
            <div className="mt-5 pb-7">
              <div className="flex justify-center items-center w-full">
              <a href="https://www.instagram.com/dalitso_b/" className="cursor-pointer mt-2 p-4 font-sans px-4 py-2 bg-transperant text-white hover:bg-gradient-to-b 
                from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700
                rounded-3xl text-lg border border-white animate-pulse-button">
                From Me
              </a>
              </div>
            </div> 
          </div>  
        </div>

        {/* PC: Heading and Site Logo */}
        <div className="pb-10 hidden md:block bg-cover bg-center w-full h-full bg-[url('/BG.gif')]">
          <div className="pt-24">
            <h1 className="text-4xl font-sans text-white font-bold text-center">
            Happy Valentines Day! 
            </h1>
          </div>

          <div className="pb-1 mt-3 justify-center items-center">
            <div className="flex justify-center items-center w-full">
            <a href="https://www.instagram.com/dalitso_b/" className="cursor-pointer mt-2 p-4 font-sans px-4 py-2 bg-transperant text-white hover:bg-gradient-to-b 
              from-emerald-900 to-gray-900 focus:outline-emerald-900 focus:ring-2 focus:ring-green-700
              rounded-3xl text-lg border border-white animate-pulse-button">
              From Me
            </a>
            </div> 
          </div> 
        </div>
      </div>
  );
}
