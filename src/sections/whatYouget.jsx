

// import { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";

// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import backgroundImage from "../assets/heroSection/backgroundimage1.png";

// import Img1 from "../assets/whatYouGet/whatyouget1.svg";
// import Img2 from "../assets/whatYouGet/whatyouget2.svg";
// import Img3 from "../assets/whatYouGet/whatyouget3.svg";
// import Img4 from "../assets/whatYouGet/whatyouget4.svg";

// export default function WhatYouGet() {
//   const [playingIndex, setPlayingIndex] = useState(null);

//   const headingVariant = {
//   hidden: {
//     opacity: 0,
//     y: 60,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.33, 1, 0.68, 1],
//     },
//   },
// };

// const subVariant = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.3,
//       duration: 0.6,
//     },
//   },
// };

//   const videos = [
//     { id: "8pm4sOruvuk" },
//     { id: "eWeaEAIp5TY" },
//     { id: "ZlZYKd4DAxU" },
//   ];

//   const features = [
//     {
//       icon: Img1,
//       title: "Consistent Income Opportunities",
//       description:
//         "Work on real client projects across high-income skill domains like video editing, ad creatives, content management, and performance marketing.",
//     },
//     {
//       icon: Img2,
//       title: "Work With Active Creators",
//       description:
//         "Get placed directly with creators and businesses who need execution support.",
//     },
//     {
//       icon: Img3,
//       title: "Premium Private Skool Community",
//       description:
//         "In-depth training on client acquisition. Frameworks to build your freelance offer",
//     },
//     {
//       icon: Img4,
//       title: "Dedicated Specialist Support",
//       description:
//         "Every selected member is assigned a specialist. You’re trained to operate like a professional not a beginner.",
//     },
//   ];

//   // Desktop animation only
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: isMobile ? 0 : 0.12,
//         delayChildren: isMobile ? 0 : 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: isMobile
//       ? { opacity: 1 }
//       : {
//           opacity: 0,
//           scale: 0.85,
//           x: "var(--initial-x)",
//           y: 30,
//         },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         duration: isMobile ? 0 : 0.7,
//       },
//     },
//   };

//   return (
//     <section
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//       className="relative py-16 sora-font md:py-20 px-4 md:px-6 overflow-hidden"
//     >
//       {/* Grid overlay */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto md:px-10 space-y-12">
//         {/* Badge */}
//         <div className="flex mb-6">
//           <div className="inline-block bg-white rounded-full px-6 py-2">
//             <p className="text-black text-sm md:text-base font-medium">
//               Beyond 9-5
//             </p>
//           </div>
//         </div>

//         {/* Heading */}
//         <motion.div
//   initial={{ opacity: 0, y: 60 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{
//     duration: 0.7,
//     ease: [0.33, 1, 0.68, 1],
//   }}
//   viewport={{ once: true, amount: 0.4 }}
// >
//   <h2 className="text-white text-3xl lora-font
//    md:text-4xl lg:text-[3.2rem] font-semibold mb-12 leading-tight">
//           What You Get Inside Beyond 9-5
//         </h2>
// </motion.div>


        

//         {/* FIXED SWIPER */}
//         <Swiper
//           spaceBetween={20}
//           modules={[Pagination, Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next-custom",
//             prevEl: ".swiper-button-prev-custom",
//           }}
//           pagination={{
//             clickable: true,
//             el: ".custom-pagination-dots",
//           }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {videos.map((video, index) => (
//             <SwiperSlide key={video.id}>
//               <div
//                 onClick={() => setPlayingIndex(index)}
//                 className="relative aspect-9/16 rounded-2xl overflow-hidden cursor-pointer group border-[4px] border-[#d4af9a]"
//               >
//                 {/* VIDEO */}
//                 <iframe
//                   className="w-full h-full"
//                   src={`https://www.youtube.com/embed/${video.id}?autoplay=${
//                     playingIndex === index ? 1 : 0
//                   }&mute=${playingIndex === index ? 0 : 1}&controls=1&loop=1&playlist=${video.id}&playsinline=1`}
//                   title="YouTube video"
//                   frameBorder="0"
//                   allow="autoplay; encrypted-media; fullscreen"
//                   allowFullScreen
//                 ></iframe>

//                 {/* PLAY BUTTON */}
//                 {playingIndex !== index && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                     <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition">
//                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Controls */}
//         <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
//           <div className="custom-pagination-dots flex gap-2"></div>

          
//         </div>

//         {/* Features */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {features.map((feature, index) => {
//             const offsets = ["150%", "50%", "-50%", "-150%"];

