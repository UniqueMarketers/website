import React from "react";
import ServiceImg from "../../assets/2.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="container py-[3rem]">
        {/* header section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-[3rem] flex justify-between items-center"
        >
          <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
            Services That Drive{" "}
            <span className="text-[gray] underline">Innovation</span>
          </h1>
          <p className="hidden md:block">
            Strategy that fuels <br />
            <span className="text-[gray] underline">Growth</span>
          </p>
        </motion.div>

        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={ServiceImg}
              alt="Service"
              className="w-[300px] mx-auto md:max-w-[500px]"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Innovative Solutions</p>
            <p className="text-[gray] pl-[1.5rem] border-l-2">
              We craft modern strategies that help businesses adapt, innovate,
              and stay ahead in competitive markets.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Strategic Growth</p>
            <p className="text-[gray] pl-[1.5rem] border-l-2">
              Our mission is to empower brands with actionable strategies that
              transform vision into measurable growth.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[300px] mx-auto space-y-4"
          >
            <img src={ServiceImg} alt="" className="w-14" />
            <p className="uppercase font-semibold text-xl">Customer-Centric Design</p>
            <p className="text-[gray] pl-[1.5rem] border-l-2">
              We believe in solutions built around people — ensuring every
              service enhances user experience and brand loyalty.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
