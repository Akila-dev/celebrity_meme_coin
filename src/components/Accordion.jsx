import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="rounded-2xl mx-auto py-[0.5em]">
      {data.map((item, index) => (
        <motion.div key={index} className="rounded-xl overflow-hidden">
          <motion.button
            className="rounded-xl relative flex items-start justify-between gap-[2em] w-full text-left p-[1em] lg:px-[2em] "
            onClick={() => setExpanded(index === expanded ? false : index)}
            type="button"
          >
            {item.title}
            <IoIosArrowDown
              layout
              style={{
                transform:
                  index === expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
              transition={{
                type: "spring",
                visualDuration: 5,
                bounce: 0.2,
              }}
              className="scale-[110%] mt-[0.25em]"
            />
          </motion.button>

          {/* Dropdown content */}
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              style={{ height: index === expanded ? "fit-content" : 0 }}
              transition={{
                type: "spring",
                visualDuration: 5,
                bounce: 0.2,
              }}
              layout
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-b from-brand/50 to-card/50 px-4 py-6 md:px-8 md:py-8 space-y-4 overflow-hidden">
                {item.content.map((item, index) => (
                  <p key={index} className="text-[14px]">
                    {item}
                  </p>
                ))}

                {item.listHeader && (
                  <h3 className="font-semibold text-[14px]">
                    {item.listHeader}
                  </h3>
                )}

                {item.list && (
                  <ul className="mt-7 list-disc ml-5 space-y-2">
                    {item.list.map((listItem, index) => (
                      <li key={index} className="text-[14px]">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
