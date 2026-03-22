import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import backgroundImage from "../assets/heroSection/backgroundimage1.png";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  
  const stats = [ 
    { number: 150, suffix: "+", title: " Freelancers network ", 
      // desc: "Helping brands make their mark online."
     },
    { number: 950, suffix: "+", title: " Creators onboarded ", 
      // desc: "Our designs engage millions globally." 
    },
    { number: 2, suffix: "%", title: " Members were refunded", 
      // desc: "We build long-term partnerships through proven results." 
    },
    // { number: 12, suffix: "+", title: "Years of expertise", 
    //   desc: "Decades of experience in delivering impactful digital solutions." 
    // }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".stat-number").forEach((num) => {
        const targetValue = parseInt(num.getAttribute("data-target"));
        
        gsap.to(num, {
          innerText: targetValue,
          duration: 3, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: num,
            start: "top 90%", 
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            num.innerText = Math.floor(num.innerText);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="bg-butter py-24 md:py-32 overflow-hidden
    "
          // style={{ backgroundImage: `url(${backgroundImage})` }}
>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row  
        mb-20 md:mb-32 border-b border-[#2D221C]/10 pb-12">
          <div className="w-full  md:w-1/5 mb-6 md:mb-0 flex
            gap-2 text-xl font-medium sora-font">
            <span className="text-butter-accent font-bold  text-2xl">↳</span>
            <span className="text-butter-dark font-semibold text-xl opacity-90">Let's talk</span>
          </div>
          {/* Main heading  */}
         <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
>
  <h2 className="w-full font-semibold md:w3/4 text-4xl 
  md:text-6xl leading-tight 
  tracking-tight text-butter-dark lora-font">
    Our work speaks through{" "}
    <span className="text-butter-accent italic bounce-soft">
      numbers.
      
    </span>
    <br /> Here's what we've achieved so far.
  </h2>
</motion.div>


        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 
         sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col  items-center ">
              <div className="flex items-baseline mb-4 text-butter-dark">
                <span 
                  className="stat-number  text-7xl md:text-8xl 
                  font-bold tracking-tighter lora-font"
                  data-target={item.number}
                >
                  0
                </span>
                <span className="text-6xl  md:text-7xl font-medium tracking-tighter lora-font">
                  {item.suffix}
                </span>
              </div>
              
              <div className="h-[1px] w-[80%] bg-[#2D221C]/20 mb-8"></div>

              {/* Title with Dark Color */}
              <h4 className="text-xl text-center 
               md:text-2xl font-semibold mb-3 text-butter-dark sora-font">
                {item.title}
              </h4>
              <p className="text-butter-muted text-base leading-relaxed max-w-[240px] sora-font">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;



