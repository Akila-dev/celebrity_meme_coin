import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { tokenomics } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FiCopy } from 'react-icons/fi';

const TokenomicsCard = ({ index, title, icon, value }) => (
	<Tilt className={`tokenomics-card ${index === 1 && 'cursor-pointer'}`}>
		<motion.div
			variants={fadeIn('up', 'spring', index * 0.2, 1)}
			className="w-full card-gradient p-[1px] rounded-[20px] shadow-card !shadow-accent/[0.15] text-white h-full"
		>
			<div className="dark-gradient-card rounded-[20px] card-padding h-full flex justify-evenly items-center flex-col gap-[1em]">
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className={`${styles.tokenomicsTitle} font-semibold text-center`}>
					{title}
				</h3>

				<div className="w-full overflow-hidden text-center flex gap-3">
					<div className="w-full overflow-hidden text-center">
						<p className="text-ellipsis">{value}</p>
					</div>
					{index === 1 && (
						<FiCopy
							className="text-xl"
							onClick={() => {
								navigator.clipboard.writeText(value);
								alert('Contract Address copied');
							}}
						/>
					)}
				</div>
			</div>
		</motion.div>
	</Tilt>
);

const TokenomicsStatsCard = ({ index, title, number }) => (
	<Tilt className={`tokenomics-card`}>
		<motion.div
			variants={fadeIn('up', 'spring', index * 0.2, 1)}
			className="w-full card-gradient p-[1px] rounded-[20px] shadow-card !shadow-accent/[0.15] h-full"
		>
			<div className="dark-gradient-card rounded-[20px] card-padding h-full flex justify-evenly items-center flex-col gap-[1em]">
				<h3 className={`${styles.tokenomicsTitle} font-semibold text-center`}>
					{title}
				</h3>

				<h1
					className={`${styles.sectionHeadText} orange-text-gradient text-5xl`}
				>
					{number}
				</h1>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<div>
			<div className="mb-10 md:mb-20 flex justify-center flex-wrap gap-[1.5em] lg:gap-[2em]">
				<TokenomicsStatsCard index={1} title="Tax Buy" number={3} />
				<TokenomicsStatsCard index={2} title="Tax Sell" number={6} />
			</div>

			<motion.div variants={textVariant()}>
				<motion.p className={`${styles.sectionSubText} text-center`}>
					Tokenomics
				</motion.p>
				<motion.h2 className={`${styles.sectionHeadText} text-center`}>
					Get $CELMC
				</motion.h2>
			</motion.div>

			<div className="mt-10 md:mt-20 flex justify-center flex-wrap gap-[1.5em] lg:gap-[2em]">
				{tokenomics.map((item, index) => (
					<TokenomicsCard key={item.title} index={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, 'tokenomics');
