import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { Logo } from '../components';
import { menu, close } from '../assets';

import { FaWallet } from 'react-icons/fa6';

const Navbar = ({ activeProp }) => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const popupRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				setToggle(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 z-50 absolute top-0 left-0 ${
				scrolled ? 'bg-transparent' : 'bg-transparent'
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Logo w="w-[6em]" />

				<ul className="list-none hidden lg:flex flex-row gap-10">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`${
								// active === nav.title || activeProp === index
								activeProp === index ? 'text-gradient' : 'text-secondary'
							} hover:text-[#fff] font-medium cursor-pointer uppercase`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className="hidden lg:block">
					<a
						href="https://app.uniswap.org/swap"
						target="_blank"
						className="button"
					>
						<FaWallet />
						Connect Wallet
					</a>
				</div>

				<div className="lg:hidden flex flex-1 justify-end items-center">
					{toggle ? (
						<button className="p-0" onClick={() => setToggle(false)}>
							<img
								src={close}
								alt="menu"
								className={`object-contain w-[20px] h-[20px]`}
								onClick={() => addScaleCorrector('Hello')}
							/>
						</button>
					) : (
						<img
							src={menu}
							alt="menu"
							className={`object-contain w-[24px] h-[24px]`}
							onClick={() => setToggle(true)}
						/>
					)}

					{/* MOBILE POPUP */}
					<div
						ref={popupRef}
						className={`${
							!toggle ? 'hidden' : 'flex flex-col gap-6'
						} p-6 card-bg-glass !bg-dark/90 absolute top-20 right-0 mx-4 my-2 min-w-[15em] z-10 rounded-xl shadow-card !shadow-accent/10`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer hover:text-white uppercase text-[1.2em] ${
										activeProp === index ? 'text-gradient' : 'text-secondary'
									}`}
									onClick={() => {
										setActive(nav.title);
										setToggle(!toggle);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
						<a
							href="https://app.uniswap.org/swap"
							target="_blank"
							className="button"
						>
							<FaWallet />
							Connect Wallet
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
