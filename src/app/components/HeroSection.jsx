"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-[var(--ice-white)] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--main-red)] to-[var(--hover-red)]">Sou desenvolvedora
                {""} </span>
                <br></br>
                <TypeAnimation sequence={[
    'Web', 1000,
    'Fullstack', 1000,
    'PHP', 1000,
    '', 1000
]} 
wrapper="span"
speed={50}

repeat={Infinity}
/>
      
                </h1>
             <p className=" text-[var(--secondary-gray)] text-base sm:text-lg mb-6 lg:text-xl">Aqui contém os projetos que desenvolvi ao longo dos anos em que trabalho
                na área de tecnologia com desenvolvimento de sistemas web, desktop, API etc.
             </p>
              <div>
               <button className="px-1 w-full sm:w-fit py-1 rounded-full mr-4 bg-gradient-to-br from-[var(--main-red)] via-[var(--hover-red)] to-[var(--main-red)] text-[var(--ice-white)]  mt-3" >
                  <span className="block bg-[var(--main-black)] hover-[var(--secondary-gray)]  rounded-full px-5 py-2 hover:bg-[var(--secondary-gray)]"> Me contrate</span>  </button>
                <button className="px-1 w-full sm:w-fit py-1 rounded-full mr-4 bg-gradient-to-br from-[var(--main-red)] via-[var(--hover-red)] to-[var(--main-red)] text-[var(--ice-white)]  mt-3" >
                  <span className="block bg-[var(--main-black)] hover-[var(--secondary-gray)]  rounded-full px-5 py-2 hover:bg-[var(--secondary-gray)] "> Download CV</span>  </button>
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