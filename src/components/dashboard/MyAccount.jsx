import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideIn, textVariant } from '../../utils/motion';

import { VscArrowSwap } from 'react-icons/vsc';
import { FaWallet } from 'react-icons/fa6';

import { accountData } from '../../constants';
import { images } from '../../assets';
import { InputBox, Logo } from '../../components';

const MyAccount = () => {
	const [cmcValue, setCMCValue] = useState();
	const [solValue, setSOLValue] = useState();
	const [purchaseDesc, setPurchaseDesc] = useState([
		{ label: 'Receive', value: 0.0 },
		{ label: 'Bonus', value: 0.0 },
		{ label: 'Total Receive', value: 0.0 },
	]);

	const onChangeCMC = (e) => {
		let val = e.target.value;
		let sol = val / 5;
		let bonus = val / 10;
		if (val === '' || /^[0-9\b]+$/.test(val)) {
			setCMCValue(val);
			setSOLValue(sol);

			setPurchaseDesc([
				{ label: 'Receive', value: val || 0 },
				{ label: 'Bonus', value: bonus },
				{ label: 'Total Receive', value: Number(val) + Number(bonus) },
			]);
		}
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-[1em]">
			{/* LEFT SIDE */}
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className={`card-bg-glass card-padding rounded-[1em] space-y-[1em] col-span-1 lg:col-span-2`}
			>
				{/* MY ACCOUNT */}
				<div className="space-y-[2em] pb-[2em] border-b border-card/50">
					<div className="flex-y-center flex-col md:flex-row">
						<p className="text-[1.5em]">My Account</p>
						<button className="button">
							<FaWallet />
							Connect Wallet
						</button>
					</div>

					<div className="flex no-wrap gap-[1em] text-center overflow-auto no-scrollbar">
						{accountData.map(({ label, value }, i) => (
							<div
								key={i}
								className="card-bg-glass rounded-[1em] card-padding flex justify-evenly items-center flex-col gap-[0.5em] min-w-[11em] w-fit"
							>
								<h1 className={`text-gradient text-[2em] font-semibold`}>
									{value}
								</h1>
								<h3 className={`text-[0.7em] font-medium uppercase`}>
									{label}
								</h3>
							</div>
						))}
					</div>
				</div>

				{/* BUT CRYPTO */}
				<div className="space-y-[2em]">
					<div className="flex-y-center flex-col md:flex-row">
						<p className="text-[1.5em]">Buy Crypto</p>
						{/* <button className="button">Connect Wallet</button> */}
					</div>

					<div className="flex-y-center flex-col md:flex-row">
						<InputBox
							value={cmcValue}
							onChange={onChangeCMC}
							placeholder="Enter CMC Value"
							icon={<Logo w="w-[2em]" />}
						/>
						<div
							className="p-[0.7em] h-[2.5em] rounded-[0.3em] bg-card/20 flex-center 
					!hidden md:!flex"
						>
							<VscArrowSwap />
						</div>
						<InputBox readOnly value={solValue} icon_url={images.sol} />
					</div>

					<button className="button w-full flex-center h-[3em]">
						Buy $CELMC
					</button>
				</div>
			</motion.div>

			{/* RIGHT SIDE */}
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="card-bg-glass card-padding rounded-[1em] space-y-[1em]"
			>
				<div className="space-y-[2em]">
					<div className="flex-y-center flex-col md:flex-row">
						<p className="text-[1.5em]">Order Summary</p>
					</div>
					<div className="space-y-[1em]">
						{purchaseDesc.map(({ label, value }, i) => (
							<div key={i}>
								{/* <div className="w-[2em] h-[0.2em] card-gradient mb-[1em]" /> */}
								<div className="flex-y-center pb-[1em] border-b border-card/50">
									<p className="text-[0.8em] font-medium">{label}</p>
									<p className="text-[0.8em] font-medium">
										{Number(value || 0).toFixed(2)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default MyAccount;
