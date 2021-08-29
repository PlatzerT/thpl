import React from 'react';
import Image from 'next/image';
import MenuItem from '../MenuItem';
import DarkModeToggle from '@components/DarkModeToggle';
import { useTheme } from 'next-themes';

export default function DesktopMenu() {
	const { theme } = useTheme();
	return (
		<div className="flex items-center justify-between">
			<Image
				src={theme === 'dark' ? '/logo_light.svg' : '/logo_dark.svg'}
				height={30}
				width={30}
				alt="Logo"
			/>
			<div className="flex items-center space-x-16">
				<div className="flex items-center space-x-12">
					<MenuItem label="Home" route="/" />
					<MenuItem label="Projects" route="/projects" />
					<MenuItem label="Contact" route="/contact" />
				</div>
				<DarkModeToggle />
			</div>
		</div>
	);
}
