"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Sou desenvolvedora
                {""} </span>
                <br></br>
                <TypeAnimation sequence={[
    'Web', 1000,
    'Fullstack', 1000,
    'Junior', 1000,
    '', 1000
]} 
wrapper="span"
speed={50}

repeat={Infinity}
/>
      
                </h1>
             <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing 
             elit. Mollitia optio velit earum officia quia vero quod incidunt quis. 
             Officiis, consequatur! Perspiciatis hic sed fugiat id asperiores
              saepe quis pariatur assumenda?</p>
              <div>
                <button className="px-1 w-full sm:w-fit py-1 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">Me contrate</button>
                <button className="px-1 w-full sm:w-fit py-1 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3" >
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 "> Download CV</span>  </button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"> 
           <Image src="/images/hero-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={300}
            />
            </div>
            </div>
            </div>
        </section>
    )
};


export default HeroSection;