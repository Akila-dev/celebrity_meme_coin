import { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { SelectRadio, MyAccount } from '../components';

const Dashboard = () => {
	const [isAccountConnected, setIsAccountConnected] = useState(true);
	return (
		<div className={`space-y-[2em]`}>
			<motion.div variants={textVariant()}>
				<motion.p className={`${styles.sectionSubText} text-center`}>
					Dashboard
				</motion.p>
				<motion.h2 className={`${styles.sectionHeadText} text-center`}>
					Your $CELMC
				</motion.h2>
			</motion.div>

			<div className="">
				<MyAccount />
			</div>
		</div>
	);
};

export default SectionWrapper(Dashboard, '');
