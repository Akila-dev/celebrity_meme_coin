import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

import { FaWallet } from "react-icons/fa6";

import { howToGetGLOW } from "../../constants";

const MyAccount = () => {
  return (
    <div className="grid grid-cols-1 gap-[1em]">
      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`card-bg-glass card-padding rounded-[1em] space-y-[1em] col-span-1`}
      >
        {/* MY ACCOUNT */}
        <div className="space-y-[2em] pb-[2em] border-b border-card/50">
          <div className="flex-y-center flex-col md:flex-row md:items-start">
            <div>
              <p className="text-[1.5em]">
                How to Buy Your Favorite Celebrity Meme Coin in Minutes
              </p>
              <p>
                Welcome to this quick guide on purchasing your Celebrity Meme
                Coin! The process is simple and takes just a few steps. Let’s
                get you started.
              </p>
            </div>
            <a
              href="https://pump.fun/coin/tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump"
              target="_blank"
              rel="noopener noreferrer"
              className="button min-w-fit"
            >
              <FaWallet />
              Buy $GLOW on Pump.fun
            </a>
          </div>

          <div className="flex no-wrap gap-[1em] overflow-auto no-scrollbar">
            <div className="card-bg-glass rounded-[1em] p-[1em] flex flex-col gap-[0.5em] w-full">
              {howToGetGLOW.map((text, i) => (
                <p key={i} className="font-light">
                  <b className="font-semibold text-gradient">Step {i + 1}:</b>{" "}
                  {text}
                </p>
              ))}
              <p>
                Purchase $GLOW on Pump.fun:{" "}
                <a
                  href="https://pump.fun/coin/tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient"
                >
                  https://pump.fun/coin/tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyAccount;
