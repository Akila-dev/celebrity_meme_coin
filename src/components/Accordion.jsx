import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { slideIn } from '../utils/motion';
// import { fadeIn, textVariant } from '../utils/motion';

const Accordion = ({ data }) => {
	const [expanded, setExpanded] = useState(0);

	return (
		<div className="rounded-2xl mx-auto py-[0.5em]">
			{data.map((item, index) => (
				<motion.div key={index} className="rounded-xl overflow-hidden">
					<motion.button
						className="rounded-xl relative !block w-full text-left p-[1em] lg:px-[2em]"
						onClick={() => setExpanded(index === expanded ? false : index)}
						type="button"
					>
						{item.title}
					</motion.button>

					{/* Dropdown content */}
					<AnimatePresence initial={false}>
						<motion.div
							key="content"
							transition={{
								type: 'spring',
								visualDuration: 0.2,
								bounce: 0.2,
							}}
							style={{ height: index === expanded ? 'fit-content' : 0 }}
							layout
							className="overflow-hidden"
						>
							<div className="bg-gradient-to-b from-brand/50 to-brand3/50 px-4 py-6 md:px-8 md:py-8 space-y-4 overflow-hidden">
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

					{/* <AnimatePresence initial={false}>
						{index === expanded && (
							<motion.div
								key="content"
								initial={{ opacity: 0, height: 0 }}
								animate={{
									opacity: 1,
									height: 'fit-content',
								}}
								exit={{ opacity: 0, height: 0 }}
								transition={{
									type: 'tween',
									duration: 0.5,
									ease: 'easeInOut',
								}}
								layout
								className="bg-brand px-4 py-6 md:px-8 md:py-8 space-y-4"
							>
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
							</motion.div>
						)}
					</AnimatePresence> */}
				</motion.div>
			))}
		</div>
	);
};

export default Accordion;
