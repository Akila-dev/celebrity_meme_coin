import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CoinCanvas } from './canvas';
import { slideIn } from '../utils/motion';

import { FAQ } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Accordion } from '../components';

const Faq = () => {
	return (
		<div className="space-y-[2em] lg:space-y-[4em]">
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>FAQ</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Frequently Asked
					<br />
					Questions
				</h2>
			</motion.div>
			<div
				className={`xl:mt-0 flex lg:flex-row flex-col-reverse lg:items-center gap-[1em] md:gap-[2em] lg:gap-[3em] overflow-hidden`}
			>
				<motion.div
					variants={slideIn('left', 'tween', 0.2, 1)}
					className="lg:flex-1 card-bg-glass rounded-[1em]"
				>
					<Accordion data={FAQ} />
				</motion.div>

				<motion.div
					variants={slideIn('right', 'tween', 0.2, 1)}
					className="lg:flex-1 overflow-visible flex items-center justify-center"
				>
					<div className="lg:flex-1 lg:h-[50vw] lg:max-h-[680px] md:h-[550px] h-[300px] overflow-visible !pointer-events-none">
						{/* <EarthCanvas /> */}
						<CoinCanvas />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SectionWrapper(Faq, 'faq');
