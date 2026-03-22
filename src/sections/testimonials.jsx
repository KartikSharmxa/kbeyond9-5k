

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; 
import Img1 from "../assets/testimonials/1.jpg";
import Img2 from "../assets/testimonials/2.jpg";
import Img3 from "../assets/testimonials/3.jpg";
import Img4 from "../assets/testimonials/4.jpg";
import Img5 from "../assets/testimonials/5.jpg";
import Img6 from "../assets/testimonials/6.jpg";
import Img7 from "../assets/testimonials/7.jpg";
import Img8 from "../assets/testimonials/8.jpeg";
import Img9 from "../assets/testimonials/9.PNG";
import Img10 from "../assets/testimonials/10.jpeg";



import { motion } from "framer-motion";
import backgroundImage from "../assets/heroSection/backgroundimage1.png";


const Testimonials = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
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

  const items = [
    { id: 1, type: "image", src: Img1, alt: "Client review 1" },
    { id: 2, type: "image", src: Img2, alt: "Client review  2" },
    { id: 3, type: "image", src: Img3, alt: "Client review 3" },
    { id: 4, type: "image", src: Img8, alt: "client  review 4" },
    { id: 5, type: "image", src: Img9, alt: "client review 5" },
    { id: 6, type: "image", src: Img10, alt: "Client review 6" },
    { id: 7, type: "image", src: Img5, alt: "Client review 7" },
    { id: 8, type: "image", src: Img6, alt: "Client review  8" },
    { id: 9, type: "image", src: Img7, alt: "Client review  9" },
    { id: 10, type: "image", src: Img4, alt: "Client review  10" },


  ];

  // Functions for Navigation
  const openModal = (index) => setSelectedIdx(index);
  const closeModal = () => setSelectedIdx(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % items.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="testimonial" className=" bg-butter py-20 px-4 relative"
              style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        
         <div className="inline-block bg-white/80 rounded-full px-6 py-2">
            <p className="text-black text-sm md:text-base font-medium">
              Beyond 9-5
            </p>
          </div>
          <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
>
 <h2 className="text-butter-dark  lora-font text-4xl md:text-6xl font-bold mt-6">
          Real growth. Real results.
        </h2>
</motion.div>
        
      </div>

      {/* Masonry Layout Container */}
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="break-inside-avoid cursor-pointer"
            onClick={() => openModal(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto rounded-2xl border border-white/10 shadow-lg hover:brightness-110 transition-all duration-300"
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg aspect-video pointer-events-none">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={item.src}
                  title={item.alt}
                  frameBorder="0"
                ></iframe>
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">▶</div>
                </div> */}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- MODAL / LIGHTBOX --- */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Header: Counter & Close */}
          <div className="absolute top-6 w-full flex justify-between px-8 items-center text-white">
            <span className="text-lg font-medium tracking-widest">
               {selectedIdx + 1} / {items.length}
            </span>
            <button onClick={closeModal} className="hover:rotate-90 transition-transform duration-300">
              <X size={35} />
            </button>
          </div>

          {/* Previous Button */}
          <button 
            onClick={showPrev}
            className="absolute left-4 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Main Content (Image or Video) */}
          <div className="max-w-5xl w-full max-h-[80vh] flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            {items[selectedIdx].type === "image" ? (
              <img 
                src={items[selectedIdx].src} 
                alt="Selected"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            ) : (
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`${items[selectedIdx].src}?autoplay=1`}
                  title="video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Next Button */}
          <button 
            onClick={showNext}
            className="absolute right-4 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
          >
            <ChevronRight size={40} />
          </button>
          
          {/* Caption */}
          <p className="mt-6 text-white/60 text-lg">{items[selectedIdx].alt}</p>
        </div>
      )}

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <a
  href="https://wa.link/lv9j6b" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <button className="bg-[#d44d08] uppercase  
        sora-font text-white px-10 py-4 rounded-lg cursor-pointer
         text-lg hover:scale-105 transition-transform">
          Become a member
        </button>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;