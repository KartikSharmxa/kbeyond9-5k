
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import backgroundImage from '../assets/heroSection/backgroundimage1.png';
import illustration1 from '../assets/heroSection/hero-illustration-03.svg';
import illustration2 from '../assets/heroSection/hero-illustration-04.svg';

import HeaderVertor3 from '../assets/heroSection/headerVector3.svg';
import HeaderVertor4 from '../assets/heroSection/headerVector4.svg';
import backgroundGridImage from '../assets/heroSection/bg-gridImage.svg'
import circleImg from '../assets/heroSection/cropped_circle_image.png'
import thumbnail1 from '../assets/heroSection/thumbnail1.png'

  import {  useSpring } from "framer-motion";
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function HeroSection() {
  // vedio  poster
  const [play, setPlay] = useState(false);
 
const x = useMotionValue(0);
const y = useMotionValue(0);

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  x.set((event.clientX - centerX) / (rect.width / 2));
  y.set((event.clientY - centerY) / (rect.height / 2));
}

// 3. Movement Range
const moveXRaw = useTransform(x, [-1, 1], [-50, 50]); 
const moveYRaw = useTransform(y, [-1, 1], [-50, 50]);

const moveX = useSpring(moveXRaw, { stiffness: 150, damping: 20 });
const moveY = useSpring(moveYRaw, { stiffness: 150, damping: 20 });

// Mouse leave par wapas zero karne ke liye function
function handleMouseLeave() {
  x.set(0);
  y.set(0);
}


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
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      className="  relative min-hscreen  
      overflow-hidden"
    >
     

     <div className=' py-0 mx-auto  w-fit mt-5 
      rounded-full text-white font-semibold  
     border-2 border-black/35 flex bg-white/30 gap-4
      '>
        <img src={circleImg} alt="circle image" 
        className='w-10 h-10 ' />
          <span className='self-center pr-3 lora-font '>Kabir Kapoor presents</span>
    </div>
      
      

      {/* Left Icon (Chart/Arrow) */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-12 left-6  hidden md:block md:top-20
         md:left-20 z-20 w-24 md:w-32"
      >
        <img 
          src={illustration2}
          alt="Chart Icon" 
          className="w-full h-auto object-contain opacity-80"
        />
      </motion.div>

      {/* Right Icon (Handshake) */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-12 hidden md:block right-6 md:top-20 md:right-20 z-20 w-24 md:w-32"
      >
        <img 
          src={illustration1}
          alt="Handshake Icon" 
          className="w-full h-auto object-contain opacity-80"
        />
      </motion.div>                                
      {/* --- ICONS SECTION END --- */}
               
      <div className="relative z-10 flex flex-col items-center 
       justify-center pt-6 px-4 md:px-12"
         style={{ 
    backgroundImage: `url(${backgroundGridImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',

  }}>
    
        {/* Main Heading */}
       <motion.h1
  variants={headingVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  className="text-[2rem] md:text-[3.5rem] 
  font-semibold brown-heading lora-font text-center 
  max-w-5xl leading-[1.2] mb-8"
>
  Work with real creators and&nbsp;
  <br className="hidden md:block" /> 
  Master high-income skills
</motion.h1>

<motion.p
  variants={subVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  className="text-sm md:text-lg brown-text text-center
  max-w-2xl mb-10 sora-font opacity-90"
>
  Beyond 9-5 is an invite-only community where students get placed into real client work across high-income skill domains. 
  Instead of just learning from courses, you work directly with active creators.
</motion.p>
        {/* CTA Button */}
        <a 
  href="https://wa.link/lv9j6b" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <button className=' sora-font butter-btn mb-10 sora-font ' >
          BECOME A MEMBER
        </button>
        

</a>

         {/* Video Card Container */}
<div className="w-full  md:max-w-7xl 
 mx-auto px-0 lg:px-4 pb-12 md:pb-20">
  <div className="rounded-2xl border-[2px] md:border-[4px] border-[#d4af9a] 
  overflow-hidden  shadow-2xl  ">
    
    <div className="relative  
      aspect-video bg-black group">
     

  
        {/* <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/HW7nEdPsI0g?autoplay=1&mute=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; "
          allowFullScreen
        ></iframe> */}

        <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/HW7nEdPsI0g?autoplay=1&mute=1&controls=1&playsinline=1&enablejsapi=1&rel=0"
  title="YouTube video"
  frameBorder="0"
  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      


         {/* Left Icon (Chart/Arrow) */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-12 left-6 hidden md:block md:top-20 md:left-20 z-20 w-24 md:w-32"
      >
        <img 
          src={HeaderVertor3}
          alt="Chart Icon" 
          className="w-full h-auto object-contain opacity-80"
        />
      </motion.div>

      {/* Right Icon (Handshake) */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-12 hidden md:block right-6 md:top-20 md:right-20 z-20 w-24 md:w-32"
      >
        <img 
          src={HeaderVertor4}
          alt="Handshake Icon" 
          className="w-full h-auto object-contain opacity-80"
        />
      </motion.div>
    </div>

   

  </div>
</div>



      </div>
      
    </section>
  );
}






