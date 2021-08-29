import React, { useState } from 'react';
import Image from 'next/image';
import MenuItem from '../MenuItem';
import DarkModeToggle from '@components/DarkModeToggle';
import { useTheme } from 'next-themes';
import {
	ArrowDown,
	FastArrowDown,
	NavArrowDown,
	NavArrowUp,
} from 'iconoir-react';
import DrawerMenu from './DrawerMenu';

const iconSize = 24;

export default function MobileMenu() {
	const { theme } = useTheme();
	const isDarkTheme = theme === 'dark';
	const [drawerOpen, setDrawerOpen] = useState(false);
	return (
		<div className="flex items-center justify-between">
			<Image
				src={theme === 'dark' ? '/logo_light.svg' : '/logo_dark.svg'}
				height={30}
				width={30}
				alt="Logo"
			/>
			<div className="relative">
				<div
					className={`p-3 border rounded cursor-pointer dark:border-gray-500`}
					onClick={() => setDrawerOpen(!drawerOpen)}
				>
					<NavArrowDown
						color={isDarkTheme ? '#D1D5DB' : '#374151'}
						width={iconSize}
						height={iconSize}
					/>
				</div>
				{drawerOpen && (
					<DrawerMenu onBackgroundClick={() => setDrawerOpen(!drawerOpen)} />
				)}
			</div>
			<DarkModeToggle additionalClasses="fixed bottom-6 right-6 p-4" />
		</div>
	);
}
