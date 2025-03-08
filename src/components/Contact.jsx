import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import { SectionWrapper } from '../hoc';
import { Logo } from '../components';

// Custom Utilities
import { styles } from '../styles';
import { slideIn, fadeIn, textVariant } from '../utils/motion';

// Icons
import { SiMaildotru } from 'react-icons/si';
import { FiCopy } from 'react-icons/fi';

// Data
import { navLinks, socialLinks, tokenomics, contactLinks } from '../constants';

const Contact = () => {
	const [active, setActive] = useState('');
	const contractAddress = tokenomics.filter(
		(data) => data.title === 'Contract'
	)[0].value;
	const emailAddress = contactLinks.filter((data) => data.name === 'mail')[0];

	return (
		<div className="space-y-[70px] lg:space-y-[100px] !text-light">
			<motion.div
				variants={textVariant()}
				className="flex flex-col items-center max-w"
			>
				<p className={`${styles.sectionSubText} text-center`}>Get In Touch</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Stay in the Loop
				</h2>
				<p className="mt-3 text-center">
					Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto
					illum cum ipsam enim quo consequatur neque quo animi officia. Lorem
					ipsum dolor sit amet. Qui natus voluptas et quia alias.
				</p>
				<div className="flex gap-5 mt-7">
					{socialLinks.map((social, i) => (
						<a
							key={i}
							href={social.url}
							target="_blank"
							className={`${styles.sectionSubText} rounded-md size-[3em] flex items-center justify-center hover:bg-accent card-gradient !text-white`}
						>
							{social.icon}
						</a>
					))}
				</div>
			</motion.div>

			{/* FOOTER */}
			<motion.div
				variants={slideIn('up', 'tween', 0.2, 1)}
				className="px-5 py-10 md:p-14 rounded-2xl card-bg-glass"
			>
				<div className="flex flex-row flex-wrap lg:flex-nowrap gap-10 w-full justify-between">
					<div className="lg:max-w-[20em] space-y-4">
						<Logo />
						<p>
							Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic
							iusto illum cum ipsam enim quo consequatur neque quo animi
							officia.
						</p>
						{/* <p className="pt-5">© 2024 HALVING TOKEN. ALL RIGHTS RESERVED</p> */}
					</div>

					{/* NAV LINKS */}
					<div className="space-y-4">
						<h3
							className={`${styles.sectionSubText} font-medium text-gradient`}
						>
							Quick Links
						</h3>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 ">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins cursor-pointer text-[16px] hover:text-white font-medium uppercase ${
										active === nav.title ? 'text-accent' : 'text-secondar'
									}`}
									onClick={() => {
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>

					{/* CONTACT SECTION */}
					<div className="space-y-5 w-full overflow-clip max-w-[18em]">
						<h3
							className={`${styles.sectionSubText} font-medium text-gradient`}
						>
							Contact us
						</h3>
						<div>
							<a
								className="text-secondar hover:text-brand"
								href={`mailto:${emailAddress.url}`}
							>
								<SiMaildotru className="inline-block .orange-text-gradient text-accent" />{' '}
								{emailAddress.label}
							</a>
						</div>

						{/* SOCIAL MEDIA ICONS */}
						<div className="flex gap-3">
							{socialLinks.map((social, i) => (
								<a
									key={i}
									href={social.url}
									target="_blank"
									className="rounded-md  size-[3em] flex items-center justify-center hover:bg-accent card-gradient"
								>
									{social.icon}
								</a>
							))}
						</div>

						{/* CONTRACT ADDRESS */}
						<div className="w-full">
							<button
								className="text-wrap flex gap-2 w-full hover:text-accent"
								onClick={() => {
									navigator.clipboard.writeText(contractAddress);
									alert('Contract Address copied');
								}}
							>
								<span className="block overflow-hidden text-ellipsis text-nowrap">
									{contractAddress}
								</span>
								<span className="block">
									<FiCopy className="" />
								</span>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-card lg:text-center">
					<p>© 2025 CELEBRITY MEME COIN. ALL RIGHTS RESERVED</p>
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
