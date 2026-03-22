import React from "react";
// import {} from "react";
import "./SkillFlow.css";
import backgroundImage from "../assets/heroSection/backgroundimage1.png";
import { motion } from "framer-motion";
import { color } from "framer-motion";

const SkillFlow = () => {
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
      className=" skillClass bg-[#3E2723]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      
    >
      <div className="cohort-main-section" id="cohort-bg">

        <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
>
 <h1 className="bg-large-text lora-font brown-heading  "
        style={{marginBottom:'50px'}}
        >Why Beyond 9-5? </h1>
</motion.div>
        

        <div className="visual-flow-container">
          <div className="text-block side-left">
            <p className="title-top  ">Get  </p>
            <h2 className="title-italic-yellow "
            style={{color:'white'}}>Portfolio </h2>
          </div>

          <div className="svg-wrapper">
            <div className="svg-box">
              <svg viewBox="0 0 344 386">
                <path
                  className="path-static"
                  d="M2.422 195.035h338.523m-338.523 0C13.709 128.964 97.664-2.196 343.184 1.727M2.422 195.035c5.887 66.338 81.171 196.928 335.212 188.583"
                />
                <path
                  className="path-animated"
                  pathLength="100"
                  d="M2.422 195.035h338.523m-338.523 0C13.709 128.964 97.664-2.196 343.184 1.727M2.422 195.035c5.887 66.338 81.171 196.928 335.212 188.583"
                />
              </svg>
            </div>

            <div className="middle-options " style={{ color: "brown-text" }}>
              <div className="option-item">
              
                Get projects <br /> from  the 1st day 
              </div>
              <div className="option-item">
               Get experience working with creators
              </div>
              <div className="option-item">
               Grow on social media
              </div>
            </div>

            <div className="svg-box">
              <svg viewBox="0 0 343 386">
                <path
                  className="path-static"
                  d="M341.262 195.48H2.738m338.524 0C329.974 129.409 246.019-1.751.5 2.172M341.262 195.48C335.375 261.818 260.09 392.408 6.05 384.064"
                />
                <path
                  className="path-animated delay-anim"
                  pathLength="100"
                  d="M341.262 195.48H2.738m338.524 0C329.974 129.409 246.019-1.751.5 2.172M341.262 195.48C335.375 261.818 260.09 392.408 6.05 384.064"
                />
              </svg>
            </div>
          </div>

          <div className="text-block side-right">
            <p className="title-top yellow-text">Make</p>
            <h2 className="title-italic-yellow">Money</h2>
          </div>
        </div>
      </div>

      <div className="cohort-main-section-sm lora-font " id="cohort-sm">
        <h1 className="sm-large-text uppercase ">Why Beyond 9-5?</h1>

        <div className="visual-flow-container-sm">
          <div className="text-block-sm side-left-sm">
            <p className="title-top-sm yellow-text-sm"
           style={{color:'white'}}  >Get </p>
            <h2 className="title-italic-yellow-sm "
           style={{color:'white', fontSize:'20px' }} >Portfolio </h2>
          </div>

          <div className="svg-wrapper-sm">
            <div className="svg-box-sm first-box-sm">
              <svg className="desktop-svg-sm" viewBox="0 0 344 386">
                <path
                  className="path-static-sm"
                  d="M2.422 195.035h338.523m-338.523 0C13.709 128.964 97.664-2.196 343.184 1.727M2.422 195.035c5.887 66.338 81.171 196.928 335.212 188.583"
                />
                <path
                  className="path-animated-sm"
                  d="M2.422 195.035h338.523m-338.523 0C13.709 128.964 97.664-2.196 343.184 1.727M2.422 195.035c5.887 66.338 81.171 196.928 335.212 188.583"
                />
              </svg>

              <svg className="mobile-svg-sm" viewBox="0 0 173 387">
                <path
                  className="path-static-sm"
                  d="M1.496 195.839h169.838m-169.838 0C7.16 129.769 49.28-1.391 172.457 2.531M1.497 195.84C4.45 262.177 42.22 392.767 169.672 384.423"
                />
                <path
                  className="path-animated-v-sm"
                  pathLength="100"
                  d="M1.496 195.839h169.838m-169.838 0C7.16 129.769 49.28-1.391 172.457 2.531M1.497 195.84C4.45 262.177 42.22 392.767 169.672 384.423"
                />
              </svg>
            </div>

            <div className="middle-options-sm">
              <div className="option-item-sm">
               Get projects <br /> from  the 1st day 
              </div>
              <div className="option-item-sm">
                              Get experience working with creators
              </div>
              <div className="option-item-sm">
                Grow on social media
              </div>
            </div>

            <div className="svg-box-sm second-box-sm">
              <svg className="desktop-svg-sm" viewBox="0 0 100 100">
                <path
                  className="path-static-sm"
                  d="M341.262 195.48H2.738m338.524 0C329.974 129.409 246.019-1.751.5 2.172M341.262 195.48C335.375 261.818 260.09 392.408 6.05 384.064"
                />
                <path
                  className="path-animated-sm"
                  d="M341.262 195.48H2.738m338.524 0C329.974 129.409 246.019-1.751.5 2.172M341.262 195.48C335.375 261.818 260.09 392.408 6.05 384.064"
                />
              </svg>

              <svg className="mobile-svg-sm" viewBox="0 0 174 387">
                <path
                  className="path-static-sm"
                  d="M171.961 195.839H2.123m169.838 0C166.298 129.769 124.178-1.391 1 2.531M171.961 195.84c-2.954 66.338-40.724 196.928-168.177 188.584"
                />
                <path
                  className="path-animated-v-sm"
                  pathLength="100"
                  d="M171.961 195.839H2.123m169.838 0C166.298 129.769 124.178-1.391 1 2.531M171.961 195.84c-2.954 66.338-40.724 196.928-168.177 188.584"
                />
              </svg>
            </div>
          </div>

          <div className="text-block-sm side-right-sm">
            <p className="title-top-sm yellow-text-sm"
            style={{color:'#fd5504'}}>Make</p>
            <h2 className="title-italic-yellow-sm"
            style={{ fontSize:'20px', color:'#fd5504' }}>Money</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillFlow;
