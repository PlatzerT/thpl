import React from 'react';
import MenuItem from '../MenuItem';

interface Props {
	onBackgroundClick: () => void;
}

export default function DrawerMenu({ onBackgroundClick }: Props) {
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-gray-600/25 backdrop-blur-sm"
			onClick={onBackgroundClick}
		>
			<div className="flex flex-col items-center space-y-16 text-2xl">
				<MenuItem label="Home" route="/" />
				<MenuItem label="Projects" route="/projects" />
				<MenuItem label="Contact" route="/contact" />
			</div>
		</div>
	);
}
