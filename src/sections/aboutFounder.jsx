'use client';

import React from 'react';
import founderImg from '../assets/founder/founder.jpeg'
import { motion } from "framer-motion";

const AboutFounder = () => {
  const headingVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const subVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
    },
  },
};
  return (
    <section id='about' className="bg-butter py-20 px-6 md:px-12 sora-font overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="bg-white px-6 py-1.5 rounded-full text-sm font-medium shadow-sm border border-black/5">
            Founder
          </span>
          <motion.h1
  variants={headingVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  className="text-[1.9rem] md:text-[3.5rem] 
  font-semibold brown-heading lora-font text-center 
  max-w-5xl leading-[1.2] mb-8"
>
  <h2 className="text-3xl text-butter-dark md:text-4xl lg:text-[3.3rem] font-semibold lora-font mt-6 text-[#1a1a1a]">
           Founder’s story
          </h2>
</motion.h1>


         
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="absolute top-0 left-0 text-[10rem] font-black text-black/5 select-none -translate-x-20 -translate-y-10 leading-none hidden lg:block uppercase italic">
            Visionary
          </div>

          <div className="relative w-full
           lg:w-1/2 flex justify-center">
            <div className="relative z-10 w-full 
            max-w-[400px]  aspect-[4/5] rounded-[40px] 
            overflow-hidden border-[12px] border-white
             shadow-2xl rotate-2 hover:rotate-0 transition-transform 
             duration-500">
              <img 
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover 
                md:grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-[400px] aspect-[4/5]
             bg-[#3E2723] rounded-[40px] -rotate-3 z-0"></div>
            
            
          </div>

          <div className="w-full lg:w-1/2 z-10">
            <div className="space-y-6">
              <div className="inline-block bg-[#3E2723] text-white px-4 py-1 rounded-sm text-sm uppercase tracking-[0.2em] font-bold">
                The Editor
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] leading-tight">
              Kabir Kapoor
              </h3>
              
              <div className="w-20 h-1.5 bg-orange-600"></div>

              <p className="text-lg md:text-xl text-butter-muted leading-relaxed font-medium">
               Kabir Kapoor is the founder of Beyond 9-5 and The Beyond Studio. At 21, he has spent the past three years running a content agency and working closely with creators in the creator economy. He has worked as a video editor with creators like Vedika Bhaia(254K+ followers) and Kaumil Gajera(526K+ followers). Kabir has also secured clients through outbound systems, including closing Rapidise, a company generating ₹500+ crore in revenue, through a cold email. Beyond 9-5 is an initiative backed by The Beyond Studio, where creator projects are executed with a network of Beyond freelancers rather than selling courses or digital products. The studio operates from Ludhiana, Punjab, with rented workspaces in Delhi and Bengaluru, collaborating with creators and freelancers across India.
              </p>

              

              {/* <div className="pt-6">
                <blockquote className="border-l-4 border-[#183a37] pl-4 italic text-xl text-[#183a37] font-serif">
                  "Helping creators turn their attention into a digital empire."
                </blockquote>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;