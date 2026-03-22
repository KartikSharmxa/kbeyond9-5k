'use client';

import React from 'react';
import backgroundImage from '../assets/heroSection/backgroundimage1.png';
import { motion } from "framer-motion";

const FaqSection = () => {
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
  const faqs = [
    {
      question: "What is Beyond 9-5?",
      answer:"Beyond 9-5 is a private community for college students who want to learn real skills, build side income online, and connect with people who are focused on growth instead of the traditional path."
    },
    {
      question: "Who is this community for?",
      answer:"This community is for students who want more than just classes and placements.If you're interested in content creation, freelancing, online business, or building skills early in life, you’ll fit right in."
    },
    {
      question: "Is the ₹249 refundable?",
      answer:
      `No. The enrollment fee is ${<bold>non-refundable.</bold>} It acts as a commitment fee, so only serious people join the community.`
    },
    {
      question: "How do I join the community?",
      answer:
`You can't join the community unless someone from the team contacts you, and they will guide you through the steps you have to follow.`    },
    {
      question: "Is this a course?",
      answer: `No. Beyond 9-5 is an invite-only community with consistent income opportunities 
The value comes from learning, networking, and growing alongside other builders.`
    }
  ];


  return (
    <section id='faq' 
    style={{ backgroundImage: `url(${backgroundImage})` }}
     className=" sora-font py-10 md:py-24 px-6 relative overflow-hidden font-sora">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none "
      ></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="mb-6">
          <span className="bg-white   px-6 py-2 rounded-full text-lg  ">
            Have Doubts?
          </span>
        </div>

        <motion.h1
  variants={headingVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
 
>
 <h2 className="font-lora text-3xl md:text-4xl lg:text-[3.3rem]
         font-semibold brown-heading mb-4">
          FAQs
        </h2>
</motion.h1>

<motion.p
  variants={subVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
 
>
  <p className=" text-lg  text-gray-300 font-medium mb-16 max-w-2xl mx-auto">
          Here you will find the answers to the frequently asked questions.
        </p>
 
</motion.p>

        
        
        

        <div className="text-left space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              {/* Divider Line */}
              <div className="h-[1px] bg-gray-400 w-full mb-8"></div>

              <div className="mb-10">
                <h3 className="text-xl brown-heading md:text-[1.3rem] font-medium mb-4 leading-tight">
                  {faq.question}
                </h3>
                <p className=" text-base brown-text md:text-lg leading-relaxed ">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          {/* Final Divider Line at the bottom */}
          {/* <div className="h-[1px] bg-black/10 w-full mt-8"></div> */}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;