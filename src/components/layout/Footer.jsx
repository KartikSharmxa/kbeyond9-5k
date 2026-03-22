


import React from "react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "FAQs", href: "#faq" },
];

const Footer = () => {
  return (
    <footer className="relative bg-butter w-full py-10 px-6 mt-20">
      {/* Footer Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-[#3E2723] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="lora-font text-white text-2xl font-semibold tracking-wide cursor-default"
            >
              Beyond Studio<span className="text-butter">.</span>
            </motion.h2>
            <p className="sora-font text-gray-300 text-sm">
               @2023 Beyond Studio. All rights reserved
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="group relative sora-font text-white/80 hover:text-white text-base font-medium transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r
         from-transparent via-gray-400 to-transparent mt-12 mb-6" />

        <motion.div 
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-center"
        >
          <p className="sora-font text-[10px] uppercase tracking-[0.3em] text-gray-200">
            Kabir Kapoor
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;