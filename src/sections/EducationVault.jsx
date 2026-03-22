
'use client';

import React, { useState } from 'react';
import Img1 from '../assets/educationVault/educationVault1.svg'
import Img2 from '../assets/educationVault/educationVault2.svg'
import extraModuleImg from '../assets/educationVault/extraModule.svg'
import thronImg from '../assets/educationVault/throne2.svg'
import beyondEngine from '../assets/educationVault/beyondEngine.svg'

import { motion } from "framer-motion";


const EducationVault = () => {
  const [expandedId, setExpandedId] = useState('module-1');
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

  const defaultModules = [
    {
      id: 'module-1',
      title: 'The Legacy Gate',
      moduleNumber: 'Module 1',
      items: [
        { id: '1', label: 'The Beyond Model explained step-by-step' },
        { id: '2', label: 'How agencies actually make money in the creator economy' },
        { id: '3', label: 'Setting up your Calendly appointment booking system' },
        { id: '4', label: 'Preparing the foundation for client acquisition' },
        
      ],
      images: {
        left:Img1 , 
       
      },
    },
    { id: 'module-2', 
      title: 'The Pillars of Power', moduleNumber: 'Module 2', 
      items: [
        { id: '1', label: 'Choosing the right market to target' },
        { id: '2', label: 'Designing an offer people actually pay for' },
        { id: '3', label: 'Structuring your sales ecosystem' },
        { id: '4', label: 'Building credibility before outreach begins' },
          
      ],
    images: {
        left:Img2 , 
       
      }, },
    { id: 'module-3',
       title: 'The Beyond Engine', moduleNumber: 'Module 3', 
      items: [
        { id: '1', label: 'Understanding outbound client acquisition' },
        { id: '2', label: 'Building outreach systems that run daily' },
        { id: '3', label: 'Creating repeatable lead generation processes' },
        { id: '4', label: 'Structuring your outreach workflow' },
        
      ],
    images: {
        left:beyondEngine , 
       
      }, },
    { id: 'module-4',
       title: 'The Heart of Sales', moduleNumber: 'Module 4', 
      items: [
        { id: '1', label: 'Designing powerful free offers to attract prospects' },
        { id: '2', label: 'Structuring one-time offers for quick revenue' },
        { id: '3', label: 'Building recurring offers for predictable monthly income' },
        { id: '4', label: 'Positioning your offer so clients see immediate value' },
         { id: '5', label: 'Creating an offer ladder that grows with your agency' },
       
      ],
    images: {
        left:Img1 , 
       
      }, },
    { id: 'module-5',
       title: 'Paid Ads (Scaling Stage)', moduleNumber: 'Module 5', 
      items: [
        { id: '1', label: 'When you should start using paid ads' },
        { id: '2', label: 'How ads can amplify your existing systems' },
        { id: '3', label: 'Structuring ad funnels for client acquisition' },
        { id: '4', label: 'Avoiding common mistakes beginners make with ads' },
        { id: '5', label: 'Scaling outreach with paid traffic' },
      ] ,
    images: {
        left:Img2 , 
       
      },},
    { id: 'module-6', 
      title: 'The Throne Room of Sales', moduleNumber: 'Module 6',
       items: [
        { id: '1', label: 'How to conduct high-converting sales calls' },
        { id: '2', label: 'Handling common client objections' },
        { id: '3', label: 'Structuring your sales call framework' },
        { id: '4', label: 'Creating SOPs for your agency' },
        { id: '5', label: 'Hiring and building your first team' },
       ],
      images: {
        left: thronImg , 
       
      }, },
    { id: 'module-7', title: 'Extra Modules', moduleNumber: 'Bonus',
       items: [
        { id: '1', label: 'Understanding the attention economy' },
        { id: '2', label: 'Understanding Value Creation' },
        { id: '3', label: 'How to find your skill interest' },
        { id: '4', label: 'The truth about online money' },
        { id: '5', label: 'Digital economics and What is Leverage?' },
        { id: '6', label: 'Which business model works' },
       ],
      images: {
        left:extraModuleImg , 
       
      }, },
  ];

  const toggleModule = (id) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section className=" py-16 md:py-24 px-4 md:px-8 sora-font">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
>
  <h1 className="text-3xl md:text-4xl lg:text-[3.3rem] font-bold text-white mb-4 lora-font ">
            The Builder’s Library</h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
A collection of structured modules designed for creators building real businesses.
          </p>
</motion.div>
         
        </div>

        {/* Modules */}
        <div className="space-y-4 md:space-y-5">
          {defaultModules.map((module) => {
            const isExpanded = expandedId === module.id;
            return (
              <div key={module.id} className=" bg-butter 
              rounded-[24px] overflow-hidden transition-all duration-300">
                {/* Module Header */}
                <div 
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-6 md:px-8 py-6 
                  md:py-8 flex flex-col md:flex-row md:items-center 
                  
                  justify-between cursor-pointer"
                >
                  <h3 className="text-lg md:text-2xl font-semibold sora-font text-[#1a1a1a]">{module.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 bg-white text-[#183a37] sora-font md:font-semibold
                     rounded-full  uppercase text-sm">
                      {module.moduleNumber}
                    </span>
                    <div className="bg-white w-10 h-10 rounded-full flex  
                     items-center justify-center md:font-semibold text-2xl">
                      {isExpanded ? '−' : '+'}
                    </div>
                  </div> 
                </div>

                <div className={`transition-all duration-500
                   overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 md:px-8 pb-8 md:pb-12 pt-4
                   border-t border-black/5 ">
                    
                    <div className="flex flex-col  
                      md:flex-row justify-between 
                       items-end gap-8">
                      
                      {/* Left: Lessons List */}
                      <div className="grid grid-cols-1  self-start
                       md:grid-cols-2 gap-x-10 gap-y-5 w-full">
                        {module.items?.map((item) => (
                          <div key={item.id} className="flex items-start align-top gap-3">
                            <span className="text-xl text-[#d45113]">✦</span>
                            <span className="text-[#1a1a1a] sora-font font-medium md:text-lg">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Right: Images (Bottom Aligned) */}
                      {module.images && (
                        <div className="flex items-end
                         gap-4 min-w-fit mt-6 md:mt-0">
                          {module.images.left && (
                            <img src={module.images.left} alt="icon-1" 
                            className="w-full md:w-[397px] h-auto    mix-blend-multiply" />
                          )}
                         
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationVault;