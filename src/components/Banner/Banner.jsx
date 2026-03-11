import React from "react";
import BannerImg from "../../assets/3.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container py-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Text content section */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-[5rem] px-[2.5rem] md:pr-[2.5rem] md:py-0 md:px-0 md:items-start">
            
            {/* Heading */}
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl xl:text-5xl font-semibold text-[black]/80"
            >
              Innovation isn’t just an idea — it’s{" "}
              <br />
              <span className="text-[gray] underline">How Growth Works</span>
            </motion.h1>

            {/* CTA */}
            <motion.button
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="primary-btn hover:bg-[black] text-[black] hover:text-[white] duration-300"
            >
              Discover Our Vision
            </motion.button>

            {/* Info blocks */}
            <div className="flex gap-3">
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">Strategic Innovation</p>
                <p>
                  We design solutions that empower brands to adapt, evolve, and
                  lead with confidence.
                </p>
              </motion.div>

              <motion.div
                variants={slideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="space-y-2"
              >
                <p className="font-semibold text-lg">Growth by Design</p>
                <p>
                  Every strategy we craft is built to deliver measurable growth
                  and lasting impact.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Banner Image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt="Banner"
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
