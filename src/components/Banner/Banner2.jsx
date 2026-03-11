import React from "react";
import BannerImg from "../../assets/4.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <>
      <div className="container py-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          
          {/* Banner Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt="Banner"
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-110"
            />
          </div>

          {/* Text content section */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-[5rem] px-[2.5rem] md:pl-[2.5rem] md:py-0 md:px-0 md:items-start xl:max-w-[400px] mx-auto">
            
            {/* Tagline */}
            <motion.p
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="uppercase tracking-wide text-[gray]"
            >
              Innovation • Strategy • Growth
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-[black]/80"
            >
              We understand your vision <br />
              <span className="text-[gray] underline">And fuel your growth</span>
            </motion.h1>

            {/* CTA */}
            <motion.button
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn hover:bg-[black] text-[black] hover:text-[white] duration-300"
            >
              Partner With Us
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
