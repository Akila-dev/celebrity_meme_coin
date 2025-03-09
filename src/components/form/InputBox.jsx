import React from 'react';
import { Logo } from '../../components';

const InputBox = ({
	value,
	onChange,
	placeholder,
	readOnly,
	icon,
	icon_url,
}) => {
	return (
		<div className="p-[0.7em] h-[2.5em] rounded-[0.3em] bg-card/20 flex-y-center w-full">
			{icon && icon}
			{icon_url && (
				<img src={icon_url} alt="icon" className="size-[1.5em] rounded-full" />
			)}
			{readOnly ? (
				<p className="w-full bg-transparent outline-none active:outline-none text-card2 !font-light pointer-events-none">
					{Number(value || 0).toFixed(2)}
				</p>
			) : (
				<input
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="w-full bg-transparent outline-none active:outline-none text-card2 !font-light"
					type="text"
					pattern="^\d+$"
				/>
			)}
		</div>
	);
};

export default InputBox;
