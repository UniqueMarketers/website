import React from "react";
import HeroImg from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const containerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.08, // interval between letters
    },
  },
};

const Hero = () => {
  const heading = "UNIQUE MARKETERS"; 

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            
            {/* Animated heading */}
            <motion.div
              variants={containerAnimation}
              initial="initial"
              animate="animate"
              className=" funky-heading flex flex-wrap text-4xl font-bold text-[#f4c11a] px-2 py-1"
            >
              {heading.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={letterAnimation}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}

            </motion.div>

            {/* Subheading */}
            <motion.h2
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-xl font-semibold"
            >
              Innovation. Strategy. <span className="text-[gray] underline">Growth</span>
            </motion.h2>

            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
            >
              At Unique Marketers, we empower brands to evolve through bold ideas, 
              strategic execution, and measurable growth.
            </motion.p>

            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-[rgb(30,30,30)] hover:bg-[gold] duration-300 text-[white]"
            >
              Explore Our Strategy
            </motion.button>
          </div>

          {/* Hero Image section */}
          <div className="flex justify-items-end items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroImg}
              alt="Hero"
              className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
