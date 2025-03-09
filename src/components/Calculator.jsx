import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Calculator = () => {
	return (
		<div
			className={`${styles.padding} card-bg-glass w-full padding-[1em] rounded-[1em] shadow-card !shadow-accent/[0.05]`}
		>
			<motion.div variants={textVariant()}>
				{/* <motion.p className={`${styles.sectionSubText} text-center`}>
					Tokenomics
				</motion.p> */}
				<motion.h2 className={`${styles.sectionHeadText} text-center`}>
					Calculate $CELMC
				</motion.h2>
			</motion.div>
		</div>
	);
};

export default Calculator;
