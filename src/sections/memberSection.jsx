import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import backgroundImage from "../assets/heroSection/backgroundimage1.png";
import { PlayIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MemberSection() {
  const [playingIndex, setPlayingIndex] = useState(null);
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

  const videoData = [
    { id: "s2_pwNwYA9s" },
    { id: "1hMZwRUzeQg" },
    { id: "w-DXps2AH_U" },
    { id: "VDmVRZlRSG4" },
  ];

  return (
    <section
      className="py-16 px-4 md:py-24 relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#fffc] rounded-full px-6 py-1.5 mb-6 border border-black/5 shadow-sm">
            <span className="text-sm md:text-[1.1rem] sora-font tracking-wide">
              Testimonials
            </span>
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
            <h2 className="sm:text-3xl md:text-4xl lg:text-[3.3rem] lora-font font-semibold text-white tracking-tight">
              Hear from the members
            </h2>
          </motion.div>
        </div>

        {/* Swiper */}
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination-dots",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="memberSwiper "
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={index}>
              {/* CARD */}
              <div
                onClick={() => setPlayingIndex(index)}
                className=" rounded-lg
                overflow-hidden  border-[4px] border-[#d4af9a]  
                shadow-xl  group cursor-pointer relative"
              >
                <div className=" aspect-9/16 ">
                  {/* VIDEO */}
                  <iframe
                    className="  w-[100%] h-[100%]
                    "
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=${playingIndex === index ? 1 : 0}&mute=${playingIndex === index ? 0 : 1}&controls=1&loop=1&playlist=${video.id}&playsinline=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  ></iframe>

                  {/* PLAY BUTTON (HIDE AFTER CLICK) */}
                  {/* {playingIndex !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group">
                      <div
                        className="w-[120px] h-[100px]
     bg-[#3E2723] backdrop-blur-sm rounded-md 
     flex items-center justify-center
      shadow-2xl group-hover:scale-105 
     transition-transform duration-300"
                      >
                        <Play
                          size={50}
                          fill="white"
                          className="text-white ml-2"
                        />
                      </div>
                    </div>
                  )} */}

                  {playingIndex !== index && (
  <div 
    onClick={() => setPlayingIndex(index)} // Functionality yahi rahegi
    className="absolute inset-0 z-10 cursor-pointer bg-transparent"
  >
   
  </div>
)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div
          className="flex flex-col md:flex-row items-center
         justify-between mt-12 gap-8"
        >
          <div className="custom-pagination-dots flex gap-2"></div>
          <div className="flex gap-4">
            <button
              className="swiper-button-prev-custom w-12 cursor-pointer
             h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#FFEDAC] text-white hover:text-black transition-all"
            >
              <ArrowLeft></ArrowLeft>
            </button>
            <button
              className="swiper-button-next-custom w-12 h-12 cursor-pointer
            rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all"
            >
              <ArrowRight></ArrowRight>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.link/lv9j6b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="butter-btn capitalize">Become a member</button>
          </a>
        </div>
      </div>
    </section>
  );
}