//             return (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 style={{ "--initial-x": offsets[index] }}
//                 whileHover={
//                   isMobile
//                     ? {}
//                     : { scale: 1.05, y: -8, transition: { duration: 0.2 } }
//                 }
//                 className="bg-butter rounded-md p-6 flex flex-col items-center hover:shadow-2xl transition-all cursor-pointer"
//               >
//                 <img src={feature.icon} className="mb-6" />

//                 <h3 className="text-black text-lg Lora-font
//                  md:text-xl lg:text-[1.4rem] font-medium mb-4 text-center">
//                   {feature.title}
//                 </h3>

//                 <p className="text-black text-sm md:text-base leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight ,Play } from "lucide-react"; // Arrow icons

import backgroundImage from "../assets/heroSection/backgroundimage1.png";
import Img1 from "../assets/whatYouGet/whatyouget1.svg";
import Img2 from "../assets/whatYouGet/whatyouget2.svg";
import Img3 from "../assets/whatYouGet/whatyouget3.svg";
import Img4 from "../assets/whatYouGet/whatyouget4.svg";

export default function WhatYouGet() {
  const [playingIndex, setPlayingIndex] = useState(null);

  const videos = [
    { id: "8pm4sOruvuk" },
    { id: "eWeaEAIp5TY" },
    { id: "ZlZYKd4DAxU" },

  ];

  const features = [
    {
      icon: Img1,
      title: "Consistent Income Opportunities",
      description: "Work on real client projects across high-income skill domains like video editing, ad creatives, content management, and performance marketing.",
    },
    {
      icon: Img2,
      title: "Work With Active Creators",
      description: "Get placed directly with creators and businesses who need execution support.",
    },
    {
      icon: Img3,
      title: "Premium Private Skool Community",
      description: "In-depth training on client acquisition. Frameworks to build your freelance offer",
    },
    {
      icon: Img4,
      title: "Dedicated Specialist Support",
      description: "Every selected member is assigned a specialist. You’re trained to operate like a professional not a beginner.",
    },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.12,
        delayChildren: isMobile ? 0 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.85, x: "var(--initial-x)", y: 30 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: isMobile ? 0 : 0.7 } },
  };

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative py-16 sora-font md:py-20 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto md:px-10 space-y-12">
        {/* Badge */}
        <div className="flex mb-6">
          <div className="inline-block bg-white rounded-full px-6 py-2">
            <p className="text-black text-sm md:text-base font-medium">Beyond 9-5</p>
          </div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-white text-3xl lora-font md:text-4xl lg:text-[3.2rem] font-semibold mb-12 leading-tight">
            What You Get Inside Beyond 9-5
          </h2>
        </motion.div>

        {/* SWIPER WITH NAVIGATION ARROWS */}
        <div className="relative">
          <Swiper
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".wyget-next", // Unique classes
              prevEl: ".wyget-prev",
            }}
            pagination={{
              clickable: true,
              el: ".wyget-pagination",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <div
                  onClick={() => setPlayingIndex(index)}
                  className="relative aspect-9/16 rounded-2xl overflow-hidden cursor-pointer group border-[4px] border-[#d4af9a]"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=${playingIndex === index ? 1 : 0}&mute=${playingIndex === index ? 0 : 1}&controls=1&loop=1&playlist=${video.id}&playsinline=1`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  ></iframe>

                    {/* {playingIndex !== index && (
                                      <div className="absolute inset-0
                                       flex items-center justify-center
                                        bg-black/10 group">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ARROW CONTROLS (MemberSection Style) */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
            <div className="wyget-pagination flex gap-2"></div>
            <div className="flex gap-4">
              <button className="wyget-prev w-12 h-12 cursor-pointer
              rounded-full border border-white/20 flex items-center 
              justify-center hover:bg-[#FFEDAC] text-white
               hover:text-black transition-all">
                <ArrowLeft size={24} />
              </button>
              <button className="wyget-next w-12 h-12 rounded-full  cursor-pointer
              border border-white/20 flex items-center justify-center
               hover:bg-black text-black hover:text-white transition-all">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Features (No Design Change) */}
        <motion.div
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const offsets = ["150%", "50%", "-50%", "-150%"];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{ "--initial-x": offsets[index] }}
                whileHover={isMobile ? {} : { scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                className="bg-butter rounded-md p-6 flex flex-col items-center hover:shadow-2xl transition-all 
                cursor-pointer scale-100 transition-all duration-100 "
              >
                <img src={feature.icon} className="mb-6" alt="" />
                <h3 className="text-black text-lg lora-font md:text-xl lg:text-[1.4rem] font-medium mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-black text-sm 
                 md:text-base leading-relaxed pl-1 ">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}