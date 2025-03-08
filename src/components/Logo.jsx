import { useState } from 'react';
import { Link } from 'react-router-dom';

import { images } from '../assets';

const Logo = ({ w }) => {
	const [active, setActive] = useState('');
	return (
		<Link
			to="/"
			className={`${w ? w : 'w-[10em]'} block`}
			onClick={() => {
				setActive('');
				window.scrollTo(0, 0);
			}}
		>
			<img
				src={images.logo}
				alt="Celebrity Meme Coin"
				className="w-full h-auto"
			/>
		</Link>
	);
};

export default Logo;
