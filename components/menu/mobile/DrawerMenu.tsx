import React from 'react';
import MenuItem from '../MenuItem';

interface Props {
	onBackgroundClick: () => void;
}

export default function DrawerMenu({ onBackgroundClick }: Props) {
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl grayscale"
			onClick={onBackgroundClick}
		>
			<div className="flex flex-col items-center space-y-16 text-2xl">
				<MenuItem label="Home" route="/" cssClasses="text-white" />
				<MenuItem label="Projects" route="/projects" />
				<MenuItem label="Contact" route="/contact" />
			</div>
		</div>
	);
}
