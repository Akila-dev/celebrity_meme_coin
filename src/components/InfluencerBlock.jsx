import React from "react";
import { motion } from "framer-motion";
import { PiCaretDoubleDownBold } from "react-icons/pi";

import { fadeIn } from "../utils/motion";
import { Logo } from "../components";

const InfluencerBlock = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.75, 1)}
      className="w-full card-gradient p-[1px] rounded-[20px] shadow-card !shadow-accent/[0.15] text-white h-full"
    >
      <div
        className={`dark-gradient-card rounded-[20px] card-padding flex flex-col gap-[1em] influencer-block relative h-fit`}
      >
        {/* <div className="flex items-center justify-center">
          <Logo w="w-[10em]" />
        </div> */}
        <p>
          Hey there, amazing community! I'm <span>[Influencer Name]</span>, and
          I'm overjoyed to bring you into a new chapter of our story. You've
          been with me—hundreds of thousands across my platforms—cheering me
          through beauty tutorials, travel vlogs, or heartfelt chats. Now,{" "}
          <span>
            I've launched a meme coin that honors our journey, serves as a
            digital collectible, and kicks off an exclusive fan movement!
          </span>{" "}
          This isn't about financial promises—it's about your support, a
          keepsake of our moments, and uniting us.
        </p>
        <p>
          This token reflects the effort I've put into my content and our bond.
          Your encouragement has pushed me to dream bigger, and by grabbing this
          token, you're supporting my next creative steps while showing your
          belief in me.{" "}
          <span>It's not about profit—it's about being part of my story.</span>
          It's also a digital collectible—a memento of our shared laughs and
          lessons. With many loving digital memories, this token lets you
          treasure our journey forever.
        </p>
        <p>
          Plus, <span>this token launches an exclusive fan movement.</span> With
          so many seeking belonging, you'll join a special community of my most
          dedicated supporters. Gain access to a private space where we'll share
          behind-the-scenes looks, early content reveals, and connect with
          others who share our passion. This isn't about money—it's about pride
          and family. I've always wanted a place for my fans to unite, and this
          movement brings that dream to life.{" "}
        </p>
        <p>
          <span>
            Your support has shaped me, and this token is my celebration of
            that.
          </span>
          It's about building a legacy, cherishing our memories, and launching a
          movement of strength. Head to the link in the description or bio, grab
          your token, and join this adventure.{" "}
          <span>
            Step into our community to share your voice, and let's make this
            extraordinary.
          </span>{" "}
          Drop a comment below—tell me what my content has meant to you or a
          standout memory—and let's keep this connection thriving.{" "}
          <span>
            Whether it's beauty, travel, or inspiration, you're my driving
            force, and this token honors that. Thank you for being my incredible
            family—let's make history together!"
          </span>
        </p>
        <div className="flex items-center justify-end">
          <Logo w="w-[5em]" />
        </div>
      </div>
    </motion.div>
  );
};

export default InfluencerBlock;
