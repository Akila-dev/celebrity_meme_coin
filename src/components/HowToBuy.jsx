import { useState } from "react";
import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa6";
import { SiAppstore } from "react-icons/si";
import { IoLogoGooglePlaystore, IoGlobeOutline } from "react-icons/io5";

import { HOW_TO_GET_GLOW } from "../constants";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, slideIn } from "../utils/motion";
import { Accordion } from "../components";
import { images } from "../assets";

const phantomLinks = [
  {
    icon: <IoGlobeOutline className="phantom-link-icon" />,
    link: "https://phantom.com/download",
  },
  {
    icon: <IoLogoGooglePlaystore className="phantom-link-icon" />,
    link: "https://play.google.com/store/apps/details?id=app.phantom",
  },
  {
    icon: <SiAppstore className="phantom-link-icon" />,
    link: "https://apps.apple.com/us/app/phantom-crypto-wallet/id1598432977",
  },
];

const HowToBuy = () => {
  return (
    <div className={`space-y-[2em]`}>
      <motion.div
        variants={textVariant()}
        className=" lg:max-w-[70%] lg:mx-auto text-center"
      >
        <motion.p className={`${styles.sectionSubText} text-center`}>
          How to Buy
        </motion.p>
        <motion.h2
          className={`${styles.sectionHeadText} text-center mb-[0.3em]`}
        >
          How to Buy Your Favorite Celebrity Meme Coin in Minutes
        </motion.h2>
        <p>
          Welcome to this quick guide on purchasing your Celebrity Meme Coin!
          The process is simple and takes just a few steps. Let’s get you
          started.
        </p>
      </motion.div>

      <div className="card-bg-glass rounded-[1em]">
        <Accordion data={HOW_TO_GET_GLOW} />
      </div>

      {/* PHANTOM CTA */}
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="p-[1em] flex-center flex-col w-full bg-gradient-to-b from-[#ab9ff3] to-[#7a55f7] rounded-[1em] min-h-[15em] relative !gap-[0.5em] lg:!gap-[0.3em]"
      >
        <img
          src={images.phantom}
          alt="Phantom Wallet"
          className="w-auto h-[70%] object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        />
        <h2 className={`${styles.sectionHeadText} text-center mb-[0.3em]`}>
          Get Phantom Wallet
        </h2>
        <div className="flex-center relative">
          {phantomLinks.map(({ icon, link }, i) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex-center size-[4em] bg-white rounded-[0.5em] hover:bg-card2"
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(HowToBuy, "dashboard");
