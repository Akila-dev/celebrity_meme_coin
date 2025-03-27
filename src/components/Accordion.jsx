import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

const ListContainer = ({ list }) => (
  <ul className="mt-7 list-disc ml-5 space-y-2">
    {list.map((list, i) => (
      <div key={i} className="flex flex-col gap-[0.5em]">
        <li className="">
          {list.title && (
            <b className="font-semibold text-gradient">{list.title}:</b>
          )}{" "}
          {list.desc && list.desc}
        </li>
        {list.subList &&
          list.subList.map((subList, j) => (
            <ul
              key={j}
              className="flex flex-col gap-[0.5em] ml-[1em] list-disc"
            >
              <li className="">
                {subList.title && (
                  <b className="font-semibold text-gradient">
                    {subList.title}:
                  </b>
                )}{" "}
                {subList.desc && subList.desc}
              </li>
              {subList.subList &&
                subList.subList.map((subList2, j) => (
                  <ul
                    key={j}
                    className="flex flex-col gap-[0.5em] ml-[1em] list-disc"
                  >
                    <li className="">
                      {subList2.title && (
                        <b className="font-semibold text-gradient">
                          {subList2.title}:
                        </b>
                      )}{" "}
                      {subList2.desc && subList2.desc}
                    </li>
                  </ul>
                ))}
            </ul>
          ))}
      </div>
    ))}
  </ul>
);

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="rounded-2xl mx-auto py-[0em]">
      {data.map((item, i) => (
        <motion.div key={i} className={` rounded-xl overflow-hidden`}>
          <motion.button
            className={`rounded-xl relative flex items-start justify-between gap-[2em] w-full text-left p-[1em] lg:px-[2em] ${
              i === 0 && "pt-[1.5em]"
            } ${i === data.length - 1 && "pb-[1.5em]"}`}
            onClick={() => setExpanded(i === expanded ? false : i)}
            type="button"
          >
            {item.title}
            <IoIosArrowDown
              layout
              style={{
                transform: i === expanded ? "rotate(180deg)" : "rotate(0deg)",
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
              style={{ height: i === expanded ? "fit-content" : 0 }}
              transition={{
                type: "spring",
                visualDuration: 5,
                bounce: 0.2,
              }}
              layout
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-b from-brand/50 to-card/50 px-4 py-6 md:px-8 md:py-8 space-y-4 overflow-hidden">
                {/* P */}
                {item.content.map((item, i) => (
                  <p key={i} className="">
                    {item}
                  </p>
                ))}

                {item.preHeaderList && (
                  <ListContainer list={item.preHeaderList} />
                )}

                {item.listHeader && (
                  <h3 className="font-semibold ">{item.listHeader}</h3>
                )}

                {item.list && <ListContainer list={item.list} />}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
