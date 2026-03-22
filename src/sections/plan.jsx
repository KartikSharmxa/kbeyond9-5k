'use client';

import React from 'react';
import Bg1 from '../assets/plan/planImg.svg'
import backgroundImage from '../assets/heroSection/backgroundimage1.png';


export default function Plan() {
  return (
    <section className=" py-20 px-4 sora-font">
      <div 
      style={{ backgroundImage: `url(${Bg1}),
       url(${backgroundImage})`,
       backgroundPosition: 'cover, bottom left',
       backgroundRepeat: 'no-repeat, no-repeat',
       backgroundSize: 'cover,cover'
        }}
       className="max-w-7xl mx-auto bg-butter rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl">

        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-cover"></div>

        {/* Tag */}
        <div className="flex justify-center mb-6 relative z-10">
          <span className="bg-white text-sm px-5 py-2 rounded-full shadow font-medium">
            Ready to level up?
          </span>
        </div>

        {/* Heading */}
        <div className=' mx-auto  w-[90%]'>
        <h2 className="text-center 
        lora-font text-3xl text-butter-dark  md:text-4xl
         lg:text-[3.3rem] font-semibold mb-4 relative z-10">
         Not for the average mindset.
        </h2>

        <p className=" md:text-xl
          text-center text-butter-muted  mb-14 opacity-90 ">
            Beyond 9-5 is an invite-only community where students get placed into real client work across high-income skill domains. 
            Instead of just learning from courses, you work directly with active creators.
          </p>
        </div>
        {/* Plan Card */}
        <div className="max-w-md mx-auto relative z-10">
          <div className="bg-[#f4f1ea] rounded-2xl p-8 shadow-lg hover:scale-105 transition-all duration-300">

            {/* Most Popular Badge */}
            <div className="absolute  -top-4 left-1/2 -translate-x-1/2 bg-[#123c36] text-white text-sm px-4 py-1 rounded-full shadow">
              Most Popular
            </div>

            {/* <h3 className="text-xl text-butter-dark font-semibold mb-2">
              Half-Yearly Plan
            </h3>

            <p className="text-butter-muted mb-6">
              One-time enrollment fee: ₹249

            </p> */}

            {/* <div className="border-t border-gray-300 mb-6"></div> */}

            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ₹249
            </h1>

            <p className="text-butter-muted mb-8">
            (Non-refundable - because this is for people who are committed.)

            </p>
<a 
  href="https://wa.link/lv9j6b" 
  target="_blank" 
  rel="noopener noreferrer"
>
            <button className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
              Become a Member
            </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
