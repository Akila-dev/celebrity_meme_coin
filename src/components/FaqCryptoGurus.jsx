import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Coin2Canvas } from "./canvas";
import { slideIn } from "../utils/motion";

import { FAQ4GURUS } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Accordion } from "../components";

const FaqCryptoGurus = () => {
  return (
    <div className="space-y-[2em] lg:space-y-[4em]">
      <motion.div
        variants={textVariant()}
        className="lg:max-w-[70%] mx-auto text-center"
      >
        <p className={`${styles.sectionSubText} text-center`}>FAQ</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-[0.3em]`}>
          FAQ for Users Who Already Have Crypto - Celebrity Meme Coin
        </h2>
        <p>
          Got crypto and ready to grab your Celebrity Meme Coin? This FAQ is for
          you! Here's what you need to know to jump in fast.
        </p>
      </motion.div>
      <div
        className={`xl:mt-0 flex lg:flex-row-reverse flex-col-reverse lg:items-start gap-[1em] md:gap-[2em] lg:gap-[3em]`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="lg:flex-1 card-bg-glass rounded-[1em]"
        >
          <Accordion data={FAQ4GURUS} />
        </motion.div>

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="lg:flex-1 overflow-visible flex items-center justify-center lg:max-w-[45vw]"
        >
          <div className="lg:flex-1 lg:h-[100vh] md:h-[550px] h-[300px] overflow-visible relative">
            {/* <EarthCanvas /> */}
            <Coin2Canvas />
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-brand/0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(FaqCryptoGurus, "");
