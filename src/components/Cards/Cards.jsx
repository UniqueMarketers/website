import React from "react";
import Img1 from "../../assets/icon/1.png";
import Img2 from "../../assets/icon/2.png";
import Img3 from "../../assets/icon/3.png";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      <div className="bg-[gray]/10">
        <div className="container py-[3.5rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-[white] shadow-xl rounded-xl px-[1.25rem] py-[2.5rem] text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img1}
                alt="Innovation Icon"
                className="w-16 h-16 rounded-full object-contain p-[0.75rem] bg-[black]"
              />
              <p className="text-xl font-semibold">Innovation</p>
              <p className="text-sm text-[black]/80 leading-relaxed">
                We bring bold ideas to life, helping brands evolve with creative
                solutions that inspire change.
              </p>
              <a href="#">Learn More</a>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="bg-[white] shadow-md px-[1.25rem] py-[2.5rem] text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img2}
                alt="Strategy Icon"
                className="w-16 h-16 rounded-full object-contain p-[0.75rem] bg-[black]"
              />
              <p className="text-xl font-semibold">Strategy</p>
              <p className="text-sm text-[black]/80 leading-relaxed">
                Our mission is to craft actionable strategies that transform
                vision into measurable success.
              </p>
              <a href="#">Learn More</a>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="bg-[white] shadow-md px-[1.25rem] py-[2.5rem] text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img3}
                alt="Growth Icon"
                className="w-16 h-16 rounded-full object-contain p-[0.75rem] bg-[black]"
              />
              <p className="text-xl font-semibold">Growth</p>
              <p className="text-sm text-[black]/80 leading-relaxed">
                We empower businesses to achieve sustainable growth through
                innovation, strategy, and customer‑centric design.
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
