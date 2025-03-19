import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

import { VscArrowSwap } from "react-icons/vsc";
import { FaWallet } from "react-icons/fa6";

import { howToGetGLOW } from "../../constants";
import { images } from "../../assets";
import { InputBox, Logo } from "../../components";

const MyAccount = () => {
  const [cmcValue, setCMCValue] = useState();
  const [solValue, setSOLValue] = useState();

  const onChangeCMC = (e) => {
    let val = e.target.value;
    let sol = val / 5;
    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setCMCValue(val);
      setSOLValue(sol);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-[1em]">
      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`card-bg-glass card-padding rounded-[1em] space-y-[1em] col-span-1 lg:col-span-3 xl:col-span-2`}
      >
        {/* MY ACCOUNT */}
        <div className="space-y-[2em] pb-[2em] border-b border-card/50">
          <div className="flex-y-center flex-col md:flex-row">
            <p className="text-[1.5em]">How To Get $GLOW</p>
            <a
              href="https://pump.fun/coin/tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
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

        {/* BUT CRYPTO */}
        <div className="space-y-[2em]">
          <div className="flex-y-center flex-col md:flex-row">
            <p className="text-[1.5em]">$GLOW to $SOL Calculator</p>
            {/* <button className="button">Connect Wallet</button> */}
          </div>

          <div className="flex-y-center flex-col md:flex-row">
            <InputBox
              value={cmcValue}
              onChange={onChangeCMC}
              placeholder="Enter CMC Value"
              icon={<Logo w="w-[2em]" />}
            />
            <div
              className="p-[0.7em] h-[2.5em] rounded-[0.3em] bg-card/20 flex-center 
					!hidden md:!flex"
            >
              <VscArrowSwap />
            </div>
            <InputBox readOnly value={solValue} icon_url={images.sol} />
          </div>

          <button className="button w-full flex-center h-[3em]">
            Buy $CELMC
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="card-bg-glass card-padding rounded-[1em] space-y-[1em]  col-span-1 lg:col-span-2 xl:col-span-1 !px-0 !pb-0 md:!px-[1.5em] md:!pb-[2em]"
      >
        <div className="space-y-[2em]">
          <div className="flex-y-center flex-col md:flex-row">
            <p className="text-[1.5em]">Purchase SOL</p>
          </div>
          <div className="h-[440px] md:h-[390px] lg:h-[440px] xl:h-[400px]">
            <iframe
              width="100%"
              height="100%"
              frameborder="none"
              allow="camera"
              src="https://widget.changelly.com?from=usd&to=sol&amount=20&address=&fromDefault=usd&toDefault=sol&merchant_id=11vtYTCv5EU2xnqz&payment_id=&v=3"
              className="rounded-[1em]"
            >
              Can't load widget
            </iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyAccount;
