import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { FaTelegramPlane, FaChartLine } from 'react-icons/fa';

const Hero = () => {
	return (
		<section
			className={`relative w-full flex flex-col gap-[4em] items-center justify-center`}
		>
			<div className="pt-[5em] md:max-w-[90%]">
				<motion.div
					variants={textVariant()}
					className="flex flex-col gap-5 items-center text-center"
				>
					<h2 className={`${styles.heroHeadText}`}>
						Celebrity Meme Coin: Harness the Momentum of the 2025 Crypto Wave
					</h2>
					{/* <h1>$HLVG</h1> */}
					<p className={`${styles.heroSubText}`}>
						A Revolutionary Chapter in Cryptocurrency Unfolds
					</p>
				</motion.div>
			</div>
			{/* https://youtu.be/IDJD65SNFuQ?si=YEiVFG4AflmnthF7 */}
			<div className="w-full flex justify-center md:max-w-[90%]">
				<motion.iframe
					width="420"
					height="315"
					src="https://youtube.com/embed/IDJD65SNFuQ?si=YEiVFG4AflmnthF7?autoplay=1&mute=1"
					className="w-full md:h-[80vh] md:max-h-[400px] lg:max-h-[80vh] rounded-[1em]"
					variants={fadeIn('up', 'spring', 0, 1)}
				></motion.iframe>
			</div>
		</section>
	);
};

export default SectionWrapper(Hero, '');
